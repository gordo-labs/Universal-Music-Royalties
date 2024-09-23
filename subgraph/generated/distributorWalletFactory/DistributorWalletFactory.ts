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

export class DistributorWalletCreated extends ethereum.Event {
  get params(): DistributorWalletCreated__Params {
    return new DistributorWalletCreated__Params(this);
  }
}

export class DistributorWalletCreated__Params {
  _event: DistributorWalletCreated;

  constructor(event: DistributorWalletCreated) {
    this._event = event;
  }

  get distributor(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get wallet(): Address {
    return this._event.parameters[1].value.toAddress();
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

export class WrappedSongReleased extends ethereum.Event {
  get params(): WrappedSongReleased__Params {
    return new WrappedSongReleased__Params(this);
  }
}

export class WrappedSongReleased__Params {
  _event: WrappedSongReleased;

  constructor(event: WrappedSongReleased) {
    this._event = event;
  }

  get wrappedSong(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get distributor(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class DistributorWalletFactory extends ethereum.SmartContract {
  static bind(address: Address): DistributorWalletFactory {
    return new DistributorWalletFactory("DistributorWalletFactory", address);
  }

  checkIsDistributorWallet(wallet: Address): boolean {
    let result = super.call(
      "checkIsDistributorWallet",
      "checkIsDistributorWallet(address):(bool)",
      [ethereum.Value.fromAddress(wallet)],
    );

    return result[0].toBoolean();
  }

  try_checkIsDistributorWallet(wallet: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "checkIsDistributorWallet",
      "checkIsDistributorWallet(address):(bool)",
      [ethereum.Value.fromAddress(wallet)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  createDistributorWallet(
    _stablecoin: Address,
    _protocolModule: Address,
    _owner: Address,
  ): Address {
    let result = super.call(
      "createDistributorWallet",
      "createDistributorWallet(address,address,address):(address)",
      [
        ethereum.Value.fromAddress(_stablecoin),
        ethereum.Value.fromAddress(_protocolModule),
        ethereum.Value.fromAddress(_owner),
      ],
    );

    return result[0].toAddress();
  }

  try_createDistributorWallet(
    _stablecoin: Address,
    _protocolModule: Address,
    _owner: Address,
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createDistributorWallet",
      "createDistributorWallet(address,address,address):(address)",
      [
        ethereum.Value.fromAddress(_stablecoin),
        ethereum.Value.fromAddress(_protocolModule),
        ethereum.Value.fromAddress(_owner),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  distributorWallets(param0: Address, param1: BigInt): Address {
    let result = super.call(
      "distributorWallets",
      "distributorWallets(address,uint256):(address)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1),
      ],
    );

    return result[0].toAddress();
  }

  try_distributorWallets(
    param0: Address,
    param1: BigInt,
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "distributorWallets",
      "distributorWallets(address,uint256):(address)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getDistributorWallets(ownerOfWallets: Address): Array<Address> {
    let result = super.call(
      "getDistributorWallets",
      "getDistributorWallets(address):(address[])",
      [ethereum.Value.fromAddress(ownerOfWallets)],
    );

    return result[0].toAddressArray();
  }

  try_getDistributorWallets(
    ownerOfWallets: Address,
  ): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getDistributorWallets",
      "getDistributorWallets(address):(address[])",
      [ethereum.Value.fromAddress(ownerOfWallets)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getWrappedSongDistributor(wrappedSong: Address): Address {
    let result = super.call(
      "getWrappedSongDistributor",
      "getWrappedSongDistributor(address):(address)",
      [ethereum.Value.fromAddress(wrappedSong)],
    );

    return result[0].toAddress();
  }

  try_getWrappedSongDistributor(
    wrappedSong: Address,
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getWrappedSongDistributor",
      "getWrappedSongDistributor(address):(address)",
      [ethereum.Value.fromAddress(wrappedSong)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isDistributorWallet(param0: Address): boolean {
    let result = super.call(
      "isDistributorWallet",
      "isDistributorWallet(address):(bool)",
      [ethereum.Value.fromAddress(param0)],
    );

    return result[0].toBoolean();
  }

  try_isDistributorWallet(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isDistributorWallet",
      "isDistributorWallet(address):(bool)",
      [ethereum.Value.fromAddress(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
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

  wrappedSongToDistributor(param0: Address): Address {
    let result = super.call(
      "wrappedSongToDistributor",
      "wrappedSongToDistributor(address):(address)",
      [ethereum.Value.fromAddress(param0)],
    );

    return result[0].toAddress();
  }

  try_wrappedSongToDistributor(param0: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "wrappedSongToDistributor",
      "wrappedSongToDistributor(address):(address)",
      [ethereum.Value.fromAddress(param0)],
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

  get initialOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateDistributorWalletCall extends ethereum.Call {
  get inputs(): CreateDistributorWalletCall__Inputs {
    return new CreateDistributorWalletCall__Inputs(this);
  }

  get outputs(): CreateDistributorWalletCall__Outputs {
    return new CreateDistributorWalletCall__Outputs(this);
  }
}

export class CreateDistributorWalletCall__Inputs {
  _call: CreateDistributorWalletCall;

  constructor(call: CreateDistributorWalletCall) {
    this._call = call;
  }

  get _stablecoin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _protocolModule(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _owner(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class CreateDistributorWalletCall__Outputs {
  _call: CreateDistributorWalletCall;

  constructor(call: CreateDistributorWalletCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
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
