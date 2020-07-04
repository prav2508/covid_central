const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/countries',
    createProxyMiddleware({
      target: 'http://corona-api.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/predict',
    createProxyMiddleware({
      target: 'http://covid-central-intel.herokuapp.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/timeline',
    createProxyMiddleware({
      target: 'http://corona-api.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/rss-feeds/news-english.xml',
    createProxyMiddleware({
      target: 'https://www.who.int',
      changeOrigin: true,
    })
  );
};

