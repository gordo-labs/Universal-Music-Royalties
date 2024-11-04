/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IMarketPlace,
  IMarketPlaceInterface,
} from "../../../../contracts/protocol/Interfaces/IMarketPlace";

const _abi = [
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
    name: "sales",
    outputs: [
      {
        components: [
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
        ],
        internalType: "struct IMarketPlace.Sale",
        name: "",
        type: "tuple",
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
] as const;

export class IMarketPlace__factory {
  static readonly abi = _abi;
  static createInterface(): IMarketPlaceInterface {
    return new Interface(_abi) as IMarketPlaceInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IMarketPlace {
    return new Contract(address, _abi, runner) as unknown as IMarketPlace;
  }
}