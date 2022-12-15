const MyContract = artifacts.require("MyContract");

contract("MyContract", () => {
  it("should set myVariable correctly", async () => {
    // Deploy a new instance of the contract
    const contract = await MyContract.new();

    // Set myVariable to a value using the setMyVariable function
    await contract.setMyVariable(42);

    // Get the value of myVariable using the getMyVariable function
    const myVariable = await contract.getMyVariable();

    // Assert that myVariable has the expected value
    assert.equal(myVariable, 42);
  });
});