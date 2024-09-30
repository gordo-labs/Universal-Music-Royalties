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

export interface WSUtilsInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "getFungibleTokenShares"
      | "getPricePerShare"
      | "getShareholderAddresses"
      | "getSharesForSale"
      | "getSharesIdForSong"
      | "getSongSharesBalance"
      | "getTokenBalance"
      | "getTokenMetadata"
      | "getTokenTotalSupply"
      | "getTokenURI"
      | "getTotalShares"
      | "getWrappedSongMetadata"
      | "isSaleActive"
      | "owner"
      | "protocolModule"
      | "renounceOwnership"
      | "supportsInterface"
      | "transferOwnership"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;

  encodeFunctionData(
    functionFragment: "getFungibleTokenShares",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPricePerShare",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getShareholderAddresses",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSharesForSale",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getSharesIdForSong",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSongSharesBalance",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenBalance",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenMetadata",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenTotalSupply",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenURI",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalShares",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getWrappedSongMetadata",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isSaleActive",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "protocolModule",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "getFungibleTokenShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPricePerShare",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getShareholderAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSharesForSale",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSharesIdForSong",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSongSharesBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenTotalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWrappedSongMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isSaleActive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "protocolModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
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

export interface WSUtils extends BaseContract {
  connect(runner?: ContractRunner | null): WSUtils;
  waitForDeployment(): Promise<this>;

  interface: WSUtilsInterface;

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

  getFungibleTokenShares: TypedContractMethod<
    [_wsTokensManagement: AddressLike, sharesId: BigNumberish],
    [bigint],
    "view"
  >;

  getPricePerShare: TypedContractMethod<
    [_wsTokensManagement: AddressLike],
    [bigint],
    "view"
  >;

  getShareholderAddresses: TypedContractMethod<
    [_wsTokensManagement: AddressLike, sharesId: BigNumberish],
    [string[]],
    "view"
  >;

  getSharesForSale: TypedContractMethod<
    [_wsTokensManagement: AddressLike],
    [bigint],
    "view"
  >;

  getSharesIdForSong: TypedContractMethod<
    [_wsTokensManagement: AddressLike, songId: BigNumberish],
    [bigint],
    "view"
  >;

  getSongSharesBalance: TypedContractMethod<
    [_wsTokensManagement: AddressLike, account: AddressLike],
    [bigint],
    "view"
  >;

  getTokenBalance: TypedContractMethod<
    [
      _wsTokensManagement: AddressLike,
      account: AddressLike,
      tokenId: BigNumberish
    ],
    [bigint],
    "view"
  >;

  getTokenMetadata: TypedContractMethod<
    [_wsTokensManagement: AddressLike, tokenId: BigNumberish],
    [string],
    "view"
  >;

  getTokenTotalSupply: TypedContractMethod<
    [_wsTokensManagement: AddressLike, id: BigNumberish],
    [bigint],
    "view"
  >;

  getTokenURI: TypedContractMethod<
    [_wsTokensManagement: AddressLike, tokenId: BigNumberish],
    [string],
    "view"
  >;

  getTotalShares: TypedContractMethod<
    [_wsTokensManagement: AddressLike],
    [bigint],
    "view"
  >;

  getWrappedSongMetadata: TypedContractMethod<
    [_wsTokensManagement: AddressLike, tokenId: BigNumberish],
    [string],
    "view"
  >;

  isSaleActive: TypedContractMethod<
    [_wsTokensManagement: AddressLike],
    [boolean],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  protocolModule: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getFungibleTokenShares"
  ): TypedContractMethod<
    [_wsTokensManagement: AddressLike, sharesId: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPricePerShare"
  ): TypedContractMethod<[_wsTokensManagement: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getShareholderAddresses"
  ): TypedContractMethod<
    [_wsTokensManagement: AddressLike, sharesId: BigNumberish],
    [string[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getSharesForSale"
  ): TypedContractMethod<[_wsTokensManagement: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getSharesIdForSong"
  ): TypedContractMethod<
    [_wsTokensManagement: AddressLike, songId: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getSongSharesBalance"
  ): TypedContractMethod<
    [_wsTokensManagement: AddressLike, account: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getTokenBalance"
  ): TypedContractMethod<
    [
      _wsTokensManagement: AddressLike,
      account: AddressLike,
      tokenId: BigNumberish
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getTokenMetadata"
  ): TypedContractMethod<
    [_wsTokensManagement: AddressLike, tokenId: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "getTokenTotalSupply"
  ): TypedContractMethod<
    [_wsTokensManagement: AddressLike, id: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getTokenURI"
  ): TypedContractMethod<
    [_wsTokensManagement: AddressLike, tokenId: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "getTotalShares"
  ): TypedContractMethod<[_wsTokensManagement: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getWrappedSongMetadata"
  ): TypedContractMethod<
    [_wsTokensManagement: AddressLike, tokenId: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "isSaleActive"
  ): TypedContractMethod<[_wsTokensManagement: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "protocolModule"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;

  filters: {
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
  };
}
