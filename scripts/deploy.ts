const hre = require("hardhat");

async function main() {
  // const NFT = await hre.ethers.getContractFactory("NFT");
  // const nft = await NFT.deploy("VANDUC", "VDC");

  // const Marketplace = await hre.ethers.getContractFactory("Marketplace");
  // const marketplace = await Marketplace.deploy(1);

  // await nft.deployed();
  
  // console.log("Successfully deployed smart contract to: ", nft.address);

  // await marketplace.deployed();
  
  // console.log("Successfully deployed marketplace smc to: ", marketplace.address);


  const Auction = await hre.ethers.getContractFactory("Auction");
  const auction = await Auction.deploy("0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889","0xa87D7D17590933551a4682D7e10A51849812C999");
  console.log('auction smc deployed at: ', auction.address);

}
// nft smc address:  0xD4ce17BbBE2a5cdC77F6c06A2925D36DD34b60bA
// makerplace:  0xe140f5BDfc30697f5196407A75d66551610a6b78

// Successfully deployed smart contract to:  0x7EFBacFc5AbA4E82C1e4A8E91449B3C00E0f26fe
// Successfully deployed marketplace smc to:  0x02Ba2c32a16FBE6f9347c8782244cD427BDE0D43

// Successfully deployed smart contract to:  0xd5C5d18dAad35B9859c7Bf93B28Cc946ca722F30
// Successfully deployed marketplace smc to:  0x624b78d8d96437646Cac5887b95238D28b52cc55
// Successfully deployed smart contract to:  0x4E2BA7f7029D3F5D868fCEC2A72d6DaD4da2AbaF
// Successfully deployed marketplace smc to:  0x341275249cC12cD5d31E3621D1364DCEc663Eca1


// auction smc deployed at:  0xED0cF950fDFf96650F0a47471B63C22cF2922848
// auction smc deployed at:  0x7df407c5c198B8b2DCF3e413115995641f07218f
// auction smc deployed at:  0xeAcABD7063e18211Fd31D223c24ea2B1DE10F665


// bsc
// Successfully deployed smart contract to:  0x767181A3c15F21c19f0b83088dB436b111C94e30
// Successfully deployed marketplace smc to:  0x9b867DE0C586cfa3eeF82c42D63aac3756fA2173
// auction smc deployed at:  0x23EA3ccf3e9da5E0bD309ad8418c251cf90C69F0


// Successfully deployed smart contract to:  0xa87D7D17590933551a4682D7e10A51849812C999
// Successfully deployed marketplace smc to:  0x8dd393Bc5B3f4A39a1eB007A21A709430224571b
// auction smc deployed at:  0x978249f736Ed93c7f2D496C9cF666D86c939b8a5

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// npx hardhat run scripts/deploy.ts --network polygon
// npx hardhat verify --network polygon 0x47a676d4876116778e0c31bFDEa5567dbb757037