const path = require("path");

module.exports = withOptimizedImages({
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./sitemapGen');
    }
    return config
  },

  publicRuntimeConfig: {

    // Will be available on both server and client
    staticFolder: '/src',
  },
});