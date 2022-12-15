// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract MyContract {
  uint256 public myVariable;

  function setMyVariable(uint256 _value) public {
    myVariable = _value;
  }

  function getMyVariable() public view returns (uint256) {
    return myVariable;
  }
}
