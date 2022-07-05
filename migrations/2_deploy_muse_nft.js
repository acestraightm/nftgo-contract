require('dotenv').config();
const MuseNft = artifacts.require("MuseNft");

module.exports = function(deployer) {
  deployer.deploy(MuseNft);
};
