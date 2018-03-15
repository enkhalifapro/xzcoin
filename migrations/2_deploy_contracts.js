var ConvertLib = artifacts.require("./ConvertLib.sol");
var xzToken = artifacts.require("./XZToken.sol");

module.exports = function(deployer) {
    deployer.deploy(ConvertLib);
    deployer.link(ConvertLib, xzToken);
    deployer.deploy(xzToken);
};