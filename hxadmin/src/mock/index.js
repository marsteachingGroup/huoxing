import Mock from 'mockjs'
import advLists from './advs.mock'
import products from './products.mock'
import url from 'url'

Mock.mock('/api/advs', advLists)
Mock.mock(/\/api\/products/, function (options) {
  const urlObj = url.parse(options.url, true)
  const { type } = urlObj.query
  if (!type) {
    return {
      killsec: products.killsec,
      groupon: products.groupon,
      ordinary: products.ordinary
    }
  }
  if (type > 0 && type < 4) {
    return {
      ordinary: products.getProductsByType(urlObj.type, 2, 10)
    }
  }
})

