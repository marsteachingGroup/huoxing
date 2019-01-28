import { Random } from 'mockjs'
import getProductBaseTpl from './products.baseFn'

let productKillSecLists = new Array(Random.integer(2, 8))
  .fill(0)
  .map(() => getProductBaseTpl(2))

let productGrouponLists = new Array(Random.integer(2, 8))
  .fill(0)
  .map(() => getProductBaseTpl(3))

let productLists = new Array(Random.integer(2, 5))
  .fill(0)
  .map(() => getProductBaseTpl(1))

let getProductsByType = function (type = 1, min = 0, max = 10) {
  return new Array(Random.integer(min, max))
  .fill(0)
  .map(() => getProductBaseTpl(type))
}

export default {
  killsec: productKillSecLists,
  groupon: productGrouponLists,
  ordinary: productLists,
  getProductsByType
}

