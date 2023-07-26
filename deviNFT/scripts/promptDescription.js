const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/DeviNFT.sol/DeviNFT.json");
//require('dotenv').config()

const tokenAddress = "token address";
const tokenABI = tokenContractJSON.abi;
async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    console.log("Prompt Descriptions: ")
    for (let i = 0; i < 5; i++) {
        const desc =await token.promptDescription(i)
        console.log("TokenID- "+ i+  ": " + desc );
      }
    
  }

  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
