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
  WSUtils,
  WSUtilsInterface,
} from "../../../../contracts/protocol/NonUpgradable/WSUtils";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_protocolModuleAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_owner",
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
    inputs: [
      {
        internalType: "address",
        name: "_wsTokensManagement",
        type: "address",
      },
    ],
    name: "getPricePerShare",
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
        name: "_wsTokensManagement",
        type: "address",
      },
    ],
    name: "getSharesForSale",
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
        name: "_wsTokensManagement",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getSongSharesBalance",
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
        name: "_wsTokensManagement",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getTokenBalance",
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
        name: "_wsTokensManagement",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getTokenMetadata",
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
        name: "_wsTokensManagement",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getTokenTotalSupply",
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
        name: "_wsTokensManagement",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getTokenURI",
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
        name: "_wsTokensManagement",
        type: "address",
      },
    ],
    name: "getTotalShares",
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
        name: "_wsTokensManagement",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getWrappedSongMetadata",
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
        name: "_wsTokensManagement",
        type: "address",
      },
    ],
    name: "isSaleActive",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a03461012557601f61098638819003918201601f19168301916001600160401b0383118484101761012a57808492604094855283398101031261012557602061004882610140565b916001600160a01b0391829161005e9101610140565b1691821561010c57600080546001600160a01b03198116851782556040519491908416907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a3169081156100ca575060805260405161083190816101558239608051816104d20152f35b62461bcd60e51b815260206004820152601f60248201527f496e76616c69642070726f746f636f6c206d6f64756c652061646472657373006044820152606490fd5b604051631e4fbdf760e01b815260006004820152602490fd5b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b03821682036101255756fe6080604081815260048036101561001557600080fd5b600092833560e01c90816301ffc9a7146105ea575080630b63fd62146102f45780631fb3ffe4146102f4578063454901da146105015780635c42e667146104bd578063715018a614610463578063830f8cea146103ca5780638da5cb5b146103a25780639faac16514610353578063c5cbc2b7146102f9578063ce162829146102f4578063d41123d814610234578063ec422afd146101e5578063f20d8634146101515763f2fde38b146100c857600080fd5b3461014d57602036600319011261014d576100e1610621565b906100ea610797565b6001600160a01b0391821692831561013757505082546001600160a01b0319811683178455167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b51631e4fbdf760e01b8152908101849052602490fd5b8280fd5b509190346101e1576020928360031936011261014d57836001600160a01b03610178610621565b16835192838092633a98ef3960e01b82525afa9283156101d65780936101a1575b505051908152f35b909192508382813d83116101cf575b6101ba81836107c3565b810103126101cc575051903880610199565b80fd5b503d6101b0565b8251903d90823e3d90fd5b5080fd5b509190346101e1576020928360031936011261014d57836001600160a01b0361020c610621565b16835192838092634ca9858360e11b82525afa9283156101d65780936101a157505051908152f35b50903461014d57606036600319011261014d57602061028e92610255610621565b61025d61063c565b8451627eeac760e11b81526001600160a01b0390911692810192835260443560208401529485928391829160400190565b03916001600160a01b03165afa9182156102ea5783926102b3575b6020838351908152f35b9091506020813d82116102e2575b816102ce602093836107c3565b8101031261014d57602092505190386102a9565b3d91506102c1565b81513d85823e3d90fd5b610675565b50903461014d578060031936011261014d576020610315610621565b825163bd85b03960e01b8152602480359582019590955293849182906001600160a01b03165afa9182156102ea5783926102b3576020838351908152f35b509190346101e1576020928360031936011261014d57836001600160a01b0361037a610621565b168351928380926342c22ff160e01b82525afa9283156101d65780936101a157505051908152f35b5050346101e157816003193601126101e157905490516001600160a01b039091168152602090f35b50903461014d57602092836003193601126101cc57836001600160a01b036103f0610621565b168351948580926368428a1b60e01b82525afa92831561045757819361041b575b5050519015158152f35b909192508381813d8311610450575b61043481836107c3565b810103126101e157519081151582036101cc5750903880610411565b503d61042a565b509051903d90823e3d90fd5b83346101cc57806003193601126101cc5761047c610797565b80546001600160a01b03198116825581906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b5050346101e157816003193601126101e157517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b509190346101e157806003193601126101e15761051c610621565b9261052561063c565b8251630645179d60e11b815260209590916001600160a01b039091169086838581855afa9283156105e057908793929187936105a7575b508551627eeac760e11b81526001600160a01b0390911694810194855260208501929092529092839190829081906040015b03915afa9283156101d65780936101a157505051908152f35b848193959294503d83116105d9575b6105c081836107c3565b810103126105d557518692909161058e61055c565b8580fd5b503d6105b6565b85513d88823e3d90fd5b9250503461014d57602036600319011261014d573563ffffffff60e01b811680910361014d576301ffc9a760e01b14815260209150f35b600435906001600160a01b038216820361063757565b600080fd5b602435906001600160a01b038216820361063757565b60005b8381106106655750506000910152565b8181015183820152602001610655565b34610637576040806003193601126106375761068f610621565b81516303a24d0760e21b8152602480356004830152909291600091829185919082906001600160a01b03165afa9283156104575781936106fb575b505080518092602082526106ed8151809281602086015260208686019101610652565b601f01601f19168101030190f35b909192503d8083833e61070e81836107c3565b8101916020828403126101cc57815167ffffffffffffffff9283821161014d57019083601f830112156101cc5781519283116107835784519361075b601f8501601f1916602001866107c3565b838552602084840101116101cc57509061077b9160208085019101610652565b9038806106ca565b634e487b7160e01b81526041600452602490fd5b6000546001600160a01b031633036107ab57565b60405163118cdaa760e01b8152336004820152602490fd5b90601f8019910116810190811067ffffffffffffffff8211176107e557604052565b634e487b7160e01b600052604160045260246000fdfea26469706673582212208fce9447e145ffa06c09513c139dd7330ed02c99302b92a46b011efc78414cf564736f6c63430008140033";

type WSUtilsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WSUtilsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WSUtils__factory extends ContractFactory {
  constructor(...args: WSUtilsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _protocolModuleAddress: AddressLike,
    _owner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _protocolModuleAddress,
      _owner,
      overrides || {}
    );
  }
  override deploy(
    _protocolModuleAddress: AddressLike,
    _owner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _protocolModuleAddress,
      _owner,
      overrides || {}
    ) as Promise<
      WSUtils & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): WSUtils__factory {
    return super.connect(runner) as WSUtils__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WSUtilsInterface {
    return new Interface(_abi) as WSUtilsInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): WSUtils {
    return new Contract(address, _abi, runner) as unknown as WSUtils;
  }
}
