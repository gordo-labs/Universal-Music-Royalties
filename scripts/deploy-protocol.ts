import fs from 'fs';
import { artifacts, ethers, network } from 'hardhat';
import path from 'path';

const abisDirectory = path.join(__dirname, '..', '..', 'songs-app', 'src', 'contracts');
const localAbisDirectory = path.join(__dirname, '..', 'abis');
const networkName = network.name;
const addressesFile = path.join(abisDirectory, `protocolContractAddresses-${networkName}.json`);
const addressesFile2 = path.join(localAbisDirectory, `protocolContractAddresses-${networkName}.json`);

let contractAddresses: any = {};

async function getTokenAddress() {
  if (network.name === 'hardhat' || network.name === 'localhost') {
    console.log('Deploying MockToken...');
    const MockToken = await ethers.getContractFactory('MockToken');
    const mockToken = await MockToken.deploy('Mock USDC', 'mUSDC');
    await mockToken.waitForDeployment();
    const mockTokenAddress = await mockToken.getAddress();
    console.log('MockToken deployed to:', mockTokenAddress);
    
    await saveAbi('MockToken', mockTokenAddress);
    contractAddresses['USDC'] = mockTokenAddress;
    
    return mockTokenAddress;
  }
  
  if (network.name === 'base') {
    const usdcAddress = '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913'; // Base mainnet USDC
    
    // Verify the token contract exists
    const code = await ethers.provider.getCode(usdcAddress);
    if (code === '0x') {
      throw new Error('USDC token contract not found at specified address');
    }
    
    contractAddresses['USDC'] = usdcAddress;
    return usdcAddress;
  }

  if (network.name === 'baseSepolia') {
    const usdcAddress = '0x5deac602762362fe5f135fa5904351916053cf70'; // Base Sepolia USDC
    
    // Verify the token contract exists
    const code = await ethers.provider.getCode(usdcAddress);
    if (code === '0x') {
      throw new Error('USDC token contract not found at specified address');
    }
    
    contractAddresses['USDC'] = usdcAddress;
    return usdcAddress;
  }
  
  throw new Error(`No token address configured for network: ${network.name}`);
}

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log('Account address:', deployer.address);
  console.log('Account balance:', (await ethers.provider.getBalance(deployer.address)).toString());

  if (!fs.existsSync(abisDirectory)) {
    fs.mkdirSync(abisDirectory, { recursive: true });
  }
  if (!fs.existsSync(localAbisDirectory)) {
    fs.mkdirSync(localAbisDirectory, { recursive: true });
  }


  /******************************************************************************
   *                                                                             *
   *                           PROTOCOL REGISTRY CONTRACT                           *
   *                                                                             *
   ******************************************************************************/

  console.log('Deploying FeesModule...');
  const FeesModule = await ethers.getContractFactory('FeesModule');
  const feesModule = await FeesModule.deploy();
  await feesModule.waitForDeployment();
  console.log('FeesModule deployed to:', await feesModule.getAddress());
  await saveAbi('FeesModule', await feesModule.getAddress());

  console.log('Deploying ReleaseModule...');
  const ReleaseModule = await ethers.getContractFactory('ReleaseModule');
  const releaseModule = await ReleaseModule.deploy();
  await releaseModule.waitForDeployment();
  console.log('ReleaseModule deployed to:', await releaseModule.getAddress());
  await saveAbi('ReleaseModule', await releaseModule.getAddress());

  console.log('Deploying IdentityModule...');
  const IdentityModule = await ethers.getContractFactory('IdentityModule');
  const identityModule = await IdentityModule.deploy();
  await identityModule.waitForDeployment();
  console.log('IdentityModule deployed to:', await identityModule.getAddress());
  await saveAbi('IdentityModule', await identityModule.getAddress());
  
  await identityModule.initialize(await releaseModule.getAddress());

  console.log('Deploying RegistryModule...');
  const RegistryModule = await ethers.getContractFactory('RegistryModule');
  const registryModule = await RegistryModule.deploy();
  await registryModule.waitForDeployment();
  console.log('RegistryModule deployed to:', await registryModule.getAddress());
  await saveAbi('RegistryModule', await registryModule.getAddress());


  /******************************************************************************
   *                                                                             *
   *                           PROTOCOL CORE CONTRACTS                           *
   *                                                                             *
   ******************************************************************************/

  console.log('Deploying WhitelistingManager...');
  const WhitelistingManager = await ethers.getContractFactory('WhitelistingManager');
  const whitelistingManager = await WhitelistingManager.deploy(deployer.address);
  await whitelistingManager.waitForDeployment();
  console.log('WhitelistingManager deployed to:', await whitelistingManager.getAddress());
  await saveAbi('WhitelistingManager', await whitelistingManager.getAddress());

  console.log('Deploying DistributorWalletFactory...');
  const DistributorWalletFactory = await ethers.getContractFactory('DistributorWalletFactory');
  const distributorWalletFactory = await DistributorWalletFactory.deploy(deployer.address);
  await distributorWalletFactory.waitForDeployment();
  console.log('DistributorWalletFactory deployed to:', await distributorWalletFactory.getAddress());
  await saveAbi('DistributorWalletFactory', await distributorWalletFactory.getAddress());

  console.log('Deploying ERC20Whitelist...');
  const ERC20Whitelist = await ethers.getContractFactory('ERC20Whitelist');
  const erc20Whitelist = await ERC20Whitelist.deploy(deployer.address);
  await erc20Whitelist.waitForDeployment();
  console.log('ERC20Whitelist deployed to:', await erc20Whitelist.getAddress());
  await saveAbi('ERC20Whitelist', await erc20Whitelist.getAddress());

  /******************************************************************************
   *                                                                             *
   *                           METADATA CONTRACTS                                *
   *                                                                             *
   ******************************************************************************/

  console.log('Deploying MetadataRenderer...');
  const MetadataRenderer = await ethers.getContractFactory('MetadataRenderer');
  const metadataRenderer = await MetadataRenderer.deploy();
  await metadataRenderer.waitForDeployment();
  console.log('MetadataRenderer deployed to:', await metadataRenderer.getAddress());
  await saveAbi('MetadataRenderer', await metadataRenderer.getAddress());

  console.log('Deploying MetadataModule...');
  const MetadataModule = await ethers.getContractFactory('MetadataModule');
  const metadataModule = await MetadataModule.deploy(deployer.address);
  await metadataModule.waitForDeployment();
  console.log('MetadataModule deployed to:', await metadataModule.getAddress());
  await saveAbi('MetadataModule', await metadataModule.getAddress());

  console.log('Deploying LegalContractMetadata...');
  const LegalContractMetadata = await ethers.getContractFactory('LegalContractMetadata');
  const legalContractMetadata = await LegalContractMetadata.deploy();
  await legalContractMetadata.waitForDeployment();
  console.log('LegalContractMetadata deployed to:', await legalContractMetadata.getAddress());
  await saveAbi('LegalContractMetadata', await legalContractMetadata.getAddress());

  /******************************************************************************
   *                                                                             *
   *                           PROTOCOL MODULE                                   *
   *                                                                             *
   ******************************************************************************/

  console.log('Deploying ProtocolModule...');
  const ProtocolModule = await ethers.getContractFactory('ProtocolModule');
  const protocolModule = await ProtocolModule.connect(deployer).deploy(
    await distributorWalletFactory.getAddress(),
    await whitelistingManager.getAddress(),
    await erc20Whitelist.getAddress(),
    await metadataModule.getAddress(),
    await legalContractMetadata.getAddress()
  );
  await protocolModule.waitForDeployment();
  console.log('ProtocolModule deployed to:', await protocolModule.getAddress());
  await saveAbi('ProtocolModule', await protocolModule.getAddress());
  
  /******************************************************************************
   *                                                                             *
   *                           MARKETPLACE CONTRACTS                             *
   *                                                                             *
   ******************************************************************************/

  console.log('Deploying SongSharesMarketPlace...');
  const SongSharesMarketPlace = await ethers.getContractFactory('SongSharesMarketPlace');
  const songSharesMarketPlace = await SongSharesMarketPlace.connect(deployer).deploy(
    await protocolModule.getAddress()
  );
  await songSharesMarketPlace.waitForDeployment();
  console.log('SongSharesMarketPlace deployed to:', await songSharesMarketPlace.getAddress());
  await saveAbi('SongSharesMarketPlace', await songSharesMarketPlace.getAddress());

  console.log('Deploying BuyoutTokenMarketPlace...');
  const BuyoutTokenMarketPlace = await ethers.getContractFactory('BuyoutTokenMarketPlace');
  const buyoutTokenMarketPlace = await BuyoutTokenMarketPlace.connect(deployer).deploy(
    await protocolModule.getAddress()
  );
  await buyoutTokenMarketPlace.waitForDeployment();
  console.log('BuyoutTokenMarketPlace deployed to:', await buyoutTokenMarketPlace.getAddress());
  await saveAbi('BuyoutTokenMarketPlace', await buyoutTokenMarketPlace.getAddress());

  /******************************************************************************
   *                                                                             *
   *                           TEMPLATE CONTRACTS                                *
   *                                                                             *
   ******************************************************************************/

  console.log('Deploying Template Contracts...');
  
  // Deploy WrappedSongSmartAccount template with minimal constructor args
  const WrappedSongSmartAccount = await ethers.getContractFactory('WrappedSongSmartAccount');
  const wrappedSongTemplate = await WrappedSongSmartAccount.deploy(
  );
  await wrappedSongTemplate.waitForDeployment();
  console.log('WrappedSongSmartAccount template deployed to:', await wrappedSongTemplate.getAddress());
  await saveAbi('WrappedSongSmartAccount', await wrappedSongTemplate.getAddress());

  // Deploy WSTokenManagement template with empty constructor
  const WSTokenManagement = await ethers.getContractFactory('WSTokenManagement');
  const wsTokenTemplate = await WSTokenManagement.deploy(); // No constructor args needed
  await wsTokenTemplate.waitForDeployment();
  console.log('WSTokenManagement template deployed to:', await wsTokenTemplate.getAddress());
  await saveAbi('WSTokenManagement', await wsTokenTemplate.getAddress());

  /******************************************************************************
   *                                                                             *
   *                           FACTORY WITH TEMPLATES                            *
   *                                                                             *
   ******************************************************************************/

  console.log('Deploying WrappedSongFactory...');
  const WrappedSongFactory = await ethers.getContractFactory('WrappedSongFactory');
  const wrappedSongFactory = await WrappedSongFactory.deploy();
  await wrappedSongFactory.waitForDeployment();
  console.log('WrappedSongFactory deployed to:', await wrappedSongFactory.getAddress());
  await saveAbi('WrappedSongFactory', await wrappedSongFactory.getAddress());

  await wrappedSongFactory.setWrappedSongTemplate(await wrappedSongTemplate.getAddress());
  await wrappedSongFactory.setWSTokenTemplate(await wsTokenTemplate.getAddress());
  await wrappedSongFactory.setProtocolModule(await protocolModule.getAddress());

  /******************************************************************************
   *                                                                             *
   *                           PROTOCOL CONFIGURATION                            *
   *                                                                             *
   ******************************************************************************/

  await metadataModule.setProtocolModule(await protocolModule.getAddress());
  await metadataModule.connect(deployer).transferOwnership(await protocolModule.getAddress());
  await erc20Whitelist.connect(deployer).setAuthorizedCaller(protocolModule.target);
  
  const tokenAddress = await getTokenAddress();
  console.log('Whitelisting token address:', tokenAddress);
  await protocolModule.connect(deployer).whitelistToken(tokenAddress);
  
  console.log('Setting up ProtocolModule configuration...');
  await protocolModule.setMetadataModule(await metadataModule.getAddress());
  console.log('MetadataModule set in ProtocolModule');
  
  await protocolModule.setMetadataRenderer(await metadataRenderer.getAddress());
  console.log('MetadataRenderer set in ProtocolModule');
  
  await protocolModule.setWrappedSongFactory(await wrappedSongFactory.getAddress());
  console.log('WrappedSongFactory set in ProtocolModule');
  
  await protocolModule.setRegistryModule(await registryModule.getAddress());
  console.log('RegistryModule set in ProtocolModule');
  
  console.log('Initializing RegistryModule...');

  await registryModule.initialize(
    await feesModule.getAddress(),
    await releaseModule.getAddress(),
    await identityModule.getAddress(),
    await metadataModule.getAddress(),
    await legalContractMetadata.getAddress(),
    await erc20Whitelist.getAddress()
  );

  console.log('RegistryModule initialized');

  console.log('Initializing ReleaseModule...');

  await releaseModule.initialize(
    await feesModule.getAddress(),
    await erc20Whitelist.getAddress(),
    await distributorWalletFactory.getAddress(),
    await metadataModule.getAddress()
  );
  console.log('ReleaseModule initialized');

  await feesModule.setReleaseFee(0);
  await feesModule.setWrappedSongCreationFee(0);
  await feesModule.setStartSaleFee(0);
  await feesModule.setWithdrawalFeePercentage(0);
  await feesModule.setReleaseFee(ethers.parseEther("0"));
  await feesModule.setDistributorCreationFee(ethers.parseEther("0"));
  await feesModule.setUpdateMetadataFee(ethers.parseEther("0"));
  
  await protocolModule.setBaseURI("ipfs://");
  await protocolModule.setStablecoinFeeReceiver(deployer.address);

  console.log('ProtocolModule initialized');

  /******************************************************************************
   *                                                                             *
   *                           SAVE DEPLOYMENT INFO                              *
   *                                                                             *
   ******************************************************************************/

  // Get the earliest block number from all deployments
  const protocolModuleBlock = (await protocolModule.deploymentTransaction()?.wait())?.blockNumber || 0;
  const wrappedSongFactoryBlock = (await wrappedSongFactory.deploymentTransaction()?.wait())?.blockNumber || 0;
  const metadataModuleBlock = (await metadataModule.deploymentTransaction()?.wait())?.blockNumber || 0;
  const legalContractMetadataBlock = (await legalContractMetadata.deploymentTransaction()?.wait())?.blockNumber || 0;
  const metadataRendererBlock = (await metadataRenderer.deploymentTransaction()?.wait())?.blockNumber || 0;

  // Use the earliest block as the start block
  const startBlock = Math.min(
    protocolModuleBlock,
    wrappedSongFactoryBlock,
    metadataModuleBlock,
    legalContractMetadataBlock,
    metadataRendererBlock
  );
  
  const deploymentInfo = {
    network: network.name,
    startBlock,
    contracts: {
      protocolModule: {
        address: await protocolModule.getAddress(),
        startBlock: protocolModuleBlock
      },
      wrappedSongFactory: {
        address: await wrappedSongFactory.getAddress(),
        startBlock: wrappedSongFactoryBlock
      },
      wrappedSongTemplate: {
        address: await wrappedSongTemplate.getAddress()
      },
      wsTokenTemplate: {
        address: await wsTokenTemplate.getAddress()
      },
      metadataModule: {
        address: await metadataModule.getAddress(),
        startBlock: metadataModuleBlock
      },
      legalContractMetadata: {
        address: await legalContractMetadata.getAddress(),
        startBlock: legalContractMetadataBlock
      },
      metadataRenderer: {
        address: await metadataRenderer.getAddress(),
        startBlock: metadataRendererBlock
      },
      songSharesMarketPlace: {
        address: await songSharesMarketPlace.getAddress(),
        startBlock: (await songSharesMarketPlace.deploymentTransaction()?.wait())?.blockNumber || 0
      },
      buyoutTokenMarketPlace: {
        address: await buyoutTokenMarketPlace.getAddress(),
        startBlock: (await buyoutTokenMarketPlace.deploymentTransaction()?.wait())?.blockNumber || 0
      }
    }
  };

  fs.writeFileSync(
    path.join(__dirname, '../subgraph/deployment-info.json'),
    JSON.stringify(deploymentInfo, null, 2)
  );


  fs.writeFileSync(addressesFile, JSON.stringify(contractAddresses, null, 2));
  fs.writeFileSync(addressesFile2, JSON.stringify(contractAddresses, null, 2));
}

async function saveAbi(contractName: string, contractAddress: string) {
  const artifact = await artifacts.readArtifact(contractName);
  const abiContent = JSON.stringify(artifact.abi, null, 2);

  fs.writeFileSync(path.join(abisDirectory, `${contractName}.json`), abiContent);
  fs.writeFileSync(path.join(localAbisDirectory, `${contractName}.json`), abiContent);

  contractAddresses[contractName] = contractAddress;
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
