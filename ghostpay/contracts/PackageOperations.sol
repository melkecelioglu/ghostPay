// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";

contract PackageOperations is Ownable{
    uint private packageCount;

    event PackageCreation(uint ID, string name, address company, uint price);

    struct Package {
        uint ID;
        string name;
        address owner;
        uint price;
        bool isActive;
    }

    mapping(uint => Package) private packages;

    function createPackage(string calldata _name, uint _price) public {
        packageCount++;
        packages[packageCount] = Package({
        ID: packageCount,
        name: _name,
        owner: msg.sender,
        price: _price,
        isActive: true
        });
        emit PackageCreation(packageCount, _name, msg.sender, _price);
    }

    function editPackageName(uint _packageId, string calldata _name) public {
        Package storage package = packages[_packageId];
        require(package.owner == msg.sender || msg.sender == owner());
        package.name = _name;
    }

    function editPackagePrice(uint _packageId, uint _newPrice) public {
        Package storage package = packages[_packageId];
        require(package.owner == msg.sender || msg.sender == owner());
        package.price = _newPrice;
    }

    function transferPackageOwnership(uint _packageId, address _newPackageOwner) public {
        require(msg.sender == owner() || msg.sender == packages[_packageId].owner);
        packages[_packageId].owner = _newPackageOwner;
    }

    function changePackageStatus(uint _packageId) public {
        require(msg.sender == owner() || msg.sender == packages[_packageId].owner);
        packages[_packageId].isActive = !packages[_packageId].isActive;
    }

    function viewPackage(uint _packageId) public view returns(Package memory) {
        return packages[_packageId];
    }



}