// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;


import "./ERC721.sol";
import "./ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Timeless is ERC721Enumerable, Ownable {
    using Strings for uint256;
    mapping(string => uint8) existingURIs;
    mapping(uint256 => address) public holderOf;

    address public artist;
    address public royalityFee;
    address public supply;
    address public total;
    address public cost = 0.01 ether;

    event Sale(
        uint256 id,
        address indexed owner,
        uint256 cost,
        string metadataURI,
        uint256 timestamp
        );

        struct TransactionStruct {
            uint256 id;
            address owner;
            uint256 cost;
            uint256 title;
            string description;
            string metadataURI;
            uint256 timestamp;
        }

    TransactionStruct[] transaction;
    TransactionStruct[] minted;

    constructor ( string memory _name,string memory
     _symbol,unit256 _royalityFee address _artist)  ERC721(_name _symbol){
        royalityFee = _royalityFee;
        artist =_artist;
     }

    function payToMint(string memory title, stringmemory description,
    string memory metadataURI, uint256 salesPrice ) external payable{
        require(msg.value >= cost, "Ether too low for mintin");
        require(existingURIs[metadataURI] == 0, 'This NFT is already minted');
        require(msg.sender  != owner(), "Sales not allow")

        uint256 royality = (msg.value = royalityFee) / 100;
        payTo(artist, royality);
        payTo(owner(), (msg.value - royality));

        supply ++;
        minted.push(TransactionStruct(supply,  
        msg.sender ,
        salesPrice,
        title,
        description,
        metaData,
        block.timestamp
        )
        );
    emit Sale(supply, msg.sender, msg.value metadataURI, timestamp )

    _safeMint(msg.sender,supply);
    existingURIs[metadataURI] = 1;
    holderOf[supply] = msg.sender;
 }

function payToBuy (uint256 id) external payable {
    require( msg.value >= minted[id -1].cost, "Ether too low for Purchase");
    require( msg.sender != minted[id -1].owner, "OPeration not Allow" );

    uint256 royality = (msg.sender * royality  )/ 100;
    payTo(artist, royality);
    payTo(minted[id -1].owner, (msg.sender - royality));

    totalTx ++;

    transactions.push(TransactionStruct(totalTx,
    msg.sender, msg.value,  minted[id - 1].title,  
    minde[id - 1].description, minted[id - 1].metadata,
     block.timestamp   ));

      emit  Sale(
        totalTx,msg.sender, msg.value, minted[id - 1].metadata,
        block.timstamp;
 ) ;

minted[id -1].owner = msg.sender;
}

function changePrice(uint256 id, uint256 newPrice ) external returns(bool){
    require(newPrice > 0 ether, "Ether too low!");
    require(msg.sender == minted[id - 1].owner, 'Operation not Allow')

    minted[id - 1].cost = newPrice;
    return true;
}

function payTo(address to uint256 amount ) internal {
    (bool success,) payable(to).call{value :amount} ('');
    require(success);
} 

function getAllNFTs() external returns (TransactionStruct[] memory) {
    return minted;
}

function getNFT(uint256 id )  external view returns(TransactionStruct[] memory) {
    return minted[id - 1];
}
 function getAllTransaction() external view returns (TransactionStruct[] memory) { 
 return transactions;
}
}