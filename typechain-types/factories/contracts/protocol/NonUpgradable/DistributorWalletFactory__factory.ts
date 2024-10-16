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
  DistributorWalletFactory,
  DistributorWalletFactoryInterface,
} from "../../../../contracts/protocol/NonUpgradable/DistributorWalletFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "initialOwner",
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
        name: "distributor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    name: "DistributorWalletCreated",
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
        name: "wrappedSong",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "distributor",
        type: "address",
      },
    ],
    name: "WrappedSongReleased",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    name: "checkIsDistributorWallet",
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
        name: "_stablecoin",
        type: "address",
      },
      {
        internalType: "address",
        name: "_protocolModule",
        type: "address",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "createDistributorWallet",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
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
    name: "distributorWallets",
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
    inputs: [
      {
        internalType: "address",
        name: "ownerOfWallets",
        type: "address",
      },
    ],
    name: "getDistributorWallets",
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
        name: "wrappedSong",
        type: "address",
      },
    ],
    name: "getWrappedSongDistributor",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isDistributorWallet",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "",
        type: "address",
      },
    ],
    name: "wrappedSongToDistributor",
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
  "0x6080346100bb57601f611d8638819003918201601f19168301916001600160401b038311848410176100c0578084926020946040528339810103126100bb57516001600160a01b0390818116908190036100bb5780156100a257600080546001600160a01b03198116831782556040519316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a3611caf90816100d78239f35b604051631e4fbdf760e01b815260006004820152602490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe60806040818152600436101561001457600080fd5b600091823560e01c9081632cd6c9a61461049c575080633aa690e714610462578063416679861461040a578063715018a6146103b05780638da5cb5b14610389578063a6be34961461034c578063d42fe2311461034c578063d677db97146101fc578063f2fde38b146101775763f4ae53381461009057600080fd5b346101735760209182600319360112610170576001600160a01b03806100b46104d8565b16825260019384815283832092845192828481875491828152019081978552828520908a865b8281106101595750505050859003601f01601f1916850196905067ffffffffffffffff871185881017610145579286949184868a9652828701938388525180945286019693905b83821061012e5786880387f35b845181168852968201969382019390850190610121565b634e487b7160e01b83526041600452602483fd5b8354871685528895909401939281019281016100da565b80fd5b5080fd5b5034610173576020366003190112610173576101916104d8565b610199610521565b6001600160a01b039081169182156101e5575082546001600160a01b0319811683178455167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b51631e4fbdf760e01b815260048101849052602490fd5b5034610173576060366003190112610173576102166104d8565b6001600160a01b03919060243583811690819003610348576044359184831680930361034457610244610521565b83519161172c918284019284841067ffffffffffffffff85111761033057918760609492869461054e86391682526020820152848682015203019085f080156103265783169281855260016020528285208054906801000000000000000082101561031257916102be828694600160209a950181556104f3565b819291549060031b9188831b921b19161790558481526003865220600160ff198254161790557f6244b9834fa28974bc246e3225f1430fb24f804772e1ae5b62721e0bbfb3fb94848351858152a251908152f35b634e487b7160e01b87526041600452602487fd5b82513d86823e3d90fd5b634e487b7160e01b89526041600452602489fd5b8580fd5b8480fd5b50346101735760203660031901126101735760209160ff9082906001600160a01b036103766104d8565b1681526003855220541690519015158152f35b5034610173578160031936011261017357905490516001600160a01b039091168152602090f35b82346101705780600319360112610170576103c9610521565b80546001600160a01b03198116825581906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b50346101735780600319360112610173576104236104d8565b6001600160a01b0390811683526001602052818320805460243594908510156101705750602093610453916104f3565b92905490519260031b1c168152f35b5034610173576020366003190112610173576020916001600160a01b039082908261048b6104d8565b168152600285522054169051908152f35b919050346104d45760203660031901126104d4576020926001600160a01b039190826104c66104d8565b168152600285522054168152f35b8280fd5b600435906001600160a01b03821682036104ee57565b600080fd5b805482101561050b5760005260206000200190600090565b634e487b7160e01b600052603260045260246000fd5b6000546001600160a01b0316330361053557565b60405163118cdaa760e01b8152336004820152602490fdfe608034620000fa57601f6200172c38819003918201601f19168301916001600160401b03831184841017620000ff57808492606094604052833981010312620000fa576200004d8162000115565b9060406200005e6020830162000115565b916001600160a01b0391829162000076910162000115565b16918215620000e157816000549460018060a01b03199480868816176000558260405197167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a3168360015416176001551690600254161760025561160190816200012b8239f35b604051631e4fbdf760e01b815260006004820152602490fd5b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b0382168203620000fa5756fe60406080815260048036101561001c575b5050361561001a57005b005b600091823560e01c80631188029f14611124578063187de53b14610f635780633a3f80ca14610f2b578063411f1bf414610d8657806347e3521c14610c8d5780634994790714610c795780634a2dc19414610b4c578381634b08ec5014610aa9575080635c42e66714610a805780636090b30e14610a61578063715018a614610a075780638da5cb5b146109df578381639205fafe14610812575080639a7c31ec146107605780639ef40ffc146105c6578063b0c70e2714610369578063b7c9d4091461027a578063e9cbd82214610251578063f2fde38b146101bc5763f5260369146101095750610010565b8290346101ab5760203660031901126101ab576101246111b1565b9061012d6111fd565b6002546001600160a01b039081169290833b156101b85760248592838551968794859363f526036960e01b855216809a8401525af19081156101af5750610197575b50807f9b8b9fd151330b7d89319c88adc1ba5b0e63288a430bac1173b0af4570586b6391a280f35b6101a09061124c565b6101ab57813861016f565b5080fd5b513d84823e3d90fd5b8480fd5b50903461024d57602036600319011261024d576101d76111b1565b906101e06111fd565b6001600160a01b03918216928315610237575050600054826bffffffffffffffffffffffff60a01b821617600055167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a380f35b51631e4fbdf760e01b8152908101849052602490fd5b8280fd5b8382346101ab57816003193601126101ab5760015490516001600160a01b039091168152602090f35b50903461024d57602080600319360112610365576001600160a01b038061029f6111b1565b1692838652600383528284604487892054946102bc8615156113f3565b828a526003845289898120556001541693898951958694859363a9059cbb60e01b85528401528760248401525af190811561035b577fb6256fb088328fbaea547db02cfd4d9293bd06faa6226a32cbe19ae58efde89494959161032691889161032e575b506112cc565b51908152a280f35b61034e9150853d8711610354575b6103468183611292565b8101906112b4565b38610320565b503d61033c565b85513d88823e3d90fd5b8380fd5b508290346101ab576020908160031936011261024d576103876111b1565b906103906111fd565b6103df82825161039f81611276565b602a81527f537461727420436f6e6669726d696e672072656c6561736520666f72207772618682015269383832b21039b7b7339d60b11b84820152611519565b60025481516363df2f1560e11b81526001600160a01b0384811688830181905295909492851692918181602481875afa9081156105bc57889161058f575b5085309116036105335790610471917f436f6e6669726d696e672072656c6561736520666f722077726170706564207385519161045983611276565b602483528201526337b7339d60e11b85820152611519565b803b156101b85790848092602483518095819363b0c70e2760e01b8352898c8401525af190811561052a5750908491610516575b5050835468010000000000000000811015610503576001810185556104c990611164565b819291549060031b9184831b921b19161790557fe1649799fd93d14e82ccab2710a96c6b05af2496c30f0c9401e159f568813efd8280a280f35b634e487b7160e01b845260418552602484fd5b61051f9061124c565b61024d5782856104a5565b513d86823e3d90fd5b8760849185519162461bcd60e51b8352820152603160248201527f4e6f74207468652070656e64696e67206469737472696275746f7220666f722060448201527074686973207772617070656420736f6e6760781b6064820152fd5b6105af9150823d84116105b5575b6105a78183611292565b810190611437565b8961041d565b503d61059d565b85513d8a823e3d90fd5b508290346101ab5760208060031936011261024d5783356001600160a01b0381811693918490036101b8578151638da5cb5b60e01b815283818881885afa908115610756578691610739575b501633036106eb578284526003825280842054906106318215156113f3565b8385526003835284818120558480808085335af1953d156106be573d9067ffffffffffffffff82116106a957507fb6256fb088328fbaea547db02cfd4d9293bd06faa6226a32cbe19ae58efde8949495966103269183519061069c87601f19601f8401160183611292565b815288863d92013e6112cc565b604190634e487b7160e01b6000525260246000fd5b506103267fb6256fb088328fbaea547db02cfd4d9293bd06faa6226a32cbe19ae58efde8949495966112cc565b5162461bcd60e51b815280850191909152602260248201527f4f6e6c79207772617070656420736f6e67206f776e65722063616e2072656465604482015261656d60f01b6064820152608490fd5b6107509150843d86116105b5576105a78183611292565b87610612565b83513d88823e3d90fd5b5090602036600319011261024d576107766111b1565b9034156107e157506001600160a01b031682526003602052808220805461079e903490611229565b9055516000805160206115ac8339815191523391806107db3482608091815260406020820152600360408201526208aa8960eb1b60608201520190565b0390a280f35b606490602084519162461bcd60e51b8352820152600b60248201526a139bc8115512081cd95b9d60aa1b6044820152fd5b808484346109db57602091826003193601126109d6576108306111b1565b926108396111fd565b6002548351623684d160e81b80825290956001600160a01b0393928416919083888781865afa9788156109875789986109ae575b508385602481938a51948593849263dac73c9960e01b8452169c8d8c840152165afa90811561098757906108a9918a91610991575b5015611456565b8551633aa690e760e01b81528581018890528381602481865afa908115610987578492916108e2918b9161096a575b50861630146114bb565b8587518094819382525afa918215610960578792610943575b50501692833b156101b857602485928385519687948593634902fd7f60e11b85528401525af19081156101af57506109305750f35b6109399061124c565b6109405780f35b80fd5b6109599250803d106105b5576105a78183611292565b87806108fb565b85513d89823e3d90fd5b6109819150843d86116105b5576105a78183611292565b8c6108d8565b87513d8b823e3d90fd5b6109a89150853d8711610354576103468183611292565b8b6108a2565b858092995060246109cc8793843d86116105b5576105a78183611292565b9a9350505061086d565b505050fd5b5050fd5b8382346101ab57816003193601126101ab57905490516001600160a01b039091168152602090f35b8334610940578060031936011261094057610a206111fd565b600080546001600160a01b0319811682556001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b8382346101ab57816003193601126101ab576020906005549051908152f35b8382346101ab57816003193601126101ab5760025490516001600160a01b039091168152602090f35b919050346101ab5760203660031901126101ab57610ac56111b1565b90610ace6111fd565b6002546001600160a01b039081169290833b156101b8576024859283855196879485936304b08ec560e41b855216809a8401525af19081156101af5750610b38575b50807f96e9f71e351da2f355723015d74e0a4b6a13763fa188e610b27da4c5aca898c991a280f35b610b419061124c565b6101ab578138610b10565b50908160031936011261024d5767ffffffffffffffff81358181116101b857610b7890369084016111cc565b919092602435918211610c7557610b91913691016111cc565b610b9c9391936111fd565b610ba781841461130a565b85805b828210610c5057610bbd91503414611375565b855b838110610c03578686516000805160206115ac8339815191523391806107db3482608091815260406020820152600360408201526208aa8960eb1b60608201520190565b80610c12610c4b928488611365565b356001600160a01b03610c2e610c29848989611365565b6113df565b1689526003602052610c44888a20918254611229565b9055611356565b610bbf565b610c69610c6f91610c6284868a611365565b3590611229565b91611356565b90610baa565b8580fd5b833461094057806003193601126109405780f35b50903461024d578160031936011261024d57610cf891610cab6111b1565b60015482516323b872dd60e01b8152339481019485523060208681019190915260243560408701819052919691956001600160a01b0394939192889286169183918b918391606090910190565b03925af1948515610756576000805160206115ac8339815191529495610d24918891610d6e57506112cc565b1684526003602052808420610d3a848254611229565b905551806107db339482608091815260406020820152600a60408201526929ba30b13632b1b7b4b760b11b60608201520190565b61034e915060203d8111610354576103468183611292565b503461024d57606036600319011261024d5767ffffffffffffffff82358181116101b857610db790369085016111cc565b91602435908111610c7557610dd290949294369084016111cc565b9092604435958692610de26111fd565b610ded81831461130a565b88895b828110610f09575084610e039114611375565b60015487516323b872dd60e01b8152339481019485523060208681019190915260408601969096526001600160a01b039490918691839187169082908e90829060600103925af1908115610eff5790610e62918b91610ee857506112cc565b885b828110610eaf5789896000805160206115ac8339815191528a51806107db339482608091815260406020820152600a60408201526929ba30b13632b1b7b4b760b11b60608201520190565b80610ebe610ee392848a611365565b3585610ece610c2984888c611365565b168c5260038752610c448a8d20918254611229565b610e64565b61034e9150863d8811610354576103468183611292565b88513d8c823e3d90fd5b9192939450610c69610f2091610c6284868b611365565b908894939291610df0565b8382346101ab5760203660031901126101ab5760209181906001600160a01b03610f536111b1565b1681526003845220549051908152f35b50903461024d57602091826003193601126103655783610f816111b1565b93610f8a6111fd565b6002548351623684d160e81b8082526001600160a01b03939284169183818981865afa90811561111a5785899a8692899a9b99946110f8575b50602490828c51958694859363dac73c9960e01b855216809c840152165afa9081156110d15790610ffb9188916110db575015611456565b8651633aa690e760e01b81528881018690528381602481865afa9081156110d1578492916110339189916110b45750861630146114bb565b8888518094819382525afa9182156110aa57859261108d575b50501693843b1561024d57602490838551968794859363187de53b60e01b85528401525af19081156101af5750611081575080f35b61108a9061124c565b80f35b6110a39250803d106105b5576105a78183611292565b388061104c565b86513d87823e3d90fd5b6110cb9150843d86116105b5576105a78183611292565b386108d8565b88513d89823e3d90fd5b6110f29150853d8711610354576103468183611292565b386108a2565b602491945061111390843d86116105b5576105a78183611292565b9390610fc3565b87513d88823e3d90fd5b5082346109405760203660031901126109405782359254831015610940575061114e602092611164565b905491519160018060a01b039160031b1c168152f35b60045481101561119b5760046000527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b0190600090565b634e487b7160e01b600052603260045260246000fd5b600435906001600160a01b03821682036111c757565b600080fd5b9181601f840112156111c75782359167ffffffffffffffff83116111c7576020808501948460051b0101116111c757565b6000546001600160a01b0316330361121157565b60405163118cdaa760e01b8152336004820152602490fd5b9190820180921161123657565b634e487b7160e01b600052601160045260246000fd5b67ffffffffffffffff811161126057604052565b634e487b7160e01b600052604160045260246000fd5b6060810190811067ffffffffffffffff82111761126057604052565b90601f8019910116810190811067ffffffffffffffff82111761126057604052565b908160209103126111c7575180151581036111c75790565b156112d357565b60405162461bcd60e51b815260206004820152600f60248201526e151c985b9cd9995c8819985a5b1959608a1b6044820152606490fd5b1561131157565b60405162461bcd60e51b815260206004820152601860248201527f4d69736d61746368656420696e707574206c656e6774687300000000000000006044820152606490fd5b60001981146112365760010190565b919081101561119b5760051b0190565b1561137c57565b60405162461bcd60e51b815260206004820152603560248201527f546f74616c20616d6f756e7420646f6573206e6f74206d617463682073756d206044820152746f6620696e646976696475616c20616d6f756e747360581b6064820152608490fd5b356001600160a01b03811681036111c75790565b156113fa57565b60405162461bcd60e51b81526020600482015260156024820152744e6f206561726e696e677320746f2072656465656d60581b6044820152606490fd5b908160209103126111c757516001600160a01b03811681036111c75790565b1561145d57565b60405162461bcd60e51b815260206004820152603060248201527f4e6f2070656e64696e67206d657461646174612075706461746520666f72207460448201526f686973207772617070656420736f6e6760801b6064820152608490fd5b156114c257565b60405162461bcd60e51b815260206004820152602960248201527f4e6f7420746865206469737472696275746f7220666f722074686973207772616044820152687070656420736f6e6760b81b6064820152608490fd5b604051906020928383019363319af33360e01b85526040602485015282519283606486015260005b8481106115975750505091611584608482846000979596888481998501015260018060a01b03166044830152601f80199101168101036064810184520182611292565b51906a636f6e736f6c652e6c6f675afa50565b81810183015186820160840152820161154156fe53bd392522b272902b85d06641a5c298f18e160fffff1e84a020e622f7922810a264697066735822122074ead84c7c4c0509360bb0c117ae3e831887c0c869bbbcbc80a53196e5f7cecd64736f6c63430008140033a2646970667358221220c7c78ddae1ddc41c63af28abae08325fbba67b33f694a60ef383276ddba6f8d764736f6c63430008140033";

type DistributorWalletFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DistributorWalletFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DistributorWalletFactory__factory extends ContractFactory {
  constructor(...args: DistributorWalletFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    initialOwner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(initialOwner, overrides || {});
  }
  override deploy(
    initialOwner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(initialOwner, overrides || {}) as Promise<
      DistributorWalletFactory & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): DistributorWalletFactory__factory {
    return super.connect(runner) as DistributorWalletFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DistributorWalletFactoryInterface {
    return new Interface(_abi) as DistributorWalletFactoryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): DistributorWalletFactory {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as DistributorWalletFactory;
  }
}
