let BASE_PATH = ''
let LOGIN_URL = ''
let HOTEL_COUPON_BASE_PATH = ''
let HOTEL_COUPON_EDIT_PATH = ''
let HOTEL_COUPON_PATH = ''
let HOTEL_COUPON_EDIT_URL = ''
let INTER_ID = 'a469428180'

if (process.env.NODE_ENV !== 'development') {
  BASE_PATH = '/index.php'
  LOGIN_URL = '/index.php/privilege/auth/login?redirect='
  HOTEL_COUPON_BASE_PATH = 'hotel/coupon'
  HOTEL_COUPON_EDIT_PATH = 'code_edit'
  HOTEL_COUPON_PATH = `${BASE_PATH}/${HOTEL_COUPON_BASE_PATH}`
  HOTEL_COUPON_EDIT_URL = `${HOTEL_COUPON_PATH}/${HOTEL_COUPON_EDIT_PATH}`
}
console.log(BASE_PATH, LOGIN_URL, HOTEL_COUPON_EDIT_URL)

export {
  BASE_PATH,
  LOGIN_URL,
  HOTEL_COUPON_EDIT_URL,
  INTER_ID
}
