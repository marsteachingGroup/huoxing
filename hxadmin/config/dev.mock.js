let proxyResFn = function (proxyRes, req, res, data) {
  proxyRes.headers['Content-Type'] = 'application/json'
}
let advs = JSON.stringify(require('../src/mock/advs.mock'))
let products = JSON.stringify(require('../src/mock/products.mock'))
let api = {
  '/api/advs': {
    toProxy: false,
    target: 'http://www.baidu.com',
    onProxyRes: function (proxyRes, req, res) {
      return proxyResFn(proxyRes, req, res, advs)
    },
    onError: function (err, req, res) {
      console.log(err)
      res.writeHead(200, {
        'Content-Type': 'application/json'
      })
      res.end(advs)
    }
  },
  '/api/products': {
    toProxy: false,
    target: 'http://www.baidu.com',
    onProxyRes: function (proxyRes, req, res) {
      proxyResFn(proxyRes, req, res, products)
    },
    onError: function (err, req, res) {
      console.log(err)
      res.writeHead(200, {
        'Content-Type': 'application/json'
      })
      res.end(products)
    }
  }
}

module.exports = api
