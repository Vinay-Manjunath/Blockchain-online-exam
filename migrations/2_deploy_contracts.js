// 2_deploy_contracts.js
const QuizContract = artifacts.require("QuizContract");

module.exports = function (deployer) {
  deployer.deploy(QuizContract);
};