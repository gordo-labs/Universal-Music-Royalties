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
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export declare namespace IMetadataModule {
  export type MetadataStruct = {
    name: string;
    description: string;
    image: string;
    externalUrl: string;
    animationUrl: string;
    attributesIpfsHash: string;
  };

  export type MetadataStructOutput = [
    name: string,
    description: string,
    image: string,
    externalUrl: string,
    animationUrl: string,
    attributesIpfsHash: string
  ] & {
    name: string;
    description: string;
    image: string;
    externalUrl: string;
    animationUrl: string;
    attributesIpfsHash: string;
  };
}

export interface IMetadataModuleInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "confirmUpdateMetadata"
      | "createMetadata"
      | "getPendingMetadataUpdate"
      | "getTokenMetadata"
      | "getTokenURI"
      | "isMetadataUpdateConfirmed"
      | "rejectUpdateMetadata"
      | "removeMetadata"
      | "requestUpdateMetadata"
      | "updateMetadata"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "confirmUpdateMetadata",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createMetadata",
    values: [AddressLike, IMetadataModule.MetadataStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getPendingMetadataUpdate",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenMetadata",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenURI",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isMetadataUpdateConfirmed",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rejectUpdateMetadata",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeMetadata",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "requestUpdateMetadata",
    values: [AddressLike, IMetadataModule.MetadataStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "updateMetadata",
    values: [AddressLike, IMetadataModule.MetadataStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "confirmUpdateMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPendingMetadataUpdate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isMetadataUpdateConfirmed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rejectUpdateMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestUpdateMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateMetadata",
    data: BytesLike
  ): Result;
}

export interface IMetadataModule extends BaseContract {
  connect(runner?: ContractRunner | null): IMetadataModule;
  waitForDeployment(): Promise<this>;

  interface: IMetadataModuleInterface;

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

  confirmUpdateMetadata: TypedContractMethod<
    [wrappedSong: AddressLike],
    [void],
    "nonpayable"
  >;

  createMetadata: TypedContractMethod<
    [wrappedSong: AddressLike, newMetadata: IMetadataModule.MetadataStruct],
    [void],
    "nonpayable"
  >;

  getPendingMetadataUpdate: TypedContractMethod<
    [wrappedSong: AddressLike],
    [IMetadataModule.MetadataStructOutput],
    "view"
  >;

  getTokenMetadata: TypedContractMethod<
    [wrappedSong: AddressLike],
    [IMetadataModule.MetadataStructOutput],
    "view"
  >;

  getTokenURI: TypedContractMethod<
    [wrappedSong: AddressLike, tokenId: BigNumberish],
    [string],
    "view"
  >;

  isMetadataUpdateConfirmed: TypedContractMethod<
    [wrappedSong: AddressLike],
    [boolean],
    "view"
  >;

  rejectUpdateMetadata: TypedContractMethod<
    [wrappedSong: AddressLike],
    [void],
    "nonpayable"
  >;

  removeMetadata: TypedContractMethod<
    [wrappedSong: AddressLike],
    [void],
    "nonpayable"
  >;

  requestUpdateMetadata: TypedContractMethod<
    [wrappedSong: AddressLike, newMetadata: IMetadataModule.MetadataStruct],
    [void],
    "nonpayable"
  >;

  updateMetadata: TypedContractMethod<
    [wrappedSong: AddressLike, newMetadata: IMetadataModule.MetadataStruct],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "confirmUpdateMetadata"
  ): TypedContractMethod<[wrappedSong: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "createMetadata"
  ): TypedContractMethod<
    [wrappedSong: AddressLike, newMetadata: IMetadataModule.MetadataStruct],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getPendingMetadataUpdate"
  ): TypedContractMethod<
    [wrappedSong: AddressLike],
    [IMetadataModule.MetadataStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getTokenMetadata"
  ): TypedContractMethod<
    [wrappedSong: AddressLike],
    [IMetadataModule.MetadataStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getTokenURI"
  ): TypedContractMethod<
    [wrappedSong: AddressLike, tokenId: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "isMetadataUpdateConfirmed"
  ): TypedContractMethod<[wrappedSong: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "rejectUpdateMetadata"
  ): TypedContractMethod<[wrappedSong: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "removeMetadata"
  ): TypedContractMethod<[wrappedSong: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "requestUpdateMetadata"
  ): TypedContractMethod<
    [wrappedSong: AddressLike, newMetadata: IMetadataModule.MetadataStruct],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateMetadata"
  ): TypedContractMethod<
    [wrappedSong: AddressLike, newMetadata: IMetadataModule.MetadataStruct],
    [void],
    "nonpayable"
  >;

  filters: {};
}
