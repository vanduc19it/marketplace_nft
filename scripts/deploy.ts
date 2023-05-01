const hre = require("hardhat");

async function main() {
  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy("VANDUC", "VDC");

  const Marketplace = await hre.ethers.getContractFactory("Marketplace");
  const marketplace = await Marketplace.deploy(1);

  await nft.deployed();
  
  console.log("Successfully deployed smart contract to: ", nft.address);

  await marketplace.deployed();
  
  console.log("Successfully deployed marketplace smc to: ", marketplace.address);

}
// nft smc address:  0xD4ce17BbBE2a5cdC77F6c06A2925D36DD34b60bA
// makerplace:  0xe140f5BDfc30697f5196407A75d66551610a6b78

// Successfully deployed smart contract to:  0x7EFBacFc5AbA4E82C1e4A8E91449B3C00E0f26fe
// Successfully deployed marketplace smc to:  0x02Ba2c32a16FBE6f9347c8782244cD427BDE0D43

// Successfully deployed smart contract to:  0xd5C5d18dAad35B9859c7Bf93B28Cc946ca722F30
// Successfully deployed marketplace smc to:  0x624b78d8d96437646Cac5887b95238D28b52cc55
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});