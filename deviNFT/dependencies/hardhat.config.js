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
      accounts: ["PRIVATE KEY"],
    },
    goerli: {
      url: `https://rpc.ankr.com/eth_goerli`,
      accounts: ["PRIVATE KEY"],
    },
    
  },
};

