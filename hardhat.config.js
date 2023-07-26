require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.0",
      },
      {
        version: "0.8.9",
      },
    ],
  },
  networks: {
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: ["7aec3b0aba039e4bd944ce2d52f9140a01556760605e7fe667dc4b51d45f21c0"],
    },
    goerli: {
      url: `https://rpc.ankr.com/eth_goerli`,
      accounts: ["7aec3b0aba039e4bd944ce2d52f9140a01556760605e7fe667dc4b51d45f21c0"],
    },
    sepolia: {
      url: 'https://ethereum-sepolia.blockpi.network/v1/rpc/public',
      accounts: ["7aec3b0aba039e4bd944ce2d52f9140a01556760605e7fe667dc4b51d45f21c0"],
    },
  },
};

