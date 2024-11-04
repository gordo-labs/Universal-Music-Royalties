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
  MarketPlace,
  MarketPlaceInterface,
} from "../../../../contracts/protocol/NonUpgradable/MarketPlace";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_protocolModule",
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
        name: "target",
        type: "address",
      },
    ],
    name: "AddressEmptyCode",
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
    name: "AddressInsufficientBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "EnforcedPause",
    type: "error",
  },
  {
    inputs: [],
    name: "ExpectedPause",
    type: "error",
  },
  {
    inputs: [],
    name: "FailedInnerCall",
    type: "error",
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
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "SafeERC20FailedOperation",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20Received",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "EmergencyWithdrawal",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FundsWithdrawn",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "SharesSaleEnded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maxSharesPerWallet",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "stableCoinAddress",
        type: "address",
      },
    ],
    name: "SharesSaleStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "SharesSold",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_SALE_DURATION",
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "accumulatedFunds",
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
        name: "wsTokenManagement",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "saleId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "buyShares",
    outputs: [],
    stateMutability: "payable",
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
    name: "currentSaleId",
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
        name: "wsTokenManagement",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "saleId",
        type: "uint256",
      },
    ],
    name: "endSharesSale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wsTokenManagement",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "saleId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "buyer",
        type: "address",
      },
    ],
    name: "getBuyerPurchases",
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
        name: "wsTokenManagement",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "saleId",
        type: "uint256",
      },
    ],
    name: "getSale",
    outputs: [
      {
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "sharesForSale",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pricePerShare",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxSharesPerWallet",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "stableCoin",
        type: "address",
      },
      {
        internalType: "bool",
        name: "active",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "totalSold",
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
        name: "wsTokenManagement",
        type: "address",
      },
      {
        internalType: "address",
        name: "seller",
        type: "address",
      },
    ],
    name: "isApprovedForShares",
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
        name: "wsTokenManagement",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "saleId",
        type: "uint256",
      },
    ],
    name: "isSaleExpired",
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
    name: "isVerifiedWSToken",
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
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "protocolModule",
    outputs: [
      {
        internalType: "contract IProtocolModule",
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
        name: "wsTokenManagement",
        type: "address",
      },
    ],
    name: "removeWSTokenVerification",
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
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "saleStartTimes",
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "sales",
    outputs: [
      {
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "sharesForSale",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pricePerShare",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxSharesPerWallet",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "stableCoin",
        type: "address",
      },
      {
        internalType: "bool",
        name: "active",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "totalSold",
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
        name: "wsTokenManagement",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxShares",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_stableCoin",
        type: "address",
      },
    ],
    name: "startSharesSale",
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
    name: "totalSales",
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
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wrappedSongAddress",
        type: "address",
      },
    ],
    name: "verifyWSToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wsTokenManagement",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "withdrawFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60a0346100e457601f611ac138819003918201601f19168301916001600160401b038311848410176100e9578084926020946040528339810103126100e457516001600160a01b0390818116908190036100e45733156100cb576000543360018060a01b0319821617600055604051923391167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a36001805560ff19600254166002556080526119c1908161010082396080518181816106140152818161083c0152610aa00152f35b604051631e4fbdf760e01b815260006004820152602490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604052600436101561001b575b361561001957600080fd5b005b6000803560e01c80620fa9fb14611475578063046deb3b1461143457806317f6922214610ede5780631e3f51ee14610e9f578063225c313114610da95780632e4c7e8814610e665780633a1c83ac14610da95780633f4ba83a14610d3e5780634cca99641461086b5780635c42e667146108265780635c975abb14610803578063715018a6146107a95780637b42efe81461075a57806383c2f3e0146105af5780638456cb59146105545780638c34f026146104ea5780638da5cb5b146104c35780638ef8f41014610480578063ba074d1c146103c7578063e476809e14610281578063f2fde38b146101f1578063f8753691146101b8578063fc6e33ee1461019a5763fe2618161461012e575061000e565b346101975760603660031901126101975761014761166e565b6044356001600160a01b038181169390929184900361019257600792604092168152600360205281812060243582526020522001906000526020526020604060002054604051908152f35b600080fd5b80fd5b5034610197578060031936011261019757602060405162278d008152f35b5034610197576020366003190112610197576020906040906001600160a01b036101e061166e565b168152600483522054604051908152f35b50346101975760203660031901126101975761020b61166e565b61021361169a565b6001600160a01b0390811690811561026857600054826bffffffffffffffffffffffff60a01b821617600055167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a380f35b604051631e4fbdf760e01b815260048101849052602490fd5b5034610197576040366003190112610197576001600160a01b03806102a461166e565b169060405191638da5cb5b60e01b83526020928381600481855afa80156103bc576102da91869161038f575b5083163314611735565b808452600783526102f160ff60408620541661177a565b83526003825260408320602435845282526040832091600583019283549261031e60ff8560a01c16611809565b3391541603610358575060ff60a01b191690557fb537f0e8f5e2afa2fa893578bb79e6dbd032b24bb9a222e3373fb5179b4a55418180a180f35b6064906040519062461bcd60e51b82526004820152601060248201526f2737ba1039b0b6329031b932b0ba37b960811b6044820152fd5b6103af9150853d87116103b5575b6103a781836116c6565b8101906116fe565b386102d0565b503d61039d565b6040513d87823e3d90fd5b50346101975760403660031901126101975761042060206103e661166e565b6103ee611684565b60405163e985e9c560e01b81526001600160a01b03909116600482015230602482015292839190829081906044820190565b03916001600160a01b03165afa9081156104755760209291610448575b506040519015158152f35b6104689150823d811161046e575b61046081836116c6565b81019061171d565b3861043d565b503d610456565b6040513d84823e3d90fd5b5034610197576040366003190112610197576020906040906001600160a01b036104a861166e565b16815260098352818120602435825283522054604051908152f35b5034610197578060031936011261019757546040516001600160a01b039091168152602090f35b5034610197576040366003190112610197576001600160a01b0361050c61166e565b168152600960205260408120602435825260205260408120549062278d008201809211610540576020826040519042118152f35b634e487b7160e01b81526011600452602490fd5b503461019757806003193601126101975761056d61169a565b6105756117eb565b600160ff1960025416176002557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586020604051338152a180f35b503461019757602080600319360112610756576001600160a01b03806105d361166e565b604051636fad7e9560e11b815291168382600481845afa9182156103bc578592610737575b506040516306f8718960e31b81526004810182905284816024817f000000000000000000000000000000000000000000000000000000000000000088165afa91821561072c578591879361070d575b5082156106be575b50501561066f571682526007905260408120805460ff1916600117905580f35b60405162461bcd60e51b815260048101849052602160248201527f4e6f7420612076616c69642070726f746f636f6c207772617070656420736f6e6044820152606760f81b6064820152608490fd5b604051638da5cb5b60e01b81529250829060049082905afa80156103bc57839186916106f0575b50161515833861064f565b6107079150853d87116103b5576103a781836116c6565b386106e5565b610725919350823d841161046e5761046081836116c6565b9138610647565b6040513d88823e3d90fd5b61074f919250843d86116103b5576103a781836116c6565b90386105f8565b5080fd5b50346101975760403660031901126101975761077461166e565b604061077e611684565b9260018060a01b03809316815260066020522091166000526020526020604060002054604051908152f35b50346101975780600319360112610197576107c261169a565b600080546001600160a01b0319811682556001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b5034610197578060031936011261019757602060ff600254166040519015158152f35b50346101975780600319360112610197576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b50346101975760c03660031901126101975761088561166e565b602490813591604480356064928335926084359460a4359160018060a01b0393848416988985036101925785906108ba6117eb565b169360405195638da5cb5b60e01b87528c60209788816004818b5afa801561047557826108fa60409260ff946109099691610d21575b5086163314611735565b89815260078b5220541661177a565b87151580610d18575b15610cd657604051627eeac760e11b8152336004820152602481018d90528d9088816044818b5afa908115610475578a9291610ca5575b5010610c6d5760405163e985e9c560e01b81523360048201523060248201528d9088816044818b5afa918215610c615791610c44575b5015610bee578a610a85575b50505050508088526004825260408820546009835260408920818a5283524260408a20558189526003835260408920908952825287600660408220336bffffffffffffffffffffffff60a01b82541617815589600182015585600282015586600382015587600482015560058101600160a01b8a6affffffffffffffffffffff60a81b8354161717905501558088526004825260408820610a2c81546117c6565b905587526005815260408720610a4281546117c6565b90556040519586528501526040840152606083015260808201527fbde80b1ab261fc4acd23a03496d2ec57844c2e996eeadc8987e7282e67a7a5e560a03392a280f35b868b846040518094819363b5af090f60e01b835260048301527f0000000000000000000000000000000000000000000000000000000000000000165afa908115610be3578d91610bc6575b5015610b85573b151580610b21575b15610aeb57808061098b565b849160137224b73b30b634b21022a9219918103a37b5b2b760691b926040519462461bcd60e51b86526004860152840152820152fd5b506040516318160ddd60e01b815285816004818d5afa908115610b7a578c91610b4d575b501515610adf565b90508581813d8311610b73575b610b6481836116c6565b81010312610192575138610b45565b503d610b5a565b6040513d8e823e3d90fd5b508491601d7f537461626c65636f696e206973206e6f742077686974656c6973746564000000926040519462461bcd60e51b86526004860152840152820152fd5b610bdd9150873d891161046e5761046081836116c6565b38610ad0565b6040513d8f823e3d90fd5b60405162461bcd60e51b815260048101889052602b818501527f4d61726b6574506c616365206e6f7420617070726f76656420746f207472616e818601526a736665722073686172657360a81b81870152608490fd5b610c5b9150883d8a1161046e5761046081836116c6565b3861097f565b604051903d90823e3d90fd5b60405162461bcd60e51b81526004810188905260138185015272496e73756666696369656e742073686172657360681b818601528590fd5b809250898092503d8311610ccf575b610cbe81836116c6565b810103126101925788905138610949565b503d610cb4565b60405162461bcd60e51b8152600481018890526017818501527f496e76616c69642073616c6520706172616d6574657273000000000000000000818601528590fd5b50881515610912565b610d3891508d803d106103b5576103a781836116c6565b386108f0565b5034610197578060031936011261019757610d5761169a565b60025460ff811615610d975760ff19166002557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6020604051338152a180f35b604051638dfc202b60e01b8152600490fd5b5034610197576040366003190112610197576001600160a01b039060409082610dd061166e565b168152600360205281812060243582526020522090610e62818354166001840154936002810154916003820154600483015490600660058501549401549460405198899860ff8760a01c16961694899490929360e096929998979461010087019a60018060a01b03809616885260208801526040870152606086015260808501521660a0830152151560c08201520152565b0390f35b5034610197576020366003190112610197576020906040906001600160a01b03610e8e61166e565b168152600583522054604051908152f35b50346101975760203660031901126101975760209060ff906040906001600160a01b03610eca61166e565b168152600784522054166040519015158152f35b50606036600319011261019757610ef361166e565b60243590610eff6117eb565b610f07611968565b6001600160a01b038116835260076020526040832054610f299060ff1661177a565b60018060a01b0381168352600360205260408320828452602052604083209160058301918254610f5e60ff8260a01c16611809565b604435156113ef5760028501928354604435116113aa5760018060a01b0383168752600960205260408720908752602052604086205462278d00810180911161122a57421161137657600385015460443580820204810361122a5733875260078601602052610fd36044356040892054611846565b9160048701548061131b575b506001600160a01b0316156112a557346112525760018060a01b03855416604051906323b872dd60e01b602083015233602483015230604483015282604435026064830152606482528160a081011067ffffffffffffffff60a08401111761123e5791611076827fa13cf347fb36122550e414f6fd1a0c2e490cff76331c4dcc20f760891ecca12a9460a060609501604052611853565b6001600160a01b038581168a52600660209081526040808c208a549093168c52919052892080546110ac90604435840290611846565b905560018060a01b0387541690604051918252604435026020820152336040820152a15b8254604435810390811161122a578355600685016110f16044358254611846565b905533865260078501602052604086205583546001909401805490948691906001600160a01b039081169084163b156112265760c490836040519586948593637921219560e11b855260048501523360248501526044840152604435606484015260a060848401528160a484015260018060a01b03165af180156103bc576111f5575b50916060917f938a3e7589d60f00d1e57b9257ead6b218cde7829429cbbdc4afb037ddce22239354156111c0575b50546040519081523360208201526044356040820152a16001805580f35b805460ff60a01b191690557fb537f0e8f5e2afa2fa893578bb79e6dbd032b24bb9a222e3373fb5179b4a55418480a1386111a2565b67ffffffffffffffff819592951161121257604052926060611174565b634e487b7160e01b82526041600452602482fd5b8280fd5b634e487b7160e01b87526011600452602487fd5b634e487b7160e01b89526041600452602489fd5b60405162461bcd60e51b815260206004820152602560248201527f455448206e6f7420616363657074656420666f7220737461626c6520636f696e6044820152642073616c6560d81b6064820152608490fd5b6044350234036112df5760018060a01b0382168652600660205260408620868052602052604086206112d8348254611846565b90556110d0565b60405162461bcd60e51b8152602060048201526014602482015273125b98dbdc9c9958dd0811551208185b5bdd5b9d60621b6044820152606490fd5b83116113275738610fdf565b60405162461bcd60e51b815260206004820152602160248201527f45786365656473206d6178696d756d20736861726573207065722077616c6c656044820152601d60fa1b6064820152608490fd5b60405162461bcd60e51b815260206004820152600c60248201526b14d85b1948195e1c1a5c995960a21b6044820152606490fd5b60405162461bcd60e51b815260206004820152601b60248201527f4e6f7420656e6f7567682073686172657320617661696c61626c6500000000006044820152606490fd5b60405162461bcd60e51b815260206004820152601d60248201527f416d6f756e74206d7573742062652067726561746572207468616e20300000006044820152606490fd5b50346101975760203660031901126101975761144e61166e565b61145661169a565b6001600160a01b03168152600760205260408120805460ff1916905580f35b50346101975760403660031901126101975761148f61166e565b611497611684565b906114a0611968565b604051638da5cb5b60e01b81526001600160a01b039182169260209290918381600481885afa801561072c576114e1918791611651575b5082163314611735565b838552600783526114f860ff60408720541661177a565b8385526006835260408520911690818552825260408420549283156116155784526006825260408420818552825283604081205580156000146115b957508280808085335af16115466118c5565b501561157f577feaff4b37086828766ad3268786972c0cd24259d4c87a80f9d3963a3c3d999b0d905b6040519283523392a26001805580f35b6064906040519062461bcd60e51b825260048201526013602482015272115512081d1c985b9cd9995c8819985a5b1959606a1b6044820152fd5b60405163a9059cbb60e01b83820152336024820152604480820185905281527feaff4b37086828766ad3268786972c0cd24259d4c87a80f9d3963a3c3d999b0d9291611610919061160b6064836116c6565b611853565b61156f565b60405162461bcd60e51b81526004810184905260146024820152734e6f2066756e647320746f20776974686472617760601b6044820152606490fd5b6116689150853d87116103b5576103a781836116c6565b386114d7565b600435906001600160a01b038216820361019257565b602435906001600160a01b038216820361019257565b6000546001600160a01b031633036116ae57565b60405163118cdaa760e01b8152336004820152602490fd5b90601f8019910116810190811067ffffffffffffffff8211176116e857604052565b634e487b7160e01b600052604160045260246000fd5b9081602091031261019257516001600160a01b03811681036101925790565b90816020910312610192575180151581036101925790565b1561173c57565b60405162461bcd60e51b81526020600482015260166024820152752737ba103bb930b83832b21039b7b7339037bbb732b960511b6044820152606490fd5b1561178157565b60405162461bcd60e51b815260206004820152601f60248201527f4e6f7420612076657269666965642070726f746f636f6c205753546f6b656e006044820152606490fd5b60001981146117d55760010190565b634e487b7160e01b600052601160045260246000fd5b60ff600254166117f757565b60405163d93c066560e01b8152600490fd5b1561181057565b60405162461bcd60e51b815260206004820152600e60248201526d4e6f206163746976652073616c6560901b6044820152606490fd5b919082018092116117d557565b60008061187c9260018060a01b03169360208151910182865af16118756118c5565b9083611905565b80519081151591826118aa575b50506118925750565b60249060405190635274afe760e01b82526004820152fd5b6118bd925060208091830101910161171d565b153880611889565b3d15611900573d9067ffffffffffffffff82116116e857604051916118f4601f8201601f1916602001846116c6565b82523d6000602084013e565b606090565b9061192c575080511561191a57805190602001fd5b604051630a12f52160e11b8152600490fd5b8151158061195f575b61193d575090565b604051639996b31560e01b81526001600160a01b039091166004820152602490fd5b50803b15611935565b600260015414611979576002600155565b604051633ee5aeb560e01b8152600490fdfea26469706673582212207b3e7a1549731c4d49f0e707d721639806942ddf05c7bcadad9f6c9ebd7cea4464736f6c63430008140033";

type MarketPlaceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MarketPlaceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MarketPlace__factory extends ContractFactory {
  constructor(...args: MarketPlaceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _protocolModule: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_protocolModule, overrides || {});
  }
  override deploy(
    _protocolModule: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_protocolModule, overrides || {}) as Promise<
      MarketPlace & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MarketPlace__factory {
    return super.connect(runner) as MarketPlace__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MarketPlaceInterface {
    return new Interface(_abi) as MarketPlaceInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): MarketPlace {
    return new Contract(address, _abi, runner) as unknown as MarketPlace;
  }
}
