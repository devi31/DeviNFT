const tokenAddress = "0x64434F20C628f42C36d821DF15800b632cA58f6F"; // Extract token address from .env
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xbEEF8135D7B534390a2EF7C388bDd855CAdF1CA5";

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