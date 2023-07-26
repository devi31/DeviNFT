const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/DeviNFT.sol/DeviNFT.json");
//require('dotenv').config();

const tokenAddress = "token address"; // Extract token address from .env
const tokenABI = tokenContractJSON.abi;
const walletAddress = "wallet address";

 // Array to store minted token IDs

async function main() {
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    for (let i = 0; i < 5; i++) {
        const tx = await token.safeMint(walletAddress);
        const receipt = await tx.wait();

        // Check if the 'events' array is not empty

 
    }

    console.log("You now have minted 5 tokens");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
