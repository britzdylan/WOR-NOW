const path = require("path");


module.exports = {
  webpack: (config, { isServer, dev }) => {
    if (isServer) {
      require('./sitemapGen');
    }
    return config
  },

  publicRuntimeConfig: {

    // Will be available on both server and client
    staticFolder: '/src',
  },
};