import { Random } from 'mockjs'
import moment from 'moment'

let momentFormatTpl = 'YYYY-MM-DD HH:mm:ss'
let getProductKillsecProps = function (pid, price, stock) {
  let now = moment()
  let killsecTime = now.clone().add(Random.integer(0, 20), Random.pick(['h', 's', 'm']))
  return {
    'product_id': pid,
    'killsec_price': (price / 11).toFixed(2),
    'killsec_count': Random.integer(0, stock),
    'killsec_permax': Random.integer(0, stock),
    'start_time': now.clone().subtract(1, Random.pick(['h', 'd', 'y'])).format(momentFormatTpl),
    'killsec_time': killsecTime.format(momentFormatTpl),
    'end_time': killsecTime.add(Random.integer(1, 3), 'm'),
    'status': Random.pick(['1', '2'])
  }
}

let getProductGrouponProps = function (pid, price, stock) {
  let now = moment()
  return {
    'product_id': pid,
    'group_price': (price / 10).toFixed(2),
    'group_count': Random.integer(0, stock),
    'group_deadline': Random.integer(0, stock),
    'start_time': now.clone()[Math.random() > 0.5 ? 'add' : 'subtract'](1, Random.pick(['m', 'h', 's'])).format(momentFormatTpl),
    'end_time': now.clone().add(20, Random.pick(['m', 'h', 's'])),
    'status': Random.pick(['1', '2'])
  }
}

/**
 * @param {number} [type=1] 表示商品类型  1为普通商品， 2为秒杀， 3为拼团
 */
let getProductBaseTpl = function (type = 1) {
  let productId = Random.zip()
  let price = Random.integer(300, 999)
  let stock = Random.integer(0, 100)
  let product = {
    [productId]: {
      'product_id': productId,
      'inter_id': Random.guid(),
      'name': Random.ctitle(5, 30),
      'price_market': '' + price,
      'price_package': (price / 10).toFixed(2),
      'stock': stock,
      'status': Random.pick(['1', '2']),
      'sales_cnt': Random.integer(0, stock)
    }
  }

  if (type === 2) {
    product[productId].killsec = getProductKillsecProps(productId, price, stock)
  }

  if (type === 3) {
    product[productId].groupon = getProductGrouponProps(productId, price, stock)
  }

  return product
}

export default getProductBaseTpl
