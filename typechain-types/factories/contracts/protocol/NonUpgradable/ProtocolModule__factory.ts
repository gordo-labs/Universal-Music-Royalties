/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  ProtocolModule,
  ProtocolModuleInterface,
} from "../../../../contracts/protocol/NonUpgradable/ProtocolModule";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_distributorWalletFactory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_whitelistingManager",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "wrappedSong",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "distributor",
        type: "address",
      },
    ],
    name: "DistributorAcceptedReview",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "wrappedSong",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "newMetadata",
        type: "string",
      },
    ],
    name: "MetadataUpdateRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "wrappedSong",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "newMetadata",
        type: "string",
      },
    ],
    name: "MetadataUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "isPaused",
        type: "bool",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "wrappedSong",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "distributor",
        type: "address",
      },
    ],
    name: "ReviewPeriodExpired",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "wrappedSong",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "distributor",
        type: "address",
      },
    ],
    name: "WrappedSongReleaseRejected",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "wrappedSong",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "distributor",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
    ],
    name: "WrappedSongReleaseRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "wrappedSong",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "distributor",
        type: "address",
      },
    ],
    name: "WrappedSongReleased",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wrappedSong",
        type: "address",
      },
    ],
    name: "acceptWrappedSongForReview",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wrappedSong",
        type: "address",
      },
      {
        internalType: "string",
        name: "iscc",
        type: "string",
      },
    ],
    name: "addISCC",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wrappedSong",
        type: "address",
      },
      {
        internalType: "string",
        name: "isrc",
        type: "string",
      },
    ],
    name: "addISRC",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wrappedSong",
        type: "address",
      },
      {
        internalType: "string",
        name: "iswc",
        type: "string",
      },
    ],
    name: "addISWC",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wrappedSong",
        type: "address",
      },
      {
        internalType: "string",
        name: "upc",
        type: "string",
      },
    ],
    name: "addUPC",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wrappedSong",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "clearPendingMetadataUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wrappedSong",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "confirmUpdateMetadata",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wrappedSong",
        type: "address",
      },
    ],
    name: "confirmWrappedSongRelease",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "distributorWalletFactory",
    outputs: [
      {
        internalType: "contract IDistributorWalletFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wrappedSong",
        type: "address",
      },
    ],
    name: "getPendingDistributorRequests",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wrappedSong",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getPendingMetadataUpdate",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wrappedSong",
        type: "address",
      },
    ],
    name: "getWrappedSongDistributor",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wrappedSong",
        type: "address",
      },
    ],
    name: "handleExpiredReviewPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wrappedSong",
        type: "address",
      },
    ],
    name: "isAuthentic",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wrappedSong",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "isMetadataUpdateConfirmed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wrappedSong",
        type: "address",
      },
    ],
    name: "isReleased",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
    ],
    name: "isValidToCreateWrappedSong",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isccRegistry",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isrcRegistry",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "iswcRegistry",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "metadataUpdateConfirmed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "pendingDistributorRequests",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "pendingMetadataUpdates",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wrappedSong",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "rejectUpdateMetadata",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wrappedSong",
        type: "address",
      },
    ],
    name: "rejectWrappedSongRelease",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "releaseFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wrappedSong",
        type: "address",
      },
    ],
    name: "removeWrappedSongReleaseRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wrappedSong",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "newMetadata",
        type: "string",
      },
    ],
    name: "requestUpdateMetadata",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wrappedSong",
        type: "address",
      },
      {
        internalType: "address",
        name: "distributor",
        type: "address",
      },
    ],
    name: "requestWrappedSongRelease",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "reviewPeriodDays",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "reviewPeriods",
    outputs: [
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "distributor",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_paused",
        type: "bool",
      },
    ],
    name: "setPaused",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "setReleaseFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_days",
        type: "uint256",
      },
    ],
    name: "setReviewPeriodDays",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_whitelistingManager",
        type: "address",
      },
    ],
    name: "setWhitelistingManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wrappedSong",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isAuthentic",
        type: "bool",
      },
    ],
    name: "setWrappedSongAuthenticity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "setWrappedSongCreationFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "upcRegistry",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newFactory",
        type: "address",
      },
    ],
    name: "updateDistributorWalletFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "whitelistingManager",
    outputs: [
      {
        internalType: "contract IWhitelistingManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "wrappedSongAuthenticity",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wrappedSongCreationFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "wrappedSongToDistributor",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608034620000f357601f6200209638819003918201601f19168301916001600160401b03831184841017620000f8578084926040948552833981010312620000f3576200005a602062000052836200010e565b92016200010e565b903315620000da576000549160018060a01b031933818516176000556040519360018060a01b03938491823391167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a36007600f55169060035416176003551660018060a81b03196004541617600455611f729081620001248239f35b604051631e4fbdf760e01b815260006004820152602490fd5b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b0382168203620000f35756fe608060408181526004918236101561001657600080fd5b600092833560e01c91826306fd88ed14611b98575081630c5d8da114611b6f57816316c38b3c14611b045781631a3b00e214611ae55781631e944d5414611aaa5781631f47106914611a8857816321dd882b14611a4d5781632490a90114611a2e5781632b03295f146118675781632cd6c9a6146117cd5781633224d8481461184557816337c38c481461180857816339bc9603146117865781633aa690e7146117cd5781633f01032914611786578163438c9d9514611767578163496d51af1461166a5781634b08ec50146114b25781634bb43e5c146114775781634fa71b061461137a5781635c975abb146113545781636b09d202146109d2578163715018a6146112fa57816388888b101461105f5781638951aa8714610dd85781638bfa25da14610db65781638da5cb5b14610d8e5781639860da0014610d535781639bb1691814610d27578163a4144de614610c2a578163a42d04f414610be7578163a449357514610ba9578163a951583b14610b68578163ac581b3a14610b40578163b0c70e2714610a5f578163be94e31914610a0d578163c7be5e2a146109d2578163ccad87f0146108e9578163cd36bc9a146107d3578163d78bd5b014610705578163dfef9681146105c4578163e72cfcb814610571578163ef6f0476146104a5578163f140b55f1461041b578163f2fde38b1461038f578163f526036914610280575063f57097b81461022a57600080fd5b3461027c578060031936011261027c576102789161026d9082906001600160a01b03610254611bd3565b168152600b602052818120602435825260205220611c77565b905191829182611d1d565b0390f35b5080fd5b9190503461038b57602080600319360112610387576001600160a01b039281846102a8611bd3565b1694858752600a82526102c18186892054163314611e90565b6003541691602485518094819363d42fe23160e01b835233908301525afa90811561037d5760029261030060009593600e938991610350575b50611e44565b858752600a815282872080546001600160a01b031916905552842082815560018101839055015533907fc507cac5427f24391d3862582c450f4840191f3fb50ae93ea8eb3e5d0a27241a8380a380f35b6103709150833d8511610376575b6103688183611c55565b810190611e2c565b386102fa565b503d61035e565b83513d87823e3d90fd5b8380fd5b8280fd5b90503461038b57602036600319011261038b576103aa611bd3565b906103b3611e00565b6001600160a01b03918216928315610405575050600054826001600160601b0360a01b821617600055167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a380f35b51631e4fbdf760e01b8152908101849052602490fd5b9190503461038b57602036600319011261038b576020610439611bd3565b8354835163f140b55f60e01b81526001600160a01b039283169581019590955284916024918391165afa91821561049b576020939261047c575b50519015158152f35b610494919250833d8111610376576103688183611c55565b9038610473565b81513d85823e3d90fd5b90503461038b578160031936011261038b576104bf611bd3565b6001600160a01b03908116808552600960209081528486205460243594919316330361051a5750808552600b82528385208386528252610500848620611ef3565b8452600c8152828420918452528120805460ff1916905580f35b845162461bcd60e51b8152908101839052602b60248201527f4f6e6c79206469737472696275746f722063616e2072656a656374206d65746160448201526a646174612075706461746560a81b6064820152608490fd5b50503461027c57602036600319011261027c576060916001600160a01b03919081908361059c611bd3565b168152600e602052209081549260026001840154930154169181519384526020840152820152f35b83833461027c576105d436611dbd565b93906105de611e00565b6001600160a01b031683526006602090815291832084519092909167ffffffffffffffff83116106f257506106138354611be9565b601f81116106b9575b5080601f8311600114610657575083948293949261064c575b50508160011b916000199060031b1c191617905580f35b015190508480610635565b90601f198316958486528286209286905b8882106106a157505083600195969710610688575b505050811b01905580f35b015160001960f88460031b161c1916905584808061067d565b80600185968294968601518155019501930190610668565b6106e290848652828620601f850160051c8101918486106106e8575b601f0160051c0190611edc565b8561061c565b90915081906106d5565b634e487b7160e01b855260419052602484fd5b90503461038b578160031936011261038b5761071f611bd3565b602435916001600160a01b0390911690338290036107715750808452600b602052828420828552602052610754838520611ef3565b8352600c602052818320908352602052812060ff19815416905580f35b608490602085519162461bcd60e51b8352820152603660248201527f4f6e6c792057726170706564536f6e67536d6172744163636f756e742063616e60448201527520636c6561722070656e64696e67207570646174657360501b6064820152fd5b9190503461038b578060031936011261038b576107ee611bd3565b6001600160a01b036024358181169392908490036108e457811693848652602091600983528084882054166108a257600354845163d42fe23160e01b8152928301869052839183916024918391165afa90811561089857600a92916108599188916103505750611e44565b84865252832080546001600160a01b0319168217905533917fef84744274082261c3a861cf791747fa0ff5d32d6b7dad92e9f777118fc002898480a480f35b83513d88823e3d90fd5b50915162461bcd60e51b815291820152601d60248201527f5772617070656420736f6e6720616c72656164792072656c65617365640000006044820152606490fd5b600080fd5b90503461038b57602036600319011261038b576001600160a01b03908161090e611bd3565b1692838552600e6020528085209181519261092884611c23565b8054845282856002600184015493846020890152015416940193845242111561099057506002600091858752600e602052862082815582600182015501555116907ffbea9ba5ee98f3c8b5c04ea0c944ead3100801a041d88f0c7e90d404ddac1c6a8380a380f35b6020606492519162461bcd60e51b8352820152601d60248201527f52657669657720706572696f6420686173206e6f7420657870697265640000006044820152fd5b50503461027c57602036600319011261027c576020916001600160a01b03908290826109fc611bd3565b168152600a85522054169051908152f35b50503461027c578060031936011261027c57610a27611bd3565b90602435918215158093036108e457610a3e611e00565b60018060a01b03168352600d60205282209060ff8019835416911617905580f35b9190503461038b57602080600319360112610387576001600160a01b03928184610a87611bd3565b1694858752600a8252610aa08186892054163314611e90565b6003541691602485518094819363d42fe23160e01b835233908301525afa90811561037d57600292610ade60009593600e9389916103505750611e44565b858752600981528287206001600160601b0360a01b903382825416179055600a8252838820908154169055528420828155826001820155015533907f1ec2d15be1d4041a85003ee3860453fb0818606e3ccda6f18c41e692a25d5eea8380a380f35b90503461038b578260031936011261038b575490516001600160a01b03909116815260209150f35b83903461027c57602036600319011261027c57610b83611bd3565b610b8b611e00565b81546001600160a01b0319166001600160a01b039190911617905580f35b50503461027c57602036600319011261027c5760209160ff9082906001600160a01b03610bd4611bd3565b168152600d855220541690519015158152f35b8334610c27576020366003190112610c2757610c01611bd3565b610c09611e00565b60018060a01b03166001600160601b0360a01b600354161760035580f35b80fd5b83833461027c57610c3a36611dbd565b9390610c44611e00565b6001600160a01b031683526007602090815291832084519092909167ffffffffffffffff83116106f25750610c798354611be9565b601f8111610cf9575b5080601f8311600114610cb1575083948293949261064c5750508160011b916000199060031b1c191617905580f35b90601f198316958486528286209286905b888210610ce15750508360019596971061068857505050811b01905580f35b80600185968294968601518155019501930190610cc2565b610d2190848652828620601f850160051c8101918486106106e857601f0160051c0190611edc565b85610c82565b50503461027c578060031936011261027c576102789161026d9082906001600160a01b03610254611bd3565b50503461027c57602036600319011261027c576102789161026d9082906001600160a01b03610d80611bd3565b168152600860205220611c77565b50503461027c578160031936011261027c57905490516001600160a01b039091168152602090f35b83903461027c57602036600319011261027c57610dd1611e00565b3560025580f35b9190503461038b578060031936011261038b57610df3611bd3565b916024359260018060a01b0380911692838652602091600983528187205416330361100957838652600b82528086208587528252610e3381872054611be9565b15610fc857838652600c8252808620858752825280862060019360ff19918583825416179055853b15610fc4578251630c9c2a8960e21b8152818101889052908882602481838b5af18015610fba57610f8a575b5050848752600b835281872086885283528187209282519481865288948054610eaf81611be9565b9485858a01528382169182600014610f4d575050600114610ef7575b8989897f09e9976d8c3e4d232147efa3e62e4af75ea58a39b0cdbc3f351d96fec3ed07d58a8a038ba380f35b895281892093945088935b838510610f3a5750505050820101817f09e9976d8c3e4d232147efa3e62e4af75ea58a39b0cdbc3f351d96fec3ed07d5388080610ecb565b8054878601870152938201938101610f02565b168689015250505050151560051b8301019050817f09e9976d8c3e4d232147efa3e62e4af75ea58a39b0cdbc3f351d96fec3ed07d5388080610ecb565b67ffffffffffffffff8299939911610fa757508252953880610e87565b634e487b7160e01b835260419052602482fd5b84513d8b823e3d90fd5b8780fd5b5162461bcd60e51b815291820152601a60248201527f4e6f2070656e64696e67206d6574616461746120757064617465000000000000604482015260649150fd5b5162461bcd60e51b815291820152602c60248201527f4f6e6c79206469737472696275746f722063616e20636f6e6669726d206d657460448201526b61646174612075706461746560a01b606482015260849150fd5b90503461038b57606036600319011261038b5761107a611bd3565b6024359267ffffffffffffffff92916044358481116112f6576110a09036908501611d66565b6001600160a01b03918216949093903386900361128d578588526020926009845284892054161561124b57858852600b8352838820878952835283882091855191821161123857506110f28254611be9565b601f811161120a575b5082601f82116001146111835791817fd26914b6d2def51545fa04eb6a7cd05b40a011e9a157f85fdd068cc33a679f9496949261117296948b91611178575b508160011b916000199060031b1c19161790555b858852600c81528188208789529052808720805460ff191690555191829182611d1d565b0390a380f35b90508501513861113a565b82895283892090601f1983168a5b8181106111f3575092611172969492600192827fd26914b6d2def51545fa04eb6a7cd05b40a011e9a157f85fdd068cc33a679f949a9896106111da575b5050811b01905561114e565b87015160001960f88460031b161c1916905538806111ce565b91928660018192868c015181550194019201611191565b61123290838a52848a20601f840160051c8101918685106106e857601f0160051c0190611edc565b386110fb565b634e487b7160e01b895260419052602488fd5b50915162461bcd60e51b815291820152601960248201527f5772617070656420736f6e67206e6f742072656c6561736564000000000000006044820152606490fd5b835162461bcd60e51b8152602081840152603860248201527f4f6e6c792057726170706564536f6e67536d6172744163636f756e742063616e60448201527f2072657175657374206d657461646174612075706461746500000000000000006064820152608490fd5b8680fd5b8334610c275780600319360112610c2757611313611e00565b80546001600160a01b03198116825581906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b828434610c275780600319360112610c27575060ff6020925460a01c1690519015158152f35b83833461027c5761138a36611dbd565b9390611394611e00565b6001600160a01b031683526008602090815291832084519092909167ffffffffffffffff83116106f257506113c98354611be9565b601f8111611449575b5080601f8311600114611401575083948293949261064c5750508160011b916000199060031b1c191617905580f35b90601f198316958486528286209286905b8882106114315750508360019596971061068857505050811b01905580f35b80600185968294968601518155019501930190611412565b61147190848652828620601f850160051c8101918486106106e857601f0160051c0190611edc565b856113d2565b50503461027c57602036600319011261027c576102789161026d9082906001600160a01b036114a4611bd3565b168152600760205220611c77565b90503461038b5760209081600319360112610387576001600160a01b03806114d8611bd3565b1693848652600a8452818187205416330361161157602484836003541683519283809263d42fe23160e01b825233898301525afa90811561160757906115249188916115f05750611e44565b848652600a8452808620926001600160601b0360a01b93848154169055600f5462015180908181029181830414901517156115dd574201908142116115ca57509060029181519161157483611c23565b428352868301918252600e81840197338952898b5252882091518255516001820155019251169082541617905533907f0410af91d3fc953f1f383fde268b1cf5278d116a88123c657df6685f443359418380a380f35b634e487b7160e01b885260119052602487fd5b634e487b7160e01b885260118252602488fd5b6103709150863d8811610376576103688183611c55565b82513d89823e3d90fd5b6084939150519162461bcd60e51b8352820152602e60248201527f4f6e6c792070656e64696e67206469737472696275746f722063616e2061636360448201526d65707420666f722072657669657760901b6064820152fd5b83833461027c5761167a36611dbd565b9390611684611e00565b6001600160a01b031683526005602090815291832084519092909167ffffffffffffffff83116106f257506116b98354611be9565b601f8111611739575b5080601f83116001146116f1575083948293949261064c5750508160011b916000199060031b1c191617905580f35b90601f198316958486528286209286905b8882106117215750508360019596971061068857505050811b01905580f35b80600185968294968601518155019501930190611702565b61176190848652828620601f850160051c8101918486106106e857601f0160051c0190611edc565b856116c2565b50503461027c578160031936011261027c576020906001549051908152f35b50503461027c578060031936011261027c5760209160ff9082906001600160a01b036117b0611bd3565b168152600c85528181206024358252855220541690519015158152f35b50503461027c57602036600319011261027c576020916001600160a01b03908290826117f7611bd3565b168152600985522054169051908152f35b50503461027c57602036600319011261027c576020916001600160a01b0390829082611832611bd3565b1681526009855220541615159051908152f35b83903461027c57602036600319011261027c57611860611e00565b3560015580f35b90503461038b57602080600319360112610387576001600160a01b03918261188d611bd3565b16908451638da5cb5b60e01b815283818381865afa8015611a2457859188916119ea575b5016330361198c57818652600a8352838587205416156119495782906024856003541695848952600a84528789205416918751968793849263d42fe23160e01b84528301525afa92831561193f57600a936119129187916119285750611e44565b845252812080546001600160a01b031916905580f35b6103709150843d8611610376576103688183611c55565b84513d87823e3d90fd5b845162461bcd60e51b8152908101839052601a60248201527f4e6f2070656e64696e672072656c6561736520726571756573740000000000006044820152606490fd5b845162461bcd60e51b8152908101839052603260248201527f4f6e6c79207772617070656420736f6e67206f776e65722063616e2072656d6f6044820152711d99481c995b19585cd9481c995c5d595cdd60721b6064820152608490fd5b809250858092503d8311611a1d575b611a038183611c55565b810103126112f6575184811681036112f6578490386118b1565b503d6119f9565b86513d89823e3d90fd5b50503461027c578160031936011261027c576020906002549051908152f35b50503461027c57602036600319011261027c576102789161026d9082906001600160a01b03611a7a611bd3565b168152600560205220611c77565b83903461027c57602036600319011261027c57611aa3611e00565b35600f5580f35b50503461027c57602036600319011261027c576102789161026d9082906001600160a01b03611ad7611bd3565b168152600660205220611c77565b50503461027c578160031936011261027c57602090600f549051908152f35b90503461038b57602036600319011261038b578035801515809103610387577f0e2fb031ee032dc02d8011dc50b816eb450cf856abd8261680dac74f72165bd292602092611b50611e00565b805460ff60a01b191660a084901b60ff60a01b1617905551908152a180f35b50503461027c578160031936011261027c5760035490516001600160a01b039091168152602090f35b8490843461038b57602036600319011261038b5760209260ff91906001600160a01b03611bc3611bd3565b168152600d855220541615158152f35b600435906001600160a01b03821682036108e457565b90600182811c92168015611c19575b6020831014611c0357565b634e487b7160e01b600052602260045260246000fd5b91607f1691611bf8565b6060810190811067ffffffffffffffff821117611c3f57604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff821117611c3f57604052565b9060405191826000825492611c8b84611be9565b908184526001948581169081600014611cfa5750600114611cb7575b5050611cb592500383611c55565b565b9093915060005260209081600020936000915b818310611ce2575050611cb593508201013880611ca7565b85548884018501529485019487945091830191611cca565b915050611cb594506020925060ff191682840152151560051b8201013880611ca7565b6020808252825181830181905290939260005b828110611d5257505060409293506000838284010152601f8019910116010190565b818101860151848201604001528501611d30565b81601f820112156108e45780359067ffffffffffffffff8211611c3f5760405192611d9b601f8401601f191660200185611c55565b828452602083830101116108e457816000926020809301838601378301015290565b9060406003198301126108e4576004356001600160a01b03811681036108e457916024359067ffffffffffffffff82116108e457611dfd91600401611d66565b90565b6000546001600160a01b03163303611e1457565b60405163118cdaa760e01b8152336004820152602490fd5b908160209103126108e4575180151581036108e45790565b15611e4b57565b60405162461bcd60e51b815260206004820152601a60248201527f4469737472696275746f7220646f6573206e6f742065786973740000000000006044820152606490fd5b15611e9757565b60405162461bcd60e51b815260206004820152601b60248201527f4e6f74207468652070656e64696e67206469737472696275746f7200000000006044820152606490fd5b818110611ee7575050565b60008155600101611edc565b611efd8154611be9565b9081611f07575050565b81601f60009311600114611f19575055565b908083918252611f38601f60208420940160051c840160018501611edc565b555556fea2646970667358221220e87efee7bcf52a2c7d6bde31ed5dc155662e4739af74093c0bc88f640ee022e064736f6c63430008140033";

type ProtocolModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProtocolModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ProtocolModule__factory extends ContractFactory {
  constructor(...args: ProtocolModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _distributorWalletFactory: AddressLike,
    _whitelistingManager: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _distributorWalletFactory,
      _whitelistingManager,
      overrides || {}
    );
  }
  override deploy(
    _distributorWalletFactory: AddressLike,
    _whitelistingManager: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _distributorWalletFactory,
      _whitelistingManager,
      overrides || {}
    ) as Promise<
      ProtocolModule & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ProtocolModule__factory {
    return super.connect(runner) as ProtocolModule__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProtocolModuleInterface {
    return new Interface(_abi) as ProtocolModuleInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ProtocolModule {
    return new Contract(address, _abi, runner) as unknown as ProtocolModule;
  }
}
