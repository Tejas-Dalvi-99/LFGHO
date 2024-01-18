// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

interface IERC20 {
    function transfer(address recipient, uint256 amount) external returns (bool);
}

contract GHO {
    IERC20 public token;

    constructor() {
        token = IERC20(0xc4bF5CbDaBE595361438F8c6a187bDc330539c60);
    }

    function transferToken(address recipient, uint256 amount) public returns (bool) {
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
}


