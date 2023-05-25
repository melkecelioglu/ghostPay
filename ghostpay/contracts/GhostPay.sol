// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./PackageOperations.sol";
import "./WrappingOperations.sol";

contract GhostPay is PackageOperations, WrappingOperations {

    event Subscribe(address indexed user, uint package, uint subscriptionTime);

    mapping(uint => mapping(address => uint)) public subscriptionEndTime;

    function subscribe(uint _packageId) public {
        Package memory package = viewPackage(_packageId);
        require(!viewIsSubscribed(msg.sender, _packageId));
        require(ghostToken.balanceOf(msg.sender) >= package.price);
        ghostToken.burn(msg.sender, package.price);
        ghostToken.mint(package.owner, package.price);
        subscriptionEndTime[_packageId][msg.sender] = block.timestamp + 30 days;
        emit Subscribe(msg.sender, _packageId, block.timestamp);
    }

    function viewIsSubscribed(address _user, uint _packageId) public view returns(bool) {
        return subscriptionEndTime[_packageId][_user] > block.timestamp;
    }

    function checkBalance(address _user) public view returns(uint) {
        return ghostToken.balanceOf(_user);
    }

}