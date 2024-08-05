// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./../Interfaces/IDistributorWalletFactory.sol";
import "./../Interfaces/IWhitelistingManager.sol"; // Ensure the path is correct

contract ProtocolModule is Ownable {
    uint256 public wrappedSongCreationFee;
    uint256 public releaseFee;
    IDistributorWalletFactory public distributorWalletFactory;
    IWhitelistingManager public whitelistingManager;

    mapping(address => string) public isrcRegistry;
    mapping(address => string) public upcRegistry;
    mapping(address => string) public iswcRegistry;
    mapping(address => string) public isccRegistry;

    mapping(address => address) public wrappedSongToDistributor;
    mapping(address => address) public pendingDistributorRequests;

    event WrappedSongReleaseRequested(address indexed wrappedSong, address indexed distributor);
    event WrappedSongReleased(address indexed wrappedSong, address indexed distributor);

    /**
     * @dev Initializes the contract with the given parameters.
     * @param _distributorWalletFactory The address of the DistributorWalletFactory contract.
     * @param _whitelistingManager The address of the WhitelistingManager contract.
     */
    constructor  (
        address _distributorWalletFactory,
        address _whitelistingManager
    ) Ownable(msg.sender) {
        distributorWalletFactory = IDistributorWalletFactory(_distributorWalletFactory);
        whitelistingManager = IWhitelistingManager(_whitelistingManager);
    }
    /**
     * @dev Requests the release of a wrapped song by the owner.
     * @param wrappedSong The address of the wrapped song.
     * @param distributor The address of the distributor.
     */
    function requestWrappedSongRelease(address wrappedSong, address distributor) external {
        require(msg.sender == Ownable(wrappedSong).owner(), "Only wrapped song owner can request release");
        require(wrappedSongToDistributor[wrappedSong] == address(0), "Wrapped song already released");
        require(distributorWalletFactory.checkIsDistributorWallet(distributor), "Distributor does not exist"); // Check if distributor exists
        pendingDistributorRequests[wrappedSong] = distributor;
        emit WrappedSongReleaseRequested(wrappedSong, distributor);
    }

    /**
     * @dev Removes the release request of a wrapped song by the owner.
     * @param wrappedSong The address of the wrapped song.
     */
    function removeWrappedSongReleaseRequest(address wrappedSong) external {
        require(msg.sender == Ownable(wrappedSong).owner(), "Only wrapped song owner can remove release request");
        require(pendingDistributorRequests[wrappedSong] != address(0), "No pending release request");
        require(distributorWalletFactory.checkIsDistributorWallet(pendingDistributorRequests[wrappedSong]), "Distributor does not exist"); // Check if distributor exists
        delete pendingDistributorRequests[wrappedSong];
    }

    /**
     * @dev Confirms the release of a wrapped song by the pending distributor.
     * @param wrappedSong The address of the wrapped song.
     */
    function confirmWrappedSongRelease(address wrappedSong) external {
        address distributor = pendingDistributorRequests[wrappedSong];
        require(distributor != address(0), "No pending release request");
        require(distributorWalletFactory.checkIsDistributorWallet(msg.sender), "Distributor does not exist");

        wrappedSongToDistributor[wrappedSong] = distributor;
        delete pendingDistributorRequests[wrappedSong];
        emit WrappedSongReleased(wrappedSong, distributor);
    }

    /**
     * @dev Rejects the release request of a wrapped song by the pending distributor.
     * @param wrappedSong The address of the wrapped song.
     */
    function rejectWrappedSongRelease(address wrappedSong) external {
        address distributor = pendingDistributorRequests[wrappedSong];
        require(distributor != address(0), "No pending release request");
        require(distributorWalletFactory.checkIsDistributorWallet(msg.sender), "Distributor does not exist");
        delete pendingDistributorRequests[wrappedSong];
    }

    /**
     * @dev Returns the distributor address for a given wrapped song.
     * @param wrappedSong The address of the wrapped song.
     * @return The address of the distributor.
     */
    function getWrappedSongDistributor(address wrappedSong) external view returns (address) {
        return wrappedSongToDistributor[wrappedSong];
    }

    /**
     * @dev Returns the pending distributor address for a given wrapped song.
     * @param wrappedSong The address of the wrapped song.
     * @return The address of the pending distributor.
     */
    function getPendingDistributorRequests(address wrappedSong) external view returns (address) {
        return pendingDistributorRequests[wrappedSong];
    }

    /**
     * @dev Sets the fee for creating a wrapped song. Only the owner can set the fee.
     * @param _fee The new fee for creating a wrapped song.
     */
    function setWrappedSongCreationFee(uint256 _fee) external onlyOwner {
        wrappedSongCreationFee = _fee;
    }

    /**
     * @dev Sets the fee for releasing a wrapped song. Only the owner can set the fee.
     * @param _fee The new fee for releasing a wrapped song.
     */
    function setReleaseFee(uint256 _fee) external onlyOwner {
        releaseFee = _fee;
    }

    /**
     * @dev Updates the address of the DistributorWalletFactory contract. Only the owner can update the address.
     * @param _newFactory The address of the new DistributorWalletFactory contract.
     */
    function updateDistributorWalletFactory(address _newFactory) external onlyOwner {
        distributorWalletFactory = IDistributorWalletFactory(_newFactory);
    }

    /**
     * @dev Sets the address of the WhitelistingManager contract. Only the owner can set the address.
     * @param _whitelistingManager The address of the new WhitelistingManager contract.
     */
    function setWhitelistingManager(address _whitelistingManager) external onlyOwner {
        whitelistingManager = IWhitelistingManager(_whitelistingManager);
    }

    /**
     * @dev Adds an ISRC to the registry for a given wrapped song.
     * @param wrappedSong The address of the wrapped song.
     * @param isrc The ISRC to be added.
     */
    function addISRC(address wrappedSong, string memory isrc) external onlyOwner {
        isrcRegistry[wrappedSong] = isrc;
    }

    /**
     * @dev Adds a UPC to the registry for a given wrapped song.
     * @param wrappedSong The address of the wrapped song.
     * @param upc The UPC to be added.
     */
    function addUPC(address wrappedSong, string memory upc) external onlyOwner {
        upcRegistry[wrappedSong] = upc;
    }

    /**
     * @dev Adds an ISWC to the registry for a given wrapped song.
     * @param wrappedSong The address of the wrapped song.
     * @param iswc The ISWC to be added.
     */
    function addISWC(address wrappedSong, string memory iswc) external onlyOwner {
        iswcRegistry[wrappedSong] = iswc;
    }

    /**
     * @dev Adds an ISCC to the registry for a given wrapped song.
     * @param wrappedSong The address of the wrapped song.
     * @param iscc The ISCC to be added.
     */
    function addISCC(address wrappedSong, string memory iscc) external onlyOwner {
        isccRegistry[wrappedSong] = iscc;
    }
}