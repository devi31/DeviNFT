const tokenAddress = "token address"; // Extract token address from .env
const tokenABI = tokenContractJSON.abi;
const walletAddress = "wallet address";

 // Array to store minted token IDs

async function main() {
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);


    console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
