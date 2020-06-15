const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
    optimizedImages: {
        optimizeImagesInDev: true,
    },
    
    publicRuntimeConfig: {
       
        // Will be available on both server and client
        staticFolder: '/src',
    },
});