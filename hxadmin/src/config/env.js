let BASE_PATH = ''
let LOGIN_URL = ''
let HOTEL_PRICE_BASE_PATH = ''
let HOTEL_PRICE_EDIT_PATH = ''
let HOTEL_PRICE_PATH = ''
let HOTEL_PRICE_EDIT_URL = ''
// let INTER_ID = 'a421641095'
let INTER_ID = 'a484619482'
// 订房后台新版皮肤公众号
// let INTER_ID = 'a426755343'
// 测试订房后台数据分析公众号
// let INTER_ID = 'a429262687'
// 发票后台
// let INTER_ID = 'a469428180'
// pos后台
// let INTER_ID = 'a450089706'
// 邮寄发票
// let INTER_ID = 'a484619482'
if (process.env.NODE_ENV !== 'development') {
  BASE_PATH = '/index.php'
  LOGIN_URL = '/index.php/privilege/auth/login?redirect='
  HOTEL_PRICE_BASE_PATH = 'hotel/prices'
  HOTEL_PRICE_EDIT_PATH = 'code_edit'
  HOTEL_PRICE_PATH = `${BASE_PATH}/${HOTEL_PRICE_BASE_PATH}`
  HOTEL_PRICE_EDIT_URL = `${HOTEL_PRICE_PATH}/${HOTEL_PRICE_EDIT_PATH}`
}
console.log(BASE_PATH, LOGIN_URL, HOTEL_PRICE_EDIT_URL)

export {
  BASE_PATH,
  LOGIN_URL,
  HOTEL_PRICE_EDIT_URL,
  INTER_ID
}
