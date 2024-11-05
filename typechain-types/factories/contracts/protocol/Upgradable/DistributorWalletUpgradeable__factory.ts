/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  DistributorWalletUpgradeable,
  DistributorWalletUpgradeableInterface,
} from "../../../../contracts/protocol/Upgradable/DistributorWalletUpgradeable";

const _abi = [
  {
    inputs: [],
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
        name: "implementation",
        type: "address",
      },
    ],
    name: "ERC1967InvalidImplementation",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC1967NonPayable",
    type: "error",
  },
  {
    inputs: [],
    name: "FailedInnerCall",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
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
    name: "UUPSUnauthorizedCallContext",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "slot",
        type: "bytes32",
      },
    ],
    name: "UUPSUnsupportedProxiableUUID",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
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
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
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
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "WrappedSongRedeemed",
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
    ],
    name: "WrappedSongReleased",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "UPGRADE_INTERFACE_VERSION",
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
    name: "confirmWrappedSongRelease",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "currentBatchIndex",
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
        name: "_wrappedSong",
        type: "address",
      },
    ],
    name: "distributeEarnings",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_stablecoin",
        type: "address",
      },
      {
        internalType: "address",
        name: "_protocolModule",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "managedWrappedSongs",
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
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_wrappedSong",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "receivePayment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_wrappedSong",
        type: "address",
      },
    ],
    name: "redeem",
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
        name: "_wrappedSong",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "setAccounting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_wrappedSongs",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "_totalAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_batchSize",
        type: "uint256",
      },
    ],
    name: "setAccountingBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stablecoin",
    outputs: [
      {
        internalType: "contract IERC20",
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
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
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
    name: "wrappedSongTreasury",
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
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60a080604052346100cc57306080527ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a009081549060ff8260401c166100bd57506001600160401b036002600160401b031982821601610078575b60405161120290816100d282396080518181816109310152610ac50152f35b6001600160401b031990911681179091556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d290602090a1388080610059565b63f92ee8a960e01b8152600490fd5b600080fdfe6040608081526004908136101561001d575b5050361561001b57005b005b600091823560e01c9081631188029f14610e625781633a3f80ca14610e2a578163485cc95514610cb45781634f1ef28614610a49578382635259b9ab146109955750816352d1902d1461091c5781635c42e667146108f35781636090b30e146108d55781636b28567b1461080b578163715018a6146107a05781638da5cb5b1461076a57816395a2251f146105a8578163ad3cb1cc1461050a578163b0c70e2714610348578163b7ec76c21461018357508063e9cbd8221461015c578063f2fde38b1461012c5763fdd7bf74036100115734610128578060031936011261012857610106610ef0565b61010e610fa4565b6001600160a01b0316825260026020528120602435905580f35b5080fd5b823461015957602036600319011261015957610156610149610ef0565b610151610fa4565b610fdd565b80f35b80fd5b5034610128578160031936011261012857905490516001600160a01b039091168152602090f35b839150346101285760803660031901126101285767ffffffffffffffff8135818111610344576101b69036908401610f73565b91602435908111610340576101ce9036908501610f73565b916101d7610fa4565b8284036102fd5785865b8581106102d85750604435036102775785968554936102026064358661114b565b9486861161026f575b858110610226575050505050808355146102225750f35b5580f35b61023181838761117d565b359061023e81898761117d565b356001600160a01b038116929083900361026b57610266928b526002602052848b205561116e565b61020b565b8a80fd5b86955061020b565b865162461bcd60e51b8152602081870152603560248201527f546f74616c20616d6f756e7420646f6573206e6f74206d617463682073756d206044820152746f6620696e646976696475616c20616d6f756e747360581b6064820152608490fd5b906102f26102f8916102eb84888861117d565b359061114b565b9161116e565b6101e1565b865162461bcd60e51b8152602081870152601860248201527f4d69736d61746368656420696e707574206c656e6774687300000000000000006044820152606490fd5b8480fd5b8380fd5b9190503461047257602036600319011261047257610364610ef0565b60015482516363df2f1560e11b81526001600160a01b039283168186018190529492939184169190602081602481865afa9081156105005787916104d2575b50843091160361047657908591813b1561047257828092602483518095819363b0c70e2760e01b83528b8a8401525af19081156104695750610455575b5050600354906801000000000000000082101561044257508060016104089201600355610ea3565b819291549060031b9184831b921b19161790557fe1649799fd93d14e82ccab2710a96c6b05af2496c30f0c9401e159f568813efd8280a280f35b634e487b7160e01b855260419052602484fd5b61045e90610f0b565b6103445783386103e0565b513d84823e3d90fd5b8280fd5b5162461bcd60e51b8152602081840152603160248201527f4e6f74207468652070656e64696e67206469737472696275746f7220666f722060448201527074686973207772617070656420736f6e6760781b6064820152608490fd5b6104f3915060203d81116104f9575b6104eb8183610f35565b81019061118d565b386103a3565b503d6104e1565b82513d89823e3d90fd5b9050346104725782600319360112610472578151908282019082821067ffffffffffffffff8311176105935750825260058152602090640352e302e360dc1b8282015282519382859384528251928382860152825b84811061057d57505050828201840152601f01601f19168101030190f35b818101830151888201880152879550820161055f565b604190634e487b7160e01b6000525260246000fd5b90503461047257602080600319360112610344576001600160a01b03806105cd610ef0565b16928451638da5cb5b60e01b815283818381885afa80156107605783918891610743575b501633036106f55783865260028352848620549182156106ba57869160448592878552600284528489812055845416918851948593849263a9059cbb60e01b845233908401528760248401525af19081156106b0577fb6256fb088328fbaea547db02cfd4d9293bd06faa6226a32cbe19ae58efde89494959161067b918891610683575b5061110d565b51908152a280f35b6106a39150853d87116106a9575b61069b8183610f35565b8101906110f5565b38610675565b503d610691565b85513d88823e3d90fd5b855162461bcd60e51b815280830185905260156024820152744e6f206561726e696e677320746f2072656465656d60581b6044820152606490fd5b845162461bcd60e51b8152908101839052602260248201527f4f6e6c79207772617070656420736f6e67206f776e65722063616e2072656465604482015261656d60f01b6064820152608490fd5b61075a9150853d87116104f9576104eb8183610f35565b386105f1565b86513d89823e3d90fd5b5050346101285781600319360112610128576000805160206111ad8339815191525490516001600160a01b039091168152602090f35b83346101595780600319360112610159576107b9610fa4565b6000805160206111ad83398151915280546001600160a01b031981169091556000906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b83833461012857602036600319011261012857610826610ef0565b61082e610fa4565b6001600160a01b03168083526002602052818320549093901561089357838394845260026020528383812055803b1561088e578391835180958193630ffcd97360e21b83525af19081156104695750610885575080f35b61015690610f0b565b505050fd5b6020606492519162461bcd60e51b8352820152601960248201527f4e6f206561726e696e677320746f2064697374726962757465000000000000006044820152fd5b90503461047257826003193601126104725760209250549051908152f35b50503461012857816003193601126101285760015490516001600160a01b039091168152602090f35b828434610159578060031936011261015957507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316300361098857602090517f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8152f35b5163703e46dd60e11b8152fd5b80918434610a455780600319360112610a45576109b0610ef0565b9160243592602060018060a01b039260648488541691865198899384926323b872dd60e01b845233908401523060248401528960448401525af1948515610a3b57610a189495610a06918891610a1d575061110d565b1684526002602052832091825461114b565b905580f35b610a35915060203d81116106a95761069b8183610f35565b88610675565b83513d88823e3d90fd5b5050fd5b9180915060031936011261047257610a5f610ef0565b90602493843567ffffffffffffffff811161012857366023820112156101285780850135610a8c81610f57565b94610a9985519687610f35565b81865260209182870193368a8383010111610cb0578186928b8693018737880101526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116308114908115610c82575b50610c7257610afe610fa4565b81169585516352d1902d60e01b815283818a818b5afa869181610c3f575b50610b38575050505050505191634c9c8ce360e01b8352820152fd5b9088888894938c7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc91828103610c2a5750853b15610c16575080546001600160a01b031916821790558451889392917fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b8580a2825115610bf8575050610bea9582915190845af4913d15610bee573d610bdc610bd382610f57565b92519283610f35565b81528581943d92013e611051565b5080f35b5060609250611051565b955095505050505034610c0a57505080f35b63b398979f60e01b8152fd5b8651634c9c8ce360e01b8152808501849052fd5b8751632a87526960e21b815280860191909152fd5b9091508481813d8311610c6b575b610c578183610f35565b81010312610c6757519038610b1c565b8680fd5b503d610c4d565b855163703e46dd60e11b81528890fd5b9050817f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5416141538610af1565b8580fd5b905034610472578160031936011261047257610cce610ef0565b6001600160a01b0391906024358381169190829003610cb0577ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0093845460ff81881c16159467ffffffffffffffff821680159081610e22575b6001149081610e18575b159081610e0f575b50610e01575067ffffffffffffffff198116600117865584610de2575b50610d5f6110b4565b610d676110b4565b610d7033610fdd565b610d786110b4565b6bffffffffffffffffffffffff60a01b9116818754161786556001541617600155610da1578280f35b805468ff00000000000000001916905551600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d290602090a138808280f35b68ffffffffffffffffff19166801000000000000000117855538610d56565b875163f92ee8a960e01b8152fd5b90501538610d39565b303b159150610d31565b879150610d27565b5050346101285760203660031901126101285760209181906001600160a01b03610e52610ef0565b1681526002845220549051908152f35b9050346104725760203660031901126104725735916003548310156101595750610e8d602092610ea3565b60018060a01b0391549060031b1c169051908152f35b600354811015610eda5760036000527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b0190600090565b634e487b7160e01b600052603260045260246000fd5b600435906001600160a01b0382168203610f0657565b600080fd5b67ffffffffffffffff8111610f1f57604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff821117610f1f57604052565b67ffffffffffffffff8111610f1f57601f01601f191660200190565b9181601f84011215610f065782359167ffffffffffffffff8311610f06576020808501948460051b010111610f0657565b6000805160206111ad833981519152546001600160a01b03163303610fc557565b60405163118cdaa760e01b8152336004820152602490fd5b6001600160a01b03908116908115611038576000805160206111ad83398151915280546001600160a01b031981168417909155167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a3565b604051631e4fbdf760e01b815260006004820152602490fd5b90611078575080511561106657805190602001fd5b604051630a12f52160e11b8152600490fd5b815115806110ab575b611089575090565b604051639996b31560e01b81526001600160a01b039091166004820152602490fd5b50803b15611081565b60ff7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a005460401c16156110e357565b604051631afcd79f60e31b8152600490fd5b90816020910312610f0657518015158103610f065790565b1561111457565b60405162461bcd60e51b815260206004820152600f60248201526e151c985b9cd9995c8819985a5b1959608a1b6044820152606490fd5b9190820180921161115857565b634e487b7160e01b600052601160045260246000fd5b60001981146111585760010190565b9190811015610eda5760051b0190565b90816020910312610f0657516001600160a01b0381168103610f06579056fe9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300a2646970667358221220a4f19dee67cd69cb1630ca97947d496ecc9675cd673e992dca08480c9d4a30ec64736f6c63430008140033";

type DistributorWalletUpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DistributorWalletUpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DistributorWalletUpgradeable__factory extends ContractFactory {
  constructor(...args: DistributorWalletUpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      DistributorWalletUpgradeable & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): DistributorWalletUpgradeable__factory {
    return super.connect(runner) as DistributorWalletUpgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DistributorWalletUpgradeableInterface {
    return new Interface(_abi) as DistributorWalletUpgradeableInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): DistributorWalletUpgradeable {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as DistributorWalletUpgradeable;
  }
}
