const sitemap = require('nextjs-sitemap-generator');

sitemap({
  baseUrl: 'https://worldofrugby.co.za',
  pagesDirectory: __dirname + "/pages",
  targetDirectory : '/public',
  nextConfigPath: __dirname + "/next.config.js",
  ignoredExtensions: [
        'png',
        'jpg'
  ],
  pagesConfig: {
    '/': {
      priority: '0.5',
      changefreq: 'weekly'
    },
    '/shop/fan-gear' : {
        priority: '1',
        changefreq: 'daily'
    }
  }
});

console.log(`✅ sitemap.xml generated!`);