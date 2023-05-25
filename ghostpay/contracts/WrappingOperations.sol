// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./GhostToken.sol";

contract WrappingOperations {

    GhostToken immutable ghostToken;

    constructor() {
        ghostToken = new GhostToken();
    }

    function deposit() public payable {
        ghostToken.mint(msg.sender, msg.value);
    }
    
    function withdraw(uint _amount) public {
        ghostToken.burn(msg.sender, _amount);
        payable(msg.sender).transfer(_amount);
    }

}