import Mock from 'mockjs'

let advsList = new Array(~~(Math.random() * 6))
  .fill(0)
  .map(() => ({
    'adv_id': Mock.mock('@id'),
    'inter_id': Mock.mock('@guid'),
    'hotel_id': Mock.mock('@id'),
    'name': Mock.mock('@ctitle(5,30)'),
    'name_en': Mock.mock('@title()'),
    'type|1-4': 1,
    'cat_id|1-4': 1,
    'product_id': Mock.mock('@id'),
    'logo': Mock.Random.image('638x309', Mock.Random.color(), Mock.mock('@ctitle(5,25)')),
    'link': '',
    'sort|1-5': 1,
    'status': Mock.mock('@integer(0,1)')
  }))

export default Mock.mock(advsList)
