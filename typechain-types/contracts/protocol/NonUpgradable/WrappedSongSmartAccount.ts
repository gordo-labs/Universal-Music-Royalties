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

export interface WrappedSongSmartAccountInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "accumulatedEarningsPerShare"
      | "claimEarnings"
      | "claimEthEarnings"
      | "createFungibleSongShares"
      | "createsSongToken"
      | "createsWrappedSongTokens"
      | "ethBalance"
      | "executeConfirmedMetadataUpdate"
      | "isTokenReceived"
      | "lastClaimedEarningsPerShare"
      | "newWSTokenManagement"
      | "onERC1155BatchReceived"
      | "onERC1155Received"
      | "owner"
      | "protocolModule"
      | "receiveERC20"
      | "receiveEarnings"
      | "receivedTokens"
      | "redeemShares"
      | "redeemedEarnings"
      | "renounceOwnership"
      | "requestUpdateMetadata"
      | "requestWrappedSongRelease"
      | "requestWrappedSongReleaseWithMetadata"
      | "saleFunds"
      | "songSharesId"
      | "stablecoin"
      | "supportsInterface"
      | "totalDistributedEarnings"
      | "totalEarnings"
      | "transferOwnership"
      | "unclaimedEarnings"
      | "updateEarnings"
      | "updateMetadata"
      | "withdrawSaleFundsFromWSTokenManagement"
      | "wrappedSongTokenId"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "EarningsClaimed"
      | "EarningsReceived"
      | "EarningsUpdated"
      | "MetadataUpdated"
      | "OwnershipTransferred"
      | "SaleFundsReceived"
      | "SaleFundsWithdrawn"
      | "SongSharesTransferred"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "accumulatedEarningsPerShare",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimEarnings",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimEthEarnings",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createFungibleSongShares",
    values: [BigNumberish, BigNumberish, string, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createsSongToken",
    values: [string, AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "createsWrappedSongTokens",
    values: [string, BigNumberish, string, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "ethBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "executeConfirmedMetadataUpdate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isTokenReceived",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "lastClaimedEarningsPerShare",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "newWSTokenManagement",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish[],
      BigNumberish[],
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "protocolModule",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "receiveERC20",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "receiveEarnings",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "receivedTokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemShares",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "redeemedEarnings",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requestUpdateMetadata",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "requestWrappedSongRelease",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "requestWrappedSongReleaseWithMetadata",
    values: [AddressLike, string]
  ): string;
  encodeFunctionData(functionFragment: "saleFunds", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "songSharesId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stablecoin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "totalDistributedEarnings",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalEarnings",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "unclaimedEarnings",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateEarnings",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateMetadata",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawSaleFundsFromWSTokenManagement",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "wrappedSongTokenId",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "accumulatedEarningsPerShare",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimEarnings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimEthEarnings",
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
  decodeFunctionResult(functionFragment: "ethBalance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeConfirmedMetadataUpdate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTokenReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastClaimedEarningsPerShare",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "newWSTokenManagement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "protocolModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receiveERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receiveEarnings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receivedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "redeemShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "redeemedEarnings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestUpdateMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestWrappedSongRelease",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestWrappedSongReleaseWithMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "saleFunds", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "songSharesId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stablecoin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalDistributedEarnings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalEarnings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unclaimedEarnings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateEarnings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawSaleFundsFromWSTokenManagement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrappedSongTokenId",
    data: BytesLike
  ): Result;
}

export namespace EarningsClaimedEvent {
  export type InputTuple = [
    account: AddressLike,
    token: AddressLike,
    amount: BigNumberish,
    totalAmount: BigNumberish
  ];
  export type OutputTuple = [
    account: string,
    token: string,
    amount: bigint,
    totalAmount: bigint
  ];
  export interface OutputObject {
    account: string;
    token: string;
    amount: bigint;
    totalAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace EarningsReceivedEvent {
  export type InputTuple = [
    token: AddressLike,
    amount: BigNumberish,
    earningsPerShare: BigNumberish
  ];
  export type OutputTuple = [
    token: string,
    amount: bigint,
    earningsPerShare: bigint
  ];
  export interface OutputObject {
    token: string;
    amount: bigint;
    earningsPerShare: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace EarningsUpdatedEvent {
  export type InputTuple = [
    account: AddressLike,
    newEarnings: BigNumberish,
    totalEarnings: BigNumberish
  ];
  export type OutputTuple = [
    account: string,
    newEarnings: bigint,
    totalEarnings: bigint
  ];
  export interface OutputObject {
    account: string;
    newEarnings: bigint;
    totalEarnings: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MetadataUpdatedEvent {
  export type InputTuple = [
    tokenId: BigNumberish,
    newMetadata: string,
    implementationAccount: AddressLike
  ];
  export type OutputTuple = [
    tokenId: bigint,
    newMetadata: string,
    implementationAccount: string
  ];
  export interface OutputObject {
    tokenId: bigint;
    newMetadata: string;
    implementationAccount: string;
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

export namespace SaleFundsReceivedEvent {
  export type InputTuple = [amount: BigNumberish];
  export type OutputTuple = [amount: bigint];
  export interface OutputObject {
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SaleFundsWithdrawnEvent {
  export type InputTuple = [to: AddressLike, amount: BigNumberish];
  export type OutputTuple = [to: string, amount: bigint];
  export interface OutputObject {
    to: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SongSharesTransferredEvent {
  export type InputTuple = [
    from: AddressLike,
    to: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [from: string, to: string, amount: bigint];
  export interface OutputObject {
    from: string;
    to: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface WrappedSongSmartAccount extends BaseContract {
  connect(runner?: ContractRunner | null): WrappedSongSmartAccount;
  waitForDeployment(): Promise<this>;

  interface: WrappedSongSmartAccountInterface;

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

  accumulatedEarningsPerShare: TypedContractMethod<[], [bigint], "view">;

  claimEarnings: TypedContractMethod<[], [void], "nonpayable">;

  claimEthEarnings: TypedContractMethod<[], [void], "nonpayable">;

  createFungibleSongShares: TypedContractMethod<
    [
      songId: BigNumberish,
      sharesAmount: BigNumberish,
      sharesURI: string,
      creator: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;

  createsSongToken: TypedContractMethod<
    [songURI: string, participants: AddressLike[]],
    [bigint],
    "nonpayable"
  >;

  createsWrappedSongTokens: TypedContractMethod<
    [
      songURI: string,
      sharesAmount: BigNumberish,
      sharesURI: string,
      creator: AddressLike
    ],
    [[bigint, bigint] & { songId: bigint; newSongSharesId: bigint }],
    "nonpayable"
  >;

  ethBalance: TypedContractMethod<[], [bigint], "view">;

  executeConfirmedMetadataUpdate: TypedContractMethod<
    [tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  isTokenReceived: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  lastClaimedEarningsPerShare: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  newWSTokenManagement: TypedContractMethod<[], [string], "view">;

  onERC1155BatchReceived: TypedContractMethod<
    [
      operator: AddressLike,
      from: AddressLike,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike
    ],
    [string],
    "nonpayable"
  >;

  onERC1155Received: TypedContractMethod<
    [
      operator: AddressLike,
      from: AddressLike,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike
    ],
    [string],
    "nonpayable"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  protocolModule: TypedContractMethod<[], [string], "view">;

  receiveERC20: TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  receiveEarnings: TypedContractMethod<[], [void], "payable">;

  receivedTokens: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  redeemShares: TypedContractMethod<[], [void], "nonpayable">;

  redeemedEarnings: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  requestUpdateMetadata: TypedContractMethod<
    [tokenId: BigNumberish, newMetadata: string],
    [void],
    "nonpayable"
  >;

  requestWrappedSongRelease: TypedContractMethod<
    [_distributorWallet: AddressLike],
    [void],
    "nonpayable"
  >;

  requestWrappedSongReleaseWithMetadata: TypedContractMethod<
    [_distributorWallet: AddressLike, songURI: string],
    [void],
    "nonpayable"
  >;

  saleFunds: TypedContractMethod<[], [bigint], "view">;

  songSharesId: TypedContractMethod<[], [bigint], "view">;

  stablecoin: TypedContractMethod<[], [string], "view">;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  totalDistributedEarnings: TypedContractMethod<[], [bigint], "view">;

  totalEarnings: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  unclaimedEarnings: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  updateEarnings: TypedContractMethod<[], [void], "nonpayable">;

  updateMetadata: TypedContractMethod<
    [tokenId: BigNumberish, newMetadata: string],
    [void],
    "nonpayable"
  >;

  withdrawSaleFundsFromWSTokenManagement: TypedContractMethod<
    [],
    [void],
    "nonpayable"
  >;

  wrappedSongTokenId: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "accumulatedEarningsPerShare"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "claimEarnings"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "claimEthEarnings"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "createFungibleSongShares"
  ): TypedContractMethod<
    [
      songId: BigNumberish,
      sharesAmount: BigNumberish,
      sharesURI: string,
      creator: AddressLike
    ],
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
    [
      songURI: string,
      sharesAmount: BigNumberish,
      sharesURI: string,
      creator: AddressLike
    ],
    [[bigint, bigint] & { songId: bigint; newSongSharesId: bigint }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "ethBalance"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "executeConfirmedMetadataUpdate"
  ): TypedContractMethod<[tokenId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "isTokenReceived"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "lastClaimedEarningsPerShare"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "newWSTokenManagement"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "onERC1155BatchReceived"
  ): TypedContractMethod<
    [
      operator: AddressLike,
      from: AddressLike,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "onERC1155Received"
  ): TypedContractMethod<
    [
      operator: AddressLike,
      from: AddressLike,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "protocolModule"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "receiveERC20"
  ): TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "receiveEarnings"
  ): TypedContractMethod<[], [void], "payable">;
  getFunction(
    nameOrSignature: "receivedTokens"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "redeemShares"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "redeemedEarnings"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "requestUpdateMetadata"
  ): TypedContractMethod<
    [tokenId: BigNumberish, newMetadata: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "requestWrappedSongRelease"
  ): TypedContractMethod<
    [_distributorWallet: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "requestWrappedSongReleaseWithMetadata"
  ): TypedContractMethod<
    [_distributorWallet: AddressLike, songURI: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "saleFunds"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "songSharesId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "stablecoin"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "totalDistributedEarnings"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalEarnings"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "unclaimedEarnings"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "updateEarnings"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateMetadata"
  ): TypedContractMethod<
    [tokenId: BigNumberish, newMetadata: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawSaleFundsFromWSTokenManagement"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "wrappedSongTokenId"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "EarningsClaimed"
  ): TypedContractEvent<
    EarningsClaimedEvent.InputTuple,
    EarningsClaimedEvent.OutputTuple,
    EarningsClaimedEvent.OutputObject
  >;
  getEvent(
    key: "EarningsReceived"
  ): TypedContractEvent<
    EarningsReceivedEvent.InputTuple,
    EarningsReceivedEvent.OutputTuple,
    EarningsReceivedEvent.OutputObject
  >;
  getEvent(
    key: "EarningsUpdated"
  ): TypedContractEvent<
    EarningsUpdatedEvent.InputTuple,
    EarningsUpdatedEvent.OutputTuple,
    EarningsUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "MetadataUpdated"
  ): TypedContractEvent<
    MetadataUpdatedEvent.InputTuple,
    MetadataUpdatedEvent.OutputTuple,
    MetadataUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "SaleFundsReceived"
  ): TypedContractEvent<
    SaleFundsReceivedEvent.InputTuple,
    SaleFundsReceivedEvent.OutputTuple,
    SaleFundsReceivedEvent.OutputObject
  >;
  getEvent(
    key: "SaleFundsWithdrawn"
  ): TypedContractEvent<
    SaleFundsWithdrawnEvent.InputTuple,
    SaleFundsWithdrawnEvent.OutputTuple,
    SaleFundsWithdrawnEvent.OutputObject
  >;
  getEvent(
    key: "SongSharesTransferred"
  ): TypedContractEvent<
    SongSharesTransferredEvent.InputTuple,
    SongSharesTransferredEvent.OutputTuple,
    SongSharesTransferredEvent.OutputObject
  >;

  filters: {
    "EarningsClaimed(address,address,uint256,uint256)": TypedContractEvent<
      EarningsClaimedEvent.InputTuple,
      EarningsClaimedEvent.OutputTuple,
      EarningsClaimedEvent.OutputObject
    >;
    EarningsClaimed: TypedContractEvent<
      EarningsClaimedEvent.InputTuple,
      EarningsClaimedEvent.OutputTuple,
      EarningsClaimedEvent.OutputObject
    >;

    "EarningsReceived(address,uint256,uint256)": TypedContractEvent<
      EarningsReceivedEvent.InputTuple,
      EarningsReceivedEvent.OutputTuple,
      EarningsReceivedEvent.OutputObject
    >;
    EarningsReceived: TypedContractEvent<
      EarningsReceivedEvent.InputTuple,
      EarningsReceivedEvent.OutputTuple,
      EarningsReceivedEvent.OutputObject
    >;

    "EarningsUpdated(address,uint256,uint256)": TypedContractEvent<
      EarningsUpdatedEvent.InputTuple,
      EarningsUpdatedEvent.OutputTuple,
      EarningsUpdatedEvent.OutputObject
    >;
    EarningsUpdated: TypedContractEvent<
      EarningsUpdatedEvent.InputTuple,
      EarningsUpdatedEvent.OutputTuple,
      EarningsUpdatedEvent.OutputObject
    >;

    "MetadataUpdated(uint256,string,address)": TypedContractEvent<
      MetadataUpdatedEvent.InputTuple,
      MetadataUpdatedEvent.OutputTuple,
      MetadataUpdatedEvent.OutputObject
    >;
    MetadataUpdated: TypedContractEvent<
      MetadataUpdatedEvent.InputTuple,
      MetadataUpdatedEvent.OutputTuple,
      MetadataUpdatedEvent.OutputObject
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

    "SaleFundsReceived(uint256)": TypedContractEvent<
      SaleFundsReceivedEvent.InputTuple,
      SaleFundsReceivedEvent.OutputTuple,
      SaleFundsReceivedEvent.OutputObject
    >;
    SaleFundsReceived: TypedContractEvent<
      SaleFundsReceivedEvent.InputTuple,
      SaleFundsReceivedEvent.OutputTuple,
      SaleFundsReceivedEvent.OutputObject
    >;

    "SaleFundsWithdrawn(address,uint256)": TypedContractEvent<
      SaleFundsWithdrawnEvent.InputTuple,
      SaleFundsWithdrawnEvent.OutputTuple,
      SaleFundsWithdrawnEvent.OutputObject
    >;
    SaleFundsWithdrawn: TypedContractEvent<
      SaleFundsWithdrawnEvent.InputTuple,
      SaleFundsWithdrawnEvent.OutputTuple,
      SaleFundsWithdrawnEvent.OutputObject
    >;

    "SongSharesTransferred(address,address,uint256)": TypedContractEvent<
      SongSharesTransferredEvent.InputTuple,
      SongSharesTransferredEvent.OutputTuple,
      SongSharesTransferredEvent.OutputObject
    >;
    SongSharesTransferred: TypedContractEvent<
      SongSharesTransferredEvent.InputTuple,
      SongSharesTransferredEvent.OutputTuple,
      SongSharesTransferredEvent.OutputObject
    >;
  };
}
