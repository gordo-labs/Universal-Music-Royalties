import { loadFixture, time } from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { ethers } from "hardhat";
import { deployProtocolFixture } from './fixtures/protocolFixture';

describe("WrappedSong Earnings", function () {
    async function setupWrappedSongAndDistributor() {
        const fixture = await loadFixture(deployProtocolFixture);
        const {
            artist,
            deployer,
            mockStablecoin,
            wrappedSongFactory,
            protocolModule,
        } = fixture;
        
        // Create wrapped song
        const creationFee = await protocolModule.wrappedSongCreationFee();
        await wrappedSongFactory.connect(artist).createWrappedSong(
            mockStablecoin.target,
            {
                name: "Test Song",
                description: "Test Description",
                image: "ipfs://image",
                externalUrl: "https://example.com",
                animationUrl: "ipfs://animation",
                attributesIpfsHash: "ipfs://attributes"
            },
            10000, // Total shares
            { value: creationFee }
        );

        // Get wrapped song instance
        const artistWrappedSongs = await protocolModule.getOwnerWrappedSongs(artist.address);
        const wrappedSong = await ethers.getContractAt("WrappedSongSmartAccount", artistWrappedSongs[0]);

        // Mint tokens to artist for testing
        await mockStablecoin.mint(artist.address, ethers.parseEther("10000"));

        return { ...fixture, wrappedSong };
    }

    describe("Basic Functionality", function () {
        it("should initialize with correct state", async function () {
            const { wrappedSong, artist, mockStablecoin } = await loadFixture(setupWrappedSongAndDistributor);
            
            expect(await wrappedSong.owner()).to.equal(artist.address);
            expect(await wrappedSong.stablecoin()).to.equal(mockStablecoin.target);
            expect(await wrappedSong.migrated()).to.equal(false);
        });

        it("should track epoch balances correctly", async function () {
            const { wrappedSong, artist, mockStablecoin } = await loadFixture(setupWrappedSongAndDistributor);

            const initialBalance = await wrappedSong.userEpochBalances(artist.address);
            expect(initialBalance.lastClaimedEpoch).to.equal(0);
            expect(initialBalance.lastClaimedETHEpoch).to.equal(0);

            // Create and process a distribution epoch
            const amount = ethers.parseEther("1.0");
            await mockStablecoin.connect(artist).approve(wrappedSong.target, amount);
            await wrappedSong.connect(artist).receiveERC20(mockStablecoin.target, amount);
            await wrappedSong.createStablecoinDistributionEpoch();
            await wrappedSong.connect(artist).claimStablecoinEarnings(1);

            const updatedBalance = await wrappedSong.userEpochBalances(artist.address);
            expect(updatedBalance.lastClaimedEpoch).to.equal(1);
            expect(updatedBalance.lastClaimedETHEpoch).to.equal(0);
        });
    });

    describe("Edge Cases", function () {
        it("should handle zero amount distributions", async function () {
            const { wrappedSong } = await loadFixture(setupWrappedSongAndDistributor);
            
            await expect(
                wrappedSong.createStablecoinDistributionEpoch()
            ).to.be.revertedWith("No stablecoin to distribute");
            
            await expect(
                wrappedSong.createETHDistributionEpoch()
            ).to.be.revertedWith("No ETH to distribute");
        });

        it("should handle multiple claims in same epoch", async function () {
            const { wrappedSong, artist, mockStablecoin } = await loadFixture(setupWrappedSongAndDistributor);
            
            const amount = ethers.parseEther("1.0");
            await mockStablecoin.connect(artist).approve(wrappedSong.target, amount);
            await wrappedSong.connect(artist).receiveERC20(mockStablecoin.target, amount);
            await wrappedSong.createStablecoinDistributionEpoch();
            
            // First claim should succeed
            await wrappedSong.connect(artist).claimStablecoinEarnings(1);
            
            // Second claim should fail
            await expect(
                wrappedSong.connect(artist).claimStablecoinEarnings(1)
            ).to.be.revertedWith("No new epochs");
        });

        it("should handle claims after share transfers", async function () {
            const { wrappedSong, artist, collector, mockStablecoin } = await loadFixture(setupWrappedSongAndDistributor);
            
            // First distribution - direct transfer to wrapped song
            const firstAmount = ethers.parseEther("1000");
            await mockStablecoin.mint(artist.address, firstAmount * 2n);
            await mockStablecoin.connect(artist).approve(wrappedSong.target, firstAmount);
            await wrappedSong.connect(artist).receiveERC20(mockStablecoin.target, firstAmount);
            await wrappedSong.createStablecoinDistributionEpoch();
            
            // Artist claims first epoch before transfer
            await wrappedSong.connect(artist).claimStablecoinEarnings(1);
            
            // Transfer half shares to collector
            const wsTokenManagement = await ethers.getContractAt(
                "WSTokenManagement",
                await wrappedSong.getWSTokenManagementAddress()
            );
            
            await wsTokenManagement.connect(artist).safeTransferFrom(
                artist.address,
                collector.address,
                1, // songSharesId
                5000, // 50% of shares
                "0x"
            );
            
            // Second distribution - direct transfer to wrapped song
            const secondAmount = ethers.parseEther("500");
            await mockStablecoin.connect(artist).approve(wrappedSong.target, secondAmount);
            await wrappedSong.connect(artist).receiveERC20(mockStablecoin.target, secondAmount);
            await wrappedSong.createStablecoinDistributionEpoch();
            
            // Both claim second epoch
            await wrappedSong.connect(artist).claimStablecoinEarnings(1);
            await wrappedSong.connect(collector).claimStablecoinEarnings(1);
            
            // Verify balances
            const artistBalance = await mockStablecoin.balanceOf(artist.address);
            const collectorBalance = await mockStablecoin.balanceOf(collector.address);
            
            // Artist should have received 100% of first epoch and 50% of second epoch
            expect(artistBalance).to.equal(firstAmount + (secondAmount / 2n));
            // Collector should have received 50% of second epoch
            expect(collectorBalance).to.equal(secondAmount / 2n);
        });

        it("should handle ETH distributions correctly", async function () {
            const { wrappedSong, artist } = await loadFixture(setupWrappedSongAndDistributor);
            
            // Send ETH directly to contract
            await artist.sendTransaction({
                to: wrappedSong.target,
                value: ethers.parseEther("1.0")
            });

            await wrappedSong.createETHDistributionEpoch();
            await wrappedSong.connect(artist).claimETHEarnings(1);

            const balance = await wrappedSong.userEpochBalances(artist.address);
            expect(balance.lastClaimedETHEpoch).to.equal(1);
        });
    });

    describe("Security", function () {
        it("should prevent unauthorized migrations", async function () {
            const { wrappedSong, collector, metadataModule } = await loadFixture(setupWrappedSongAndDistributor);
            
            await expect(
                wrappedSong.connect(collector).migrateWrappedSong(
                    metadataModule.target,
                    ethers.Wallet.createRandom().address
                )
            ).to.be.revertedWithCustomError(wrappedSong, "OwnableUnauthorizedAccount")
             .withArgs(collector.address);
        });

        it("should prevent operations after migration", async function () {
            const { wrappedSong, artist, mockStablecoin, metadataModule } = await loadFixture(setupWrappedSongAndDistributor);
            
            // Ensure WSTokenManagement is set up properly
            const wsTokenManagement = await ethers.getContractAt(
                "WSTokenManagement",
                await wrappedSong.getWSTokenManagementAddress()
            );
            
            // Create a valid new address using getCreateAddress
            const newAddress = await ethers.getCreateAddress({
                from: ethers.Wallet.createRandom().address,
                nonce: 0
            });
            
            await wrappedSong.connect(artist).migrateWrappedSong(
                metadataModule.target,
                newAddress
            );
            
            await expect(
                wrappedSong.createStablecoinDistributionEpoch()
            ).to.be.revertedWith("Contract has been migrated");
            
            await expect(
                wrappedSong.connect(artist).receiveERC20(mockStablecoin.target, 100)
            ).to.be.revertedWith("Contract has been migrated");
        });
    });

    describe("Gas Optimization", function () {
        it("should handle large number of epochs efficiently", async function () {
            const { wrappedSong, artist, mockStablecoin } = await loadFixture(setupWrappedSongAndDistributor);
            
            // Create multiple epochs
            const amount = ethers.parseEther("100");
            const totalAmount = amount * 10n;
            
            // Mint enough tokens upfront
            await mockStablecoin.mint(artist.address, totalAmount * 2n);
            
            // Create epochs one by one
            for(let i = 0; i < 10; i++) {
                await mockStablecoin.connect(artist).approve(wrappedSong.target, amount);
                await wrappedSong.connect(artist).receiveERC20(mockStablecoin.target, amount);
                await wrappedSong.createStablecoinDistributionEpoch();
                
                // Claim each epoch immediately to avoid accumulation issues
                await wrappedSong.connect(artist).claimStablecoinEarnings(1);
                
                await time.increase(3600);
            }
            
            const balance = await wrappedSong.userEpochBalances(artist.address);
            expect(balance.lastClaimedEpoch).to.equal(10);
        });
    });
}); 