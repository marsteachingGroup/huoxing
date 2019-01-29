import * as apiConfig from './api'
import ajax from '@/utils/http'
/**
 * 营销项目列表
 **/
const getClubMenu = (data, config) => {
  console.log(apiConfig)
  let url = apiConfig['api'].GET_POJECT_LIST
  return ajax.get(url, data, config)
}
export {
  getClubMenu
}
