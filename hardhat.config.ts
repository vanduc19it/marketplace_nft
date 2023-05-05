require("@nomiclabs/hardhat-ethers");
require('dotenv').config();

module.exports = {
  defaultNetwork: "bsc",
  networks: {
    hardhat: {
    },
    bsc: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [process.env.PRIVATE_KEY]
    },
    polygon: {
      // url: "https://rpc-mumbai.maticvigil.com",
      // chainId: 80001,
      url: "https://polygon-mumbai.infura.io/v3/4cd2c1a8018646908347fb2223053b30",
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
}