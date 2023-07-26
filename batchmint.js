const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/DeviNFT.sol/DeviNFT.json");
//require('dotenv').config();

const tokenAddress = "0xcAd0D6B3101979616299a7Db41bEa13a81Aa676f"; // Extract token address from .env
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xbEEF8135D7B534390a2EF7C388bDd855CAdF1CA5";

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