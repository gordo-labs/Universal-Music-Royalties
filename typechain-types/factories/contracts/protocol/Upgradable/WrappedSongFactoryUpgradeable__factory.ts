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
  WrappedSongFactoryUpgradeable,
  WrappedSongFactoryUpgradeableInterface,
} from "../../../../contracts/protocol/Upgradable/WrappedSongFactoryUpgradeable";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_protocolModule",
        type: "address",
      },
      {
        internalType: "address",
        name: "_wrappedSongSmartAccountImplementation",
        type: "address",
      },
      {
        internalType: "address",
        name: "_wsTokensBaseImplementation",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "wrappedSongSmartAccount",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "wsTokensBase",
        type: "address",
      },
    ],
    name: "WrappedSongCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_stablecoin",
        type: "address",
      },
    ],
    name: "createWrappedSong",
    outputs: [],
    stateMutability: "payable",
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
        internalType: "string",
        name: "songURI",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "sharesAmount",
        type: "uint256",
      },
    ],
    name: "createWrappedSongWithMetadata",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "getOwnerWrappedSongs",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
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
    name: "ownerWrappedSongs",
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
    name: "wrappedSongSmartAccountImplementation",
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
    name: "wsTokensBaseImplementation",
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
  "0x60c0346100b557601f610a7438819003918201601f19168301916001600160401b038311848410176100ba578084926060946040528339810103126100b557610047816100d0565b906100606040610059602084016100d0565b92016100d0565b600080546001600160a01b0319166001600160a01b039094169390931790925560805260a05260405161098f90816100e5823960805181818161036d0152610587015260a0518181816101de01526104ea0152f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b03821682036100b55756fe60806040818152600436101561001457600080fd5b600091823560e01c908163283817c4146103595750806337d7d542146102ac5780634da6840a146102545780635c42e6671461022d5780636936e7141461020d578063bed426e2146101ca5763e24a361c1461006f57600080fd5b60603660031901126101af5761008361039c565b60249081359067ffffffffffffffff908183116101c657366023840112156101c65782600401359182116101b357858551936100c96020601f19601f87011601866103e5565b838552368685830101116101af57836100ee9487602093018388013785010152610482565b3384526001602052828420805460001981019190821161019c57849261011861013e9388936103b7565b929054928551809781968295630c2dad7d60e41b8452896004850152604484019061041d565b9060443590830152039360018060a01b039160031b1c165af1801561019057610165578280f35b813d8311610189575b61017881836103e5565b810103126101865738808280f35b80fd5b503d61016e565b505051903d90823e3d90fd5b634e487b7160e01b865260116004528386fd5b5080fd5b634e487b7160e01b865260416004528386fd5b8580fd5b50346101af57816003193601126101af57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b8260203660031901126101865761022a61022561039c565b610482565b80f35b50346101af57816003193601126101af57905490516001600160a01b039091168152602090f35b50346101af57806003193601126101af5761026d61039c565b6001600160a01b039081168352600160205281832080546024359490851015610186575060209361029d916103b7565b92905490519260031b1c168152f35b50346101af5760209182600319360112610186576001600160a01b0390816102d261039c565b16815260019182855283822094845191828288549182815201908198865283862090865b818110610344575050508361030c9103846103e5565b855195828701938388525180945286019693905b83821061032d5786880387f35b845181168852968201969382019390850190610320565b825485168452928501929188019188016102f6565b8390346101af57816003193601126101af577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b600435906001600160a01b03821682036103b257565b600080fd5b80548210156103cf5760005260206000200190600090565b634e487b7160e01b600052603260045260246000fd5b90601f8019910116810190811067ffffffffffffffff82111761040757604052565b634e487b7160e01b600052604160045260246000fd5b919082519283825260005b848110610449575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201610428565b6001600160a01b03909116815260406020820181905261047f9291019061041d565b90565b604080519163485cc95560e01b6020840152602490308285015233604485015260448452608084019167ffffffffffffffff9480841086851117610671578385526102d3956080878301018581108282111761065c57610687928884883961050f81607f19937f00000000000000000000000000000000000000000000000000000000000000009061045d565b030160009586f09384156106525760018060a01b03809516978587541686895193637c643b2f60e11b6020860152168684015233604484015260648301528860848301526084825260c08201938285108486111761063f5784895282820160c0019384118585101761063f5784396105ac8160bf19937f00000000000000000000000000000000000000000000000000000000000000009061045d565b03019084f080156106355782169333845260016020528320805491680100000000000000008310156106235750906105e9916001820181556103b7565b819291549060031b9185831b921b19161790557f9a28fb0f08e733f28199f445085bfd004ca4c379c68ed25fd7727670f677daf7339180a4565b634e487b7160e01b8552604160045284fd5b84513d85823e3d90fd5b634e487b7160e01b885260416004528588fd5b86513d87823e3d90fd5b83634e487b7160e01b60005260416004526000fd5b50634e487b7160e01b60009081526041600452fdfe60806040526102d38038038061001481610194565b92833981019060408183031261018f5780516001600160a01b03811680820361018f5760208381015190936001600160401b03821161018f570184601f8201121561018f5780519061006d610068836101cf565b610194565b9582875285838301011161018f57849060005b83811061017b57505060009186010152813b15610163577f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b03191682179055604051907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b600080a28351156101455750600080848461012c96519101845af4903d1561013c573d61011c610068826101cf565b908152600081943d92013e6101ea565b505b6040516085908161024e8239f35b606092506101ea565b9250505034610154575061012e565b63b398979f60e01b8152600490fd5b60249060405190634c9c8ce360e01b82526004820152fd5b818101830151888201840152869201610080565b600080fd5b6040519190601f01601f191682016001600160401b038111838210176101b957604052565b634e487b7160e01b600052604160045260246000fd5b6001600160401b0381116101b957601f01601f191660200190565b9061021157508051156101ff57805190602001fd5b604051630a12f52160e11b8152600490fd5b81511580610244575b610222575090565b604051639996b31560e01b81526001600160a01b039091166004820152602490fd5b50803b1561021a56fe60806040527f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc54600090819081906001600160a01b0316368280378136915af43d82803e15604b573d90f35b3d90fdfea2646970667358221220299b88c2d92f8286434ed96d8c4acf69c0d7098bde2bd65c7d271db58dff28af64736f6c63430008140033a2646970667358221220e73d57ac927fc05ab368f46a4cc87241ff4e1f05d41b57d17c27a361e201ebd964736f6c63430008140033";

type WrappedSongFactoryUpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WrappedSongFactoryUpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WrappedSongFactoryUpgradeable__factory extends ContractFactory {
  constructor(...args: WrappedSongFactoryUpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _protocolModule: AddressLike,
    _wrappedSongSmartAccountImplementation: AddressLike,
    _wsTokensBaseImplementation: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _protocolModule,
      _wrappedSongSmartAccountImplementation,
      _wsTokensBaseImplementation,
      overrides || {}
    );
  }
  override deploy(
    _protocolModule: AddressLike,
    _wrappedSongSmartAccountImplementation: AddressLike,
    _wsTokensBaseImplementation: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _protocolModule,
      _wrappedSongSmartAccountImplementation,
      _wsTokensBaseImplementation,
      overrides || {}
    ) as Promise<
      WrappedSongFactoryUpgradeable & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): WrappedSongFactoryUpgradeable__factory {
    return super.connect(runner) as WrappedSongFactoryUpgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WrappedSongFactoryUpgradeableInterface {
    return new Interface(_abi) as WrappedSongFactoryUpgradeableInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): WrappedSongFactoryUpgradeable {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as WrappedSongFactoryUpgradeable;
  }
}
