// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

interface IERC20 {
    function transfer(address recipient, uint256 amount) external returns (bool);
}

contract GHO {
    IERC20 public token;
    address public owner;
    uint256 public numberOfEntries;

    constructor() {
        token = IERC20(0xc4bF5CbDaBE595361438F8c6a187bDc330539c60);
        owner = msg.sender;
    }

    function transferToken(address recipient, uint256 amount) public returns (bool) {
        require(msg.sender == owner , "You are not Authorised to perform this Action");
        return token.transfer(recipient, amount);
    }

    struct Entry {
    string productName;
    string description;
    string imgURL;
    address walletAddress;
    uint256 likes; 
    bool isWinner;
    }

    Entry[] allEntries;

    function addEntry(string memory _productName, string memory _description, string memory _imgURL) public {
        allEntries.push(Entry(_productName, _description, _imgURL, msg.sender, 0, false));
        numberOfEntries++;
    }
    
    function getAllEntries() public view returns (Entry[] memory) {
        return allEntries;
    }
    
}
