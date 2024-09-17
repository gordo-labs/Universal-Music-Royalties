/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export interface WrappedSongSmartAccountUpgradeableInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "UPGRADE_INTERFACE_VERSION"
      | "batchTransferSongShares"
      | "canReceiveERC20"
      | "createFungibleSongShares"
      | "createsSongToken"
      | "createsWrappedSongTokens"
      | "distributorWallet"
      | "getTokenBalance"
      | "initialize"
      | "isAuthentic"
      | "isReleased"
      | "isrc"
      | "owner"
      | "protocolModule"
      | "proxiableUUID"
      | "receiveEarnings"
      | "renounceOwnership"
      | "requestWrappedSongRelease"
      | "setSharesForSale"
      | "sharesForSale"
      | "songSharesId"
      | "stablecoin"
      | "transferOwnership"
      | "transferShares"
      | "transferSongShares"
      | "upgradeToAndCall"
      | "wrappedSongTokenId"
      | "wsTokensManagement"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "Initialized" | "OwnershipTransferred" | "Upgraded"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "UPGRADE_INTERFACE_VERSION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "batchTransferSongShares",
    values: [BigNumberish[], BigNumberish[], AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "canReceiveERC20",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createFungibleSongShares",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createsSongToken",
    values: [string, AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "createsWrappedSongTokens",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "distributorWallet",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenBalance",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike, AddressLike, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isAuthentic",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isReleased",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isrc", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "protocolModule",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "receiveEarnings",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requestWrappedSongRelease",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setSharesForSale",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "sharesForSale",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "songSharesId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stablecoin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferShares",
    values: [BigNumberish, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferSongShares",
    values: [BigNumberish, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "wrappedSongTokenId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "wsTokensManagement",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "UPGRADE_INTERFACE_VERSION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchTransferSongShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "canReceiveERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createFungibleSongShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createsSongToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createsWrappedSongTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributorWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isAuthentic",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isReleased", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isrc", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "protocolModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receiveEarnings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestWrappedSongRelease",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSharesForSale",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sharesForSale",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "songSharesId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stablecoin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferSongShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrappedSongTokenId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wsTokensManagement",
    data: BytesLike
  ): Result;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpgradedEvent {
  export type InputTuple = [implementation: AddressLike];
  export type OutputTuple = [implementation: string];
  export interface OutputObject {
    implementation: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface WrappedSongSmartAccountUpgradeable extends BaseContract {
  connect(runner?: ContractRunner | null): WrappedSongSmartAccountUpgradeable;
  waitForDeployment(): Promise<this>;

  interface: WrappedSongSmartAccountUpgradeableInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  UPGRADE_INTERFACE_VERSION: TypedContractMethod<[], [string], "view">;

  batchTransferSongShares: TypedContractMethod<
    [tokenIds: BigNumberish[], amounts: BigNumberish[], to: AddressLike],
    [void],
    "nonpayable"
  >;

  canReceiveERC20: TypedContractMethod<[], [boolean], "view">;

  createFungibleSongShares: TypedContractMethod<
    [songId: BigNumberish, sharesAmount: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  createsSongToken: TypedContractMethod<
    [songURI: string, participants: AddressLike[]],
    [bigint],
    "nonpayable"
  >;

  createsWrappedSongTokens: TypedContractMethod<
    [songURI: string, sharesAmount: BigNumberish],
    [[bigint, bigint] & { songId: bigint; newSongSharesId: bigint }],
    "nonpayable"
  >;

  distributorWallet: TypedContractMethod<[], [string], "view">;

  getTokenBalance: TypedContractMethod<
    [tokenId: BigNumberish],
    [bigint],
    "view"
  >;

  initialize: TypedContractMethod<
    [
      _stablecoinAddress: AddressLike,
      _owner: AddressLike,
      _protocolModuleAddress: AddressLike,
      _songManagementContract: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  isAuthentic: TypedContractMethod<[], [boolean], "view">;

  isReleased: TypedContractMethod<[], [boolean], "view">;

  isrc: TypedContractMethod<[], [string], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  protocolModule: TypedContractMethod<[], [string], "view">;

  proxiableUUID: TypedContractMethod<[], [string], "view">;

  receiveEarnings: TypedContractMethod<
    [amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  requestWrappedSongRelease: TypedContractMethod<
    [_distributorWallet: AddressLike],
    [void],
    "nonpayable"
  >;

  setSharesForSale: TypedContractMethod<
    [
      sharesId: BigNumberish,
      percentage: BigNumberish,
      pricePerShare: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  sharesForSale: TypedContractMethod<
    [arg0: BigNumberish],
    [[bigint, bigint] & { pricePerShare: bigint; percentageForSale: bigint }],
    "view"
  >;

  songSharesId: TypedContractMethod<[], [bigint], "view">;

  stablecoin: TypedContractMethod<[], [string], "view">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  transferShares: TypedContractMethod<
    [sharesId: BigNumberish, amount: BigNumberish, recipient: AddressLike],
    [void],
    "nonpayable"
  >;

  transferSongShares: TypedContractMethod<
    [tokenId: BigNumberish, amount: BigNumberish, to: AddressLike],
    [void],
    "nonpayable"
  >;

  upgradeToAndCall: TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;

  wrappedSongTokenId: TypedContractMethod<[], [bigint], "view">;

  wsTokensManagement: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "UPGRADE_INTERFACE_VERSION"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "batchTransferSongShares"
  ): TypedContractMethod<
    [tokenIds: BigNumberish[], amounts: BigNumberish[], to: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "canReceiveERC20"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "createFungibleSongShares"
  ): TypedContractMethod<
    [songId: BigNumberish, sharesAmount: BigNumberish],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "createsSongToken"
  ): TypedContractMethod<
    [songURI: string, participants: AddressLike[]],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "createsWrappedSongTokens"
  ): TypedContractMethod<
    [songURI: string, sharesAmount: BigNumberish],
    [[bigint, bigint] & { songId: bigint; newSongSharesId: bigint }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "distributorWallet"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getTokenBalance"
  ): TypedContractMethod<[tokenId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      _stablecoinAddress: AddressLike,
      _owner: AddressLike,
      _protocolModuleAddress: AddressLike,
      _songManagementContract: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "isAuthentic"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "isReleased"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "isrc"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "protocolModule"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "proxiableUUID"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "receiveEarnings"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "requestWrappedSongRelease"
  ): TypedContractMethod<
    [_distributorWallet: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setSharesForSale"
  ): TypedContractMethod<
    [
      sharesId: BigNumberish,
      percentage: BigNumberish,
      pricePerShare: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "sharesForSale"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [[bigint, bigint] & { pricePerShare: bigint; percentageForSale: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "songSharesId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "stablecoin"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferShares"
  ): TypedContractMethod<
    [sharesId: BigNumberish, amount: BigNumberish, recipient: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferSongShares"
  ): TypedContractMethod<
    [tokenId: BigNumberish, amount: BigNumberish, to: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "upgradeToAndCall"
  ): TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "wrappedSongTokenId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "wsTokensManagement"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "Upgraded"
  ): TypedContractEvent<
    UpgradedEvent.InputTuple,
    UpgradedEvent.OutputTuple,
    UpgradedEvent.OutputObject
  >;

  filters: {
    "Initialized(uint64)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "Upgraded(address)": TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
    Upgraded: TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
  };
}
