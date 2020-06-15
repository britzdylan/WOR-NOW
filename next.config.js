const withOptimizedImages = require("next-optimized-images");
const path = require("path");

module.exports = withOptimizedImages({
    assetPrefix: 'https://www.sportprosa.co.za/',
    webpack(config, options) {
      return config
    },
    
    publicRuntimeConfig: {
       
        // Will be available on both server and client
        staticFolder: '/src',
    },
});