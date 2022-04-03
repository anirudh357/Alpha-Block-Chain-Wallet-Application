//https://eth-ropsten.alchemyapi.io/v2/bCswm9suQmCpBpUPCwopiEkssgrGCk1T

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url:'https://eth-ropsten.alchemyapi.io/v2/1JBYSO7yYPsoIusLlfdHgo2C4Uq6r_YJ',
      accounts: ['8a3701d43f3667b2494b49a8790dbf31bcc1c86d3d79bf8eddf0f12d1ca0a104'],
    },
  },
};