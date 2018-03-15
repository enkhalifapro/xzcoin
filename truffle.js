module.exports = {
    networks: {
        development: {
            host: "localhost",
            port: 8545,
            from: "0x1b740b2d7948ebcd48abe02d83edb2c7e96a4414",
            network_id: "*" // Match any network id
        },
        ropsten: {
            provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"),
            network_id: '3',
        }
    }
};