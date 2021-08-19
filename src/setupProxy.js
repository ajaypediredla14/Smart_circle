const { createProxyMiddleware } = require('http-proxy-middleware');
 
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api1', {
      target: 'https://api.croma.com', // API endpoint 1
      changeOrigin: true,
      pathRewrite: {
        "^/api1": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/api2', {
      target: 'https://prodsearch.tatacliq.com', // API endpoint 2
      changeOrigin: true,
      pathRewrite: {
        "^/api2": "",
      },
      headers: {
        Connection: "keep-alive"
      }
      
    })
  );
  app.use(
    createProxyMiddleware('/api3', {
      target: 'https://pricee.com', // API endpoint 2
      changeOrigin: true,
      pathRewrite: {
        "^/api3": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/api4', {
      target: 'https://push.api.bbci.co.uk', // API endpoint 2
      changeOrigin: true,
      pathRewrite: {
        "^/api4": "",
      },
      headers: {
        Connection: "keep-alive"
      }
    })
  );
}