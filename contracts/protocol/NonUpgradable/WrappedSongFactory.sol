// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./../Interfaces/IProtocolModule.sol";
import "./../Interfaces/IMetadataModule.sol";
import "./../Interfaces/IWrappedSongSmartAccount.sol";
import "./../Interfaces/IWSTokenManagement.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/proxy/Clones.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract WrappedSongFactory {
    using Clones for address;
    using SafeERC20 for IERC20;

    IProtocolModule public immutable protocolModule;
    IMetadataModule public immutable metadataModule;
    
    address public immutable wrappedSongTemplate;
    address public immutable wsTokenTemplate;

    mapping(address => uint256) public accumulatedFees;

    event WrappedSongCreated(
        address indexed owner,
        address indexed wrappedSongSmartAccount,
        address stablecoin,
        address wsTokenManagement,
        uint256 sharesAmount,
        IMetadataModule.Metadata metadata
    );

    event FeesWithdrawn(address indexed token, address indexed recipient, uint256 amount);

    event CreationFeeCollected(address indexed wrappedSong, address indexed token, uint256 amount);

    constructor(
        address _protocolModule,
        address _wrappedSongTemplate,
        address _wsTokenTemplate
    ) {
        require(_protocolModule != address(0), "Invalid protocol module");
        require(_wrappedSongTemplate != address(0), "Invalid wrapped song template");
        require(_wsTokenTemplate != address(0), "Invalid WSToken template");
        
        protocolModule = IProtocolModule(_protocolModule);
        metadataModule = IMetadataModule(protocolModule.getMetadataModule());
        wrappedSongTemplate = _wrappedSongTemplate;
        wsTokenTemplate = _wsTokenTemplate;
    }

    function _handleCreationFee() internal {
        uint256 creationFee = protocolModule.wrappedSongCreationFee();
        bool payInStablecoin = protocolModule.payInStablecoin();
        
        if (creationFee > 0) {
            if (payInStablecoin) {
                // Get the current stablecoin from protocol
                uint256 currentStablecoinIndex = protocolModule.currentStablecoinIndex();
                address stablecoin = protocolModule.erc20whitelist().getWhitelistedTokenAtIndex(currentStablecoinIndex);
                require(stablecoin != address(0), "No whitelisted stablecoin available");

                // Transfer stablecoin fee from user to this contract
                IERC20(stablecoin).safeTransferFrom(msg.sender, address(this), creationFee);
                
                // Add to accumulated fees
                accumulatedFees[stablecoin] += creationFee;
                
                emit CreationFeeCollected(address(0), stablecoin, creationFee); // address(0) since wrapped song not created yet
            } else {
                // Check if correct ETH amount was sent
                require(msg.value >= creationFee, "Incorrect ETH fee amount");
                
                // Add to accumulated fees for ETH (address(0))
                accumulatedFees[address(0)] += msg.value;

                // Refund excess ETH if any
                if (msg.value > creationFee) {
                    (bool refundSuccess, ) = msg.sender.call{value: msg.value - creationFee}("");
                    require(refundSuccess, "ETH refund failed");
                }
                
                emit CreationFeeCollected(address(0), address(0), msg.value);
            }
        }
    }

    function createWrappedSong(
        address _stablecoin,
        IMetadataModule.Metadata memory songMetadata,
        uint256 sharesAmount
    ) public payable returns (address) {
        require(!protocolModule.paused(), "Protocol is paused");
        require(isValidMetadata(songMetadata), "Invalid metadata");
        require(sharesAmount > 0, "Shares amount must be greater than zero");
        require(protocolModule.isValidToCreateWrappedSong(msg.sender), "Not valid to create Wrapped Song");
        require(protocolModule.isTokenWhitelisted(_stablecoin), "Stablecoin is not whitelisted");

        // Handle creation fee
        _handleCreationFee();

        // Clone WrappedSongSmartAccount
        address newWrappedSongSmartAccount = wrappedSongTemplate.clone();
        
        // Initialize WrappedSongSmartAccount
        IWrappedSongSmartAccount(newWrappedSongSmartAccount).initialize(
            _stablecoin,
            tx.origin,
            address(protocolModule)
        );

        // Clone WSTokenManagement
        address wsTokenManagementAddress = wsTokenTemplate.clone();
        
        // Initialize WSTokenManagement
        IWSTokenManagement(wsTokenManagementAddress).initialize(
            newWrappedSongSmartAccount,
            msg.sender,
            address(protocolModule)
        );

        // Set protocol relationships first
        protocolModule.setWSTokenFromProtocol(wsTokenManagementAddress);
        
        protocolModule.setSmartAccountToWSToken(
            newWrappedSongSmartAccount,
            wsTokenManagementAddress
        );
        
        protocolModule.setOwnerWrappedSong(
            msg.sender,
            newWrappedSongSmartAccount
        );

        // Then set WSTokenManagement in WrappedSongSmartAccount
        IWrappedSongSmartAccount(newWrappedSongSmartAccount).setWSTokenManagement(wsTokenManagementAddress);
        // Finally create initial shares
        IWrappedSongSmartAccount(newWrappedSongSmartAccount).createSongShares(sharesAmount);

        // Create metadata
        IMetadataModule.Metadata memory createdMetadata = metadataModule.createMetadata(
            newWrappedSongSmartAccount,
            songMetadata
        );


        emit WrappedSongCreated(
            msg.sender,
            newWrappedSongSmartAccount,
            _stablecoin,
            wsTokenManagementAddress,
            sharesAmount,
            createdMetadata
        );

        return newWrappedSongSmartAccount;
    }

    function isValidMetadata(
        IMetadataModule.Metadata memory metadata
    ) internal pure returns (bool) {
        return (
            bytes(metadata.name).length > 0 &&
            bytes(metadata.image).length > 0 &&
            bytes(metadata.animationUrl).length > 0 &&
            bytes(metadata.attributesIpfsHash).length > 0
        );
    }

    function withdrawAccumulatedFees(address token, address recipient) external {
        require(msg.sender == address(protocolModule.owner()), "Only protocol owner can withdraw fees");

        uint256 amount = accumulatedFees[token];
        require(amount > 0, "No fees to withdraw");
        
        accumulatedFees[token] = 0;
        
        if (token == address(0)) {
            (bool success, ) = payable(recipient).call{value: amount}("");
            require(success, "ETH transfer failed");
        } else {
            IERC20(token).safeTransfer(recipient, amount);
        }
        
        emit FeesWithdrawn(token, recipient, amount);
    }

    receive() external payable {}
}
