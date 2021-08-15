require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun food elbow cost six punch hidden kiwi metal gesture'; 
let testAccounts = [
"0xadc6d8114f363a7e9b6ad7cad346bb56750b463ffe2122e4852b7f5aee183766",
"0xc672fa5bc6cc3655079f6067941e599cf2887143f6af488f040096f53bd69c07",
"0x2bb99e491d270281d850f7782d8aa8ca7e75caf54238557cc45a61ccaa5607e1",
"0x01480775665189f30dec867ae788d5605833fc92e80b1301e184d6f11a55c5e7",
"0x2e98293b7d930c1b679dbb1d1e5cef02d366689bfa46d0a32e72739f7ec12eaa",
"0xebf6ff15d6e8f4d0b03a5545b95d61d133550de41fe594fb137370e6d7bb420b",
"0xa608a5563d036f2b9b3302507fb55ada2524e0be11f0c42b6caff9a4bcee933e",
"0x6b59bb97564178f339123f00e12fd3502c151031140f1f46cd69293d230228e5",
"0xd749a605dd722ce87cfdda60ea2b993698bd0e9b1e006ddf4d6c8395d01ed029",
"0xb8e30c7388160403726eacf7c2fd8741706f8a47d9b7c41f906785c40ecac2a6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

