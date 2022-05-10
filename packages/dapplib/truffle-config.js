require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift raise night minor grace casino orange tragic'; 
let testAccounts = [
"0x2fa306434eab9b39e104586de74ec44f30f1f750935b8a95596864b36c5694df",
"0xd29cb7ba6e3b6ec9f1c174f08af0362e3c827242ee355b3dc356bb8dc719f11e",
"0x3eef5f4a3998c89b9fd290d0adafb4cdd907b325d047717f2d97217b0ef7c172",
"0x96970b1b7ed82b7dc03b5ec317ff579cf845d15e5bcaa25bf44b5b25e6599894",
"0xa72a37a814708bd582fdf2ddea44a5efb1205901374ec68dd5b7223cab40570d",
"0xb4c178e424b4c2fec465785350eb1c165aef8c1d19bc41d4a91672bdcfd9f388",
"0x2585ae5c31c34a5934d757035513cc91b176f55b0241cb0a8006491e25846e8f",
"0xf4fe2c26722588936447347412c1d04e52bdf764cbf9502af68ad858a8744116",
"0x53aca0b87b062fcb040c589616087099c9a4cf9948519575359a0314de17a508",
"0x51a439747e1a2abce55c95e359ea0aab20afd91a8f35bc643f9ebf194d053c63"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

