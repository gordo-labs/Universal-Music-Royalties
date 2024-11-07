// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IMetadataModule {
    struct Metadata {
        string name;
        string description;
        string image;
        string externalUrl;
        string animationUrl;
        string attributesIpfsHash;
    }

    function getTokenURI(address wrappedSong, uint256 tokenId) external view returns (string memory);
    function getPendingMetadataUpdate(address wrappedSong) external view returns (Metadata memory);
    function isMetadataUpdateConfirmed(address wrappedSong) external view returns (bool);
    
    // Update createMetadata to return Metadata
    function createMetadata(address wrappedSong, Metadata memory newMetadata) external returns (Metadata memory);
    function requestUpdateMetadata(address wrappedSong, Metadata memory newMetadata) external;
    function updateMetadata(address wrappedSong, Metadata memory newMetadata) external;
    function confirmUpdateMetadata(address wrappedSong) external;
    function rejectUpdateMetadata(address wrappedSong) external;
    function removeMetadata(address wrappedSong) external;
}
