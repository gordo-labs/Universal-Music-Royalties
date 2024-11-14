// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class ContractMigrated extends ethereum.Event {
  get params(): ContractMigrated__Params {
    return new ContractMigrated__Params(this);
  }
}

export class ContractMigrated__Params {
  _event: ContractMigrated;

  constructor(event: ContractMigrated) {
    this._event = event;
  }

  get newWrappedSongAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class EarningsEpochProcessed extends ethereum.Event {
  get params(): EarningsEpochProcessed__Params {
    return new EarningsEpochProcessed__Params(this);
  }
}

export class EarningsEpochProcessed__Params {
  _event: EarningsEpochProcessed;

  constructor(event: EarningsEpochProcessed) {
    this._event = event;
  }

  get epochId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get earningsPerShare(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get isETH(): boolean {
    return this._event.parameters[3].value.toBoolean();
  }
}

export class EpochEarningsClaimed extends ethereum.Event {
  get params(): EpochEarningsClaimed__Params {
    return new EpochEarningsClaimed__Params(this);
  }
}

export class EpochEarningsClaimed__Params {
  _event: EpochEarningsClaimed;

  constructor(event: EpochEarningsClaimed) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get fromEpoch(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get toEpoch(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get token(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class WrappedSongSmartAccount__ethEarningsEpochsResultValue0Struct extends ethereum.Tuple {
  get epochId(): BigInt {
    return this[0].toBigInt();
  }

  get amount(): BigInt {
    return this[1].toBigInt();
  }

  get earningsPerShare(): BigInt {
    return this[2].toBigInt();
  }

  get timestamp(): BigInt {
    return this[3].toBigInt();
  }

  get sender(): Address {
    return this[4].toAddress();
  }
}

export class WrappedSongSmartAccount__getUnclaimedETHEpochsResult {
  value0: Array<BigInt>;
  value1: Array<BigInt>;
  value2: Array<BigInt>;
  value3: Array<string>;

  constructor(
    value0: Array<BigInt>,
    value1: Array<BigInt>,
    value2: Array<BigInt>,
    value3: Array<string>,
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigIntArray(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigIntArray(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigIntArray(this.value2));
    map.set("value3", ethereum.Value.fromStringArray(this.value3));
    return map;
  }

  getEpochIds(): Array<BigInt> {
    return this.value0;
  }

  getAmounts(): Array<BigInt> {
    return this.value1;
  }

  getTimestamps(): Array<BigInt> {
    return this.value2;
  }

  getSources(): Array<string> {
    return this.value3;
  }
}

export class WrappedSongSmartAccount__getUnclaimedStablecoinEpochsResult {
  value0: Array<BigInt>;
  value1: Array<BigInt>;
  value2: Array<BigInt>;
  value3: Array<string>;

  constructor(
    value0: Array<BigInt>,
    value1: Array<BigInt>,
    value2: Array<BigInt>,
    value3: Array<string>,
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigIntArray(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigIntArray(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigIntArray(this.value2));
    map.set("value3", ethereum.Value.fromStringArray(this.value3));
    return map;
  }

  getEpochIds(): Array<BigInt> {
    return this.value0;
  }

  getAmounts(): Array<BigInt> {
    return this.value1;
  }

  getTimestamps(): Array<BigInt> {
    return this.value2;
  }

  getSources(): Array<string> {
    return this.value3;
  }
}

export class WrappedSongSmartAccount__hasMoreEpochsToClaimResult {
  value0: boolean;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: boolean, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  getHasMore(): boolean {
    return this.value0;
  }

  getNextEpoch(): BigInt {
    return this.value1;
  }

  getTotalEpochs(): BigInt {
    return this.value2;
  }
}

export class WrappedSongSmartAccount__stablecoinEarningsEpochsResultValue0Struct extends ethereum.Tuple {
  get epochId(): BigInt {
    return this[0].toBigInt();
  }

  get amount(): BigInt {
    return this[1].toBigInt();
  }

  get earningsPerShare(): BigInt {
    return this[2].toBigInt();
  }

  get timestamp(): BigInt {
    return this[3].toBigInt();
  }

  get sender(): Address {
    return this[4].toAddress();
  }
}

export class WrappedSongSmartAccount__userEpochBalancesResultValue0Struct extends ethereum.Tuple {
  get lastClaimedEpoch(): BigInt {
    return this[0].toBigInt();
  }

  get lastClaimedETHEpoch(): BigInt {
    return this[1].toBigInt();
  }
}

export class WrappedSongSmartAccount extends ethereum.SmartContract {
  static bind(address: Address): WrappedSongSmartAccount {
    return new WrappedSongSmartAccount("WrappedSongSmartAccount", address);
  }

  createLegalContract(contractURI: string): BigInt {
    let result = super.call(
      "createLegalContract",
      "createLegalContract(string):(uint256)",
      [ethereum.Value.fromString(contractURI)],
    );

    return result[0].toBigInt();
  }

  try_createLegalContract(contractURI: string): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createLegalContract",
      "createLegalContract(string):(uint256)",
      [ethereum.Value.fromString(contractURI)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  ethBalance(): BigInt {
    let result = super.call("ethBalance", "ethBalance():(uint256)", []);

    return result[0].toBigInt();
  }

  try_ethBalance(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("ethBalance", "ethBalance():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  ethEarningsEpochs(
    index: BigInt,
  ): WrappedSongSmartAccount__ethEarningsEpochsResultValue0Struct {
    let result = super.call(
      "ethEarningsEpochs",
      "ethEarningsEpochs(uint256):((uint256,uint256,uint256,uint256,address))",
      [ethereum.Value.fromUnsignedBigInt(index)],
    );

    return changetype<WrappedSongSmartAccount__ethEarningsEpochsResultValue0Struct>(
      result[0].toTuple(),
    );
  }

  try_ethEarningsEpochs(
    index: BigInt,
  ): ethereum.CallResult<WrappedSongSmartAccount__ethEarningsEpochsResultValue0Struct> {
    let result = super.tryCall(
      "ethEarningsEpochs",
      "ethEarningsEpochs(uint256):((uint256,uint256,uint256,uint256,address))",
      [ethereum.Value.fromUnsignedBigInt(index)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<WrappedSongSmartAccount__ethEarningsEpochsResultValue0Struct>(
        value[0].toTuple(),
      ),
    );
  }

  getPendingETHEarnings(account: Address): BigInt {
    let result = super.call(
      "getPendingETHEarnings",
      "getPendingETHEarnings(address):(uint256)",
      [ethereum.Value.fromAddress(account)],
    );

    return result[0].toBigInt();
  }

  try_getPendingETHEarnings(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getPendingETHEarnings",
      "getPendingETHEarnings(address):(uint256)",
      [ethereum.Value.fromAddress(account)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getPendingStablecoinDistribution(): BigInt {
    let result = super.call(
      "getPendingStablecoinDistribution",
      "getPendingStablecoinDistribution():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_getPendingStablecoinDistribution(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getPendingStablecoinDistribution",
      "getPendingStablecoinDistribution():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getPendingStablecoinEarnings(account: Address): BigInt {
    let result = super.call(
      "getPendingStablecoinEarnings",
      "getPendingStablecoinEarnings(address):(uint256)",
      [ethereum.Value.fromAddress(account)],
    );

    return result[0].toBigInt();
  }

  try_getPendingStablecoinEarnings(
    account: Address,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getPendingStablecoinEarnings",
      "getPendingStablecoinEarnings(address):(uint256)",
      [ethereum.Value.fromAddress(account)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getUnclaimedETHEpochs(
    account: Address,
  ): WrappedSongSmartAccount__getUnclaimedETHEpochsResult {
    let result = super.call(
      "getUnclaimedETHEpochs",
      "getUnclaimedETHEpochs(address):(uint256[],uint256[],uint256[],string[])",
      [ethereum.Value.fromAddress(account)],
    );

    return new WrappedSongSmartAccount__getUnclaimedETHEpochsResult(
      result[0].toBigIntArray(),
      result[1].toBigIntArray(),
      result[2].toBigIntArray(),
      result[3].toStringArray(),
    );
  }

  try_getUnclaimedETHEpochs(
    account: Address,
  ): ethereum.CallResult<WrappedSongSmartAccount__getUnclaimedETHEpochsResult> {
    let result = super.tryCall(
      "getUnclaimedETHEpochs",
      "getUnclaimedETHEpochs(address):(uint256[],uint256[],uint256[],string[])",
      [ethereum.Value.fromAddress(account)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new WrappedSongSmartAccount__getUnclaimedETHEpochsResult(
        value[0].toBigIntArray(),
        value[1].toBigIntArray(),
        value[2].toBigIntArray(),
        value[3].toStringArray(),
      ),
    );
  }

  getUnclaimedStablecoinEpochs(
    account: Address,
  ): WrappedSongSmartAccount__getUnclaimedStablecoinEpochsResult {
    let result = super.call(
      "getUnclaimedStablecoinEpochs",
      "getUnclaimedStablecoinEpochs(address):(uint256[],uint256[],uint256[],string[])",
      [ethereum.Value.fromAddress(account)],
    );

    return new WrappedSongSmartAccount__getUnclaimedStablecoinEpochsResult(
      result[0].toBigIntArray(),
      result[1].toBigIntArray(),
      result[2].toBigIntArray(),
      result[3].toStringArray(),
    );
  }

  try_getUnclaimedStablecoinEpochs(
    account: Address,
  ): ethereum.CallResult<WrappedSongSmartAccount__getUnclaimedStablecoinEpochsResult> {
    let result = super.tryCall(
      "getUnclaimedStablecoinEpochs",
      "getUnclaimedStablecoinEpochs(address):(uint256[],uint256[],uint256[],string[])",
      [ethereum.Value.fromAddress(account)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new WrappedSongSmartAccount__getUnclaimedStablecoinEpochsResult(
        value[0].toBigIntArray(),
        value[1].toBigIntArray(),
        value[2].toBigIntArray(),
        value[3].toStringArray(),
      ),
    );
  }

  getWSTokenManagementAddress(): Address {
    let result = super.call(
      "getWSTokenManagementAddress",
      "getWSTokenManagementAddress():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_getWSTokenManagementAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getWSTokenManagementAddress",
      "getWSTokenManagementAddress():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  hasMoreEpochsToClaim(
    account: Address,
    token: Address,
  ): WrappedSongSmartAccount__hasMoreEpochsToClaimResult {
    let result = super.call(
      "hasMoreEpochsToClaim",
      "hasMoreEpochsToClaim(address,address):(bool,uint256,uint256)",
      [ethereum.Value.fromAddress(account), ethereum.Value.fromAddress(token)],
    );

    return new WrappedSongSmartAccount__hasMoreEpochsToClaimResult(
      result[0].toBoolean(),
      result[1].toBigInt(),
      result[2].toBigInt(),
    );
  }

  try_hasMoreEpochsToClaim(
    account: Address,
    token: Address,
  ): ethereum.CallResult<WrappedSongSmartAccount__hasMoreEpochsToClaimResult> {
    let result = super.tryCall(
      "hasMoreEpochsToClaim",
      "hasMoreEpochsToClaim(address,address):(bool,uint256,uint256)",
      [ethereum.Value.fromAddress(account), ethereum.Value.fromAddress(token)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new WrappedSongSmartAccount__hasMoreEpochsToClaimResult(
        value[0].toBoolean(),
        value[1].toBigInt(),
        value[2].toBigInt(),
      ),
    );
  }

  metadataModule(): Address {
    let result = super.call("metadataModule", "metadataModule():(address)", []);

    return result[0].toAddress();
  }

  try_metadataModule(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "metadataModule",
      "metadataModule():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  migrated(): boolean {
    let result = super.call("migrated", "migrated():(bool)", []);

    return result[0].toBoolean();
  }

  try_migrated(): ethereum.CallResult<boolean> {
    let result = super.tryCall("migrated", "migrated():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  onERC1155BatchReceived(
    operator: Address,
    from: Address,
    ids: Array<BigInt>,
    values: Array<BigInt>,
    data: Bytes,
  ): Bytes {
    let result = super.call(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(operator),
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromUnsignedBigIntArray(ids),
        ethereum.Value.fromUnsignedBigIntArray(values),
        ethereum.Value.fromBytes(data),
      ],
    );

    return result[0].toBytes();
  }

  try_onERC1155BatchReceived(
    operator: Address,
    from: Address,
    ids: Array<BigInt>,
    values: Array<BigInt>,
    data: Bytes,
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(operator),
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromUnsignedBigIntArray(ids),
        ethereum.Value.fromUnsignedBigIntArray(values),
        ethereum.Value.fromBytes(data),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  onERC1155Received(
    operator: Address,
    from: Address,
    id: BigInt,
    value: BigInt,
    data: Bytes,
  ): Bytes {
    let result = super.call(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(operator),
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromUnsignedBigInt(id),
        ethereum.Value.fromUnsignedBigInt(value),
        ethereum.Value.fromBytes(data),
      ],
    );

    return result[0].toBytes();
  }

  try_onERC1155Received(
    operator: Address,
    from: Address,
    id: BigInt,
    value: BigInt,
    data: Bytes,
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(operator),
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromUnsignedBigInt(id),
        ethereum.Value.fromUnsignedBigInt(value),
        ethereum.Value.fromBytes(data),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  protocolModule(): Address {
    let result = super.call("protocolModule", "protocolModule():(address)", []);

    return result[0].toAddress();
  }

  try_protocolModule(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "protocolModule",
      "protocolModule():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  songSharesId(): BigInt {
    let result = super.call("songSharesId", "songSharesId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_songSharesId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("songSharesId", "songSharesId():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  stablecoin(): Address {
    let result = super.call("stablecoin", "stablecoin():(address)", []);

    return result[0].toAddress();
  }

  try_stablecoin(): ethereum.CallResult<Address> {
    let result = super.tryCall("stablecoin", "stablecoin():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  stablecoinEarningsEpochs(
    index: BigInt,
  ): WrappedSongSmartAccount__stablecoinEarningsEpochsResultValue0Struct {
    let result = super.call(
      "stablecoinEarningsEpochs",
      "stablecoinEarningsEpochs(uint256):((uint256,uint256,uint256,uint256,address))",
      [ethereum.Value.fromUnsignedBigInt(index)],
    );

    return changetype<WrappedSongSmartAccount__stablecoinEarningsEpochsResultValue0Struct>(
      result[0].toTuple(),
    );
  }

  try_stablecoinEarningsEpochs(
    index: BigInt,
  ): ethereum.CallResult<WrappedSongSmartAccount__stablecoinEarningsEpochsResultValue0Struct> {
    let result = super.tryCall(
      "stablecoinEarningsEpochs",
      "stablecoinEarningsEpochs(uint256):((uint256,uint256,uint256,uint256,address))",
      [ethereum.Value.fromUnsignedBigInt(index)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<WrappedSongSmartAccount__stablecoinEarningsEpochsResultValue0Struct>(
        value[0].toTuple(),
      ),
    );
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)],
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  userEpochBalances(
    user: Address,
  ): WrappedSongSmartAccount__userEpochBalancesResultValue0Struct {
    let result = super.call(
      "userEpochBalances",
      "userEpochBalances(address):((uint256,uint256))",
      [ethereum.Value.fromAddress(user)],
    );

    return changetype<WrappedSongSmartAccount__userEpochBalancesResultValue0Struct>(
      result[0].toTuple(),
    );
  }

  try_userEpochBalances(
    user: Address,
  ): ethereum.CallResult<WrappedSongSmartAccount__userEpochBalancesResultValue0Struct> {
    let result = super.tryCall(
      "userEpochBalances",
      "userEpochBalances(address):((uint256,uint256))",
      [ethereum.Value.fromAddress(user)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<WrappedSongSmartAccount__userEpochBalancesResultValue0Struct>(
        value[0].toTuple(),
      ),
    );
  }

  wrappedSongTokenId(): BigInt {
    let result = super.call(
      "wrappedSongTokenId",
      "wrappedSongTokenId():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_wrappedSongTokenId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "wrappedSongTokenId",
      "wrappedSongTokenId():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  wsTokenManagement(): Address {
    let result = super.call(
      "wsTokenManagement",
      "wsTokenManagement():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_wsTokenManagement(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "wsTokenManagement",
      "wsTokenManagement():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _protocolModuleAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ClaimETHEarningsCall extends ethereum.Call {
  get inputs(): ClaimETHEarningsCall__Inputs {
    return new ClaimETHEarningsCall__Inputs(this);
  }

  get outputs(): ClaimETHEarningsCall__Outputs {
    return new ClaimETHEarningsCall__Outputs(this);
  }
}

export class ClaimETHEarningsCall__Inputs {
  _call: ClaimETHEarningsCall;

  constructor(call: ClaimETHEarningsCall) {
    this._call = call;
  }

  get maxEpochs(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ClaimETHEarningsCall__Outputs {
  _call: ClaimETHEarningsCall;

  constructor(call: ClaimETHEarningsCall) {
    this._call = call;
  }
}

export class ClaimStablecoinEarningsCall extends ethereum.Call {
  get inputs(): ClaimStablecoinEarningsCall__Inputs {
    return new ClaimStablecoinEarningsCall__Inputs(this);
  }

  get outputs(): ClaimStablecoinEarningsCall__Outputs {
    return new ClaimStablecoinEarningsCall__Outputs(this);
  }
}

export class ClaimStablecoinEarningsCall__Inputs {
  _call: ClaimStablecoinEarningsCall;

  constructor(call: ClaimStablecoinEarningsCall) {
    this._call = call;
  }

  get maxEpochs(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ClaimStablecoinEarningsCall__Outputs {
  _call: ClaimStablecoinEarningsCall;

  constructor(call: ClaimStablecoinEarningsCall) {
    this._call = call;
  }
}

export class CreateBuyoutTokenCall extends ethereum.Call {
  get inputs(): CreateBuyoutTokenCall__Inputs {
    return new CreateBuyoutTokenCall__Inputs(this);
  }

  get outputs(): CreateBuyoutTokenCall__Outputs {
    return new CreateBuyoutTokenCall__Outputs(this);
  }
}

export class CreateBuyoutTokenCall__Inputs {
  _call: CreateBuyoutTokenCall;

  constructor(call: CreateBuyoutTokenCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get recipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class CreateBuyoutTokenCall__Outputs {
  _call: CreateBuyoutTokenCall;

  constructor(call: CreateBuyoutTokenCall) {
    this._call = call;
  }
}

export class CreateETHDistributionEpochCall extends ethereum.Call {
  get inputs(): CreateETHDistributionEpochCall__Inputs {
    return new CreateETHDistributionEpochCall__Inputs(this);
  }

  get outputs(): CreateETHDistributionEpochCall__Outputs {
    return new CreateETHDistributionEpochCall__Outputs(this);
  }
}

export class CreateETHDistributionEpochCall__Inputs {
  _call: CreateETHDistributionEpochCall;

  constructor(call: CreateETHDistributionEpochCall) {
    this._call = call;
  }
}

export class CreateETHDistributionEpochCall__Outputs {
  _call: CreateETHDistributionEpochCall;

  constructor(call: CreateETHDistributionEpochCall) {
    this._call = call;
  }
}

export class CreateLegalContractCall extends ethereum.Call {
  get inputs(): CreateLegalContractCall__Inputs {
    return new CreateLegalContractCall__Inputs(this);
  }

  get outputs(): CreateLegalContractCall__Outputs {
    return new CreateLegalContractCall__Outputs(this);
  }
}

export class CreateLegalContractCall__Inputs {
  _call: CreateLegalContractCall;

  constructor(call: CreateLegalContractCall) {
    this._call = call;
  }

  get contractURI(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class CreateLegalContractCall__Outputs {
  _call: CreateLegalContractCall;

  constructor(call: CreateLegalContractCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class CreateSongSharesCall extends ethereum.Call {
  get inputs(): CreateSongSharesCall__Inputs {
    return new CreateSongSharesCall__Inputs(this);
  }

  get outputs(): CreateSongSharesCall__Outputs {
    return new CreateSongSharesCall__Outputs(this);
  }
}

export class CreateSongSharesCall__Inputs {
  _call: CreateSongSharesCall;

  constructor(call: CreateSongSharesCall) {
    this._call = call;
  }

  get sharesAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CreateSongSharesCall__Outputs {
  _call: CreateSongSharesCall;

  constructor(call: CreateSongSharesCall) {
    this._call = call;
  }
}

export class CreateStablecoinDistributionEpochCall extends ethereum.Call {
  get inputs(): CreateStablecoinDistributionEpochCall__Inputs {
    return new CreateStablecoinDistributionEpochCall__Inputs(this);
  }

  get outputs(): CreateStablecoinDistributionEpochCall__Outputs {
    return new CreateStablecoinDistributionEpochCall__Outputs(this);
  }
}

export class CreateStablecoinDistributionEpochCall__Inputs {
  _call: CreateStablecoinDistributionEpochCall;

  constructor(call: CreateStablecoinDistributionEpochCall) {
    this._call = call;
  }
}

export class CreateStablecoinDistributionEpochCall__Outputs {
  _call: CreateStablecoinDistributionEpochCall;

  constructor(call: CreateStablecoinDistributionEpochCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _stablecoinAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _owner(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class MigrateWrappedSongCall extends ethereum.Call {
  get inputs(): MigrateWrappedSongCall__Inputs {
    return new MigrateWrappedSongCall__Inputs(this);
  }

  get outputs(): MigrateWrappedSongCall__Outputs {
    return new MigrateWrappedSongCall__Outputs(this);
  }
}

export class MigrateWrappedSongCall__Inputs {
  _call: MigrateWrappedSongCall;

  constructor(call: MigrateWrappedSongCall) {
    this._call = call;
  }

  get newMetadataAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get newWrappedSongAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class MigrateWrappedSongCall__Outputs {
  _call: MigrateWrappedSongCall;

  constructor(call: MigrateWrappedSongCall) {
    this._call = call;
  }
}

export class ReceiveERC20Call extends ethereum.Call {
  get inputs(): ReceiveERC20Call__Inputs {
    return new ReceiveERC20Call__Inputs(this);
  }

  get outputs(): ReceiveERC20Call__Outputs {
    return new ReceiveERC20Call__Outputs(this);
  }
}

export class ReceiveERC20Call__Inputs {
  _call: ReceiveERC20Call;

  constructor(call: ReceiveERC20Call) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ReceiveERC20Call__Outputs {
  _call: ReceiveERC20Call;

  constructor(call: ReceiveERC20Call) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetWSTokenManagementCall extends ethereum.Call {
  get inputs(): SetWSTokenManagementCall__Inputs {
    return new SetWSTokenManagementCall__Inputs(this);
  }

  get outputs(): SetWSTokenManagementCall__Outputs {
    return new SetWSTokenManagementCall__Outputs(this);
  }
}

export class SetWSTokenManagementCall__Inputs {
  _call: SetWSTokenManagementCall;

  constructor(call: SetWSTokenManagementCall) {
    this._call = call;
  }

  get _wsTokenManagement(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetWSTokenManagementCall__Outputs {
  _call: SetWSTokenManagementCall;

  constructor(call: SetWSTokenManagementCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
