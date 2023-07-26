//We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  // Deploy the DeviNFT contract
  const token = await hre.ethers.deployContract("DeviNFT");
  //const contract = await DeviNFT.deploy();

  // Wait for the contract to be mined
  //await contract.deployed();

  console.log("DeviNFT contract deployed to:", await token.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

