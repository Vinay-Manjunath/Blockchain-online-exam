// truffle-config.js
module.exports = {
  networks: {
    ganache: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ganache UI port
      network_id: "5777",       // Any network (default: none)
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",    // Specify compiler version
    },
  },
};