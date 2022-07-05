/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-ethers");
require('@nomiclabs/hardhat-waffle');

module.exports = {
  defaultNetwork: "matic",
  networks: {
    hardhat: {},
    matic: {
      url: "https://polygon-mainnet.g.alchemy.com/v2/t0V0Dh-o4rhO_iBfvXW0avYeyJWZYjQ2",
      accounts: ["034e3d6421888ec61c7444287041c1c5020d378748040721129ab8f8ee897bd0"],
    },
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 20000,
  },
};
