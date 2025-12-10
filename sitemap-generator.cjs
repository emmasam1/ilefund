const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

// STATIC ROUTES
const routes = [
  '/',
  '/how-to-save',
  '/real-estate',
  '/faqs',
  '/resource',
  '/about-us',
  '/properties',
  '/contact'
];

 

(async () => {
  const sitemap = new SitemapStream({ hostname: 'https://ilefund.com' });

  const writeStream = createWriteStream('./public/sitemap.xml');
  sitemap.pipe(writeStream);

  routes.forEach((url) => sitemap.write({ url }));


  sitemap.end();

  await streamToPromise(sitemap);
  console.log('✅ Sitemap generated successfully!');
})();
