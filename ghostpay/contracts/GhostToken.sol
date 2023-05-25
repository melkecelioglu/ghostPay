// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GhostToken is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("GhostToken", "GHT") {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function burn(address _from, uint256 amount) public onlyOwner {
        _burn(_from, amount);
    }
}
