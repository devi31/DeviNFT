# Function Frontend
This project demonstrates how to deploy an NFT collection on the Ethereum blockchain, Map the collection to Polygon, and Transfer assets over via the Polygon Bridge.


## Pre-requisites
1. Install metamask and connect it to the goerli amd mumbai network.
2. Your account should have enough goerli ethers amd matic.
3. Install npm package

## Description

This is a captivating project that showcases the fusion of bridging, blockchain technology, and NFTs. It introduces a unique collection of Non-Fungible Tokens (NFTs), each representing a letter from the word "DEVI." Leveraging the power of the ERC721 standard, the smart contract allows for the minting and ownership of these artistic tokens on the Ethereum blockchain.

Furthermore, the contract supports querying the prompt for any given NFT.

The "DeviNFT" project extends its reach beyond Ethereum, mapping its valuable assets to the Polygon network through the token mapper. This choice enhances accessibility and visualizes the connection between the two blockchain ecosystems, opening new possibilities for future cross-chain interactions.

## Getting Started
                  
### Executing Solidity program

1. Create a hardhat project.
2. under contract add the silidity contract file

```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract DeviNFT is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    struct DeviData {
        string uri;
        string prompt;
    }

    mapping(uint256 => DeviData) private _devis;

    constructor() ERC721("DEVI", "DE") {
        _addDevi("https://gateway.pinata.cloud/ipfs/QmRB1oHGWRG9wKxTZdzAuvMjWhBwy5vYiH2ju4kXGiDkV6", "A LETTER B");
        _addDevi("https://gateway.pinata.cloud/ipfs/QmcU9eqbkzuyEBLgPKa8ixNnkrk7Ug8fcmNL545F7jf296", "A LETTER D");
        _addDevi("https://gateway.pinata.cloud/ipfs/QmbXb7WiGx3LudBuxcZnxqBw1jST42rSs23915aA6FPwSR", "A LETTER E");
        _addDevi("https://gateway.pinata.cloud/ipfs/QmasVyZw9auTpuCq9yS3cjnBFFf9gNVpeji8Ly2nssfcWA", "A LETTER V");
        _addDevi("https://gateway.pinata.cloud/ipfs/QmZChzfR5Rfz3FaNbeLMqbGgESiVtWci8J9yaF8NAgxe6Z", "A LETTER I");
    }

    function _addDevi(string memory uri, string memory prompt) private {
        uint256 tokenId = _tokenIds.current();
        _devis[tokenId] = DeviData(uri, prompt);
        _tokenIds.increment();
    }

    function safeMint(address to) public onlyOwner returns (uint256) {
        _tokenIds.increment();
        uint256 tokenId = _tokenIds.current();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, _devis[tokenId].uri);
        return tokenId;
    }

    function promptDescription(uint256 tokenId) external view returns (string memory) {
        DeviData memory devi = _devis[tokenId];
        return devi.prompt;
    }

    function updateDeviURI(uint256 tokenId, string calldata newURI) external onlyOwner {
        require(_exists(tokenId), "Token does not exist");
        _devis[tokenId].uri = newURI;
        _setTokenURI(tokenId, newURI);
    }
function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

  
}
```

3. run npm i
4. compile it: npx hardhat compile
5. deploy the contract: npx hardhat run scripts/deploy.js --network goerli.
6. under scripts, add the mint,balace,promptdescription,aprrove-deposir-bridge file and run them on gerli network except for balance.
7. after 20-30 mins,your contract will be reflected on polyscan address.
8. copy the address from there and add in balance.js file.
9. now run this balance file on mumbai network.

remember to replace <YOUR_TOKEN_ADDRESS> with the actual address of your deployed contract.



### Authors

Contributors names and contact info
 [B devi](devibattini@gmail.com)


## License

This project is licensed under the [MIT] License - see the LICENSE.md file for details

