// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IProtocolModule {
    function wrappedSongCreationFee() external view returns (uint256);
    function releaseFee() external view returns (uint256);
    function distributorWalletFactory() external view returns (address);
    function whitelistingManager() external view returns (address);
    function isrcRegistry(address wrappedSong) external view returns (string memory);
    function upcRegistry(address wrappedSong) external view returns (string memory);
    function iswcRegistry(address wrappedSong) external view returns (string memory);
    function isccRegistry(address wrappedSong) external view returns (string memory);
    function wrappedSongToDistributor(address wrappedSong) external view returns (address);
    function pendingDistributorRequests(address wrappedSong) external view returns (address);

    function requestWrappedSongRelease(address wrappedSong, address distributor) external;
    function removeWrappedSongReleaseRequest(address wrappedSong) external;
    function confirmWrappedSongRelease(address wrappedSong) external;
    function rejectWrappedSongRelease(address wrappedSong) external;
    function getWrappedSongDistributor(address wrappedSong) external view returns (address);
    function getPendingDistributorRequests(address wrappedSong) external view returns (address);
    function setWrappedSongCreationFee(uint256 _fee) external;
    function setReleaseFee(uint256 _fee) external;
    function updateDistributorWalletFactory(address _newFactory) external;
    function setWhitelistingManager(address _whitelistingManager) external;
    function addISRC(address wrappedSong, string memory isrc) external;
    function addUPC(address wrappedSong, string memory upc) external;
    function addISWC(address wrappedSong, string memory iswc) external;
    function addISCC(address wrappedSong, string memory iscc) external;
}