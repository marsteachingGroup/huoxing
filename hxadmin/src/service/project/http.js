import * as apiConfig from './api'
import ajax from '@/utils/http'

/**
 * 获取社群客菜单配置
 * @param {Object} data 无参
 **/
const getClubMenu = (data, config, version = 'v1') => {
  let url = apiConfig[version] && apiConfig[version].GET_CLUB_MENU || apiConfig['v1'].GET_CLUB_MENU
  return ajax.get(url, data, config)
}
export {
  getClubMenu
}
