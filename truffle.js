var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "tomorrow decide cart abstract puppy under random rib pistol dash skirt virtual";

module.exports = {
    networks: {
        development: {
            host: "localhost",
            port: 8546,
            network_id: "*" // Match any network id
        },
        ropsten: {
            provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io"),
            network_id: 3,
            gas: 600000
        }
    }
};