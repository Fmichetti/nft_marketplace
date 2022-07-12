require("@nomicfoundation/hardhat-waffle");

const projectId = "218cc3e4df414fbea66d7b3c7e3f412a"


module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: []
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: []
    }
  },
  solidity: "0.8.9",
};
