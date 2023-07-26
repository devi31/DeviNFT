const hre = require("hardhat");
const tokenJSON = require("../artifacts/contracts/DeviNFT.sol/DeviNFT.json");
const tokenAddress = "0xcAd0D6B3101979616299a7Db41bEa13a81Aa676fF"; // Extract token address from .env
const tokenABI = tokenJSON.abi;
const walletAddress = "0xbEEF8135D7B534390a2EF7C388bDd855CAdF1CA5";

const fxRootContractABI = require("../fxRootContractABI.json");
const fxERC21RootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
 // place your public address for your wallet here

async function main() {
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
;
  
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC21RootAddress);
    

    const approveTx = await token.setApprovalForAll(fxERC21RootAddress, true);
    await approveTx.wait();

    console.log("Approval confirmed");
    for (let i = 3; i < 8; i++) {
    //const rootTokenAddress = await fxContract.rootToChildTokens(contractAddress);
    const depositTx = await fxContract.deposit(tokenAddress,walletAddress, i,'0x6566');
    await depositTx.wait();

    }
    console.log("Tokens deposited");
    
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  
