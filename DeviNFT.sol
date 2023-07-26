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
