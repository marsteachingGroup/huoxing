import * as apiConfig from './api'
import ajax from '@/utils/http'
/**
 * 营销项目列表
 **/
const getPojectList = (data, config) => {
  let url = apiConfig['api'].GET_POJECT_LIST
  return ajax.get(url, data, config)
}
/**
 * 添加营销项目
 **/
const getPojectAdd = (data, config) => {
  let url = apiConfig['api'].GET_POJECT_ADD
  return ajax.get(url, data, config)
}
export {
  getPojectList,
  getPojectAdd
}
