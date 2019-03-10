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
 * 营销项目添加页
 **/
const getPojectAdd = (data, config) => {
  let url = apiConfig['api'].GET_POJECT_ADD
  return ajax.get(url, data, config)
}
/**
 * 营销项目提交添加数据
 **/
const postPojectAdd = (data, config) => {
  let url = apiConfig['api'].POST_POJECT_ADD
  return ajax.post(url, data, config)
}
/**
 * 营销项目编辑页
 **/
const getPojectEdit = (data, config) => {
  let url = apiConfig['api'].GET_POJECT_EDIT
  return ajax.get(url, data, config)
}
/**
 * 营销项目提交编辑数据
 **/
const postPojectEdit = (data, config) => {
  let url = apiConfig['api'].POST_POJECT_EDIT
  return ajax.post(url, data, config)
}
/**
 * 查看营销项目
 **/
const getPojectView = (data, config) => {
  let url = apiConfig['api'].GET_POJECT_VIEW
  return ajax.get(url, data, config)
}
/**
 * 标签列表
 **/
const getTagList = (data, config) => {
  let url = apiConfig['api'].GET_TAG_LIST
  return ajax.get(url, data, config)
}
/**
 * 添加标签
 **/
const postTagAdd = (data, config) => {
  let url = apiConfig['api'].POST_TAG_ADD
  return ajax.post(url, data, config)
}
/**
 * 删除项目
 **/
const postPojectDelete = (data, config) => {
  let url = apiConfig['api'].POST_POJECT_DELETE
  return ajax.post(url, data, config)
}
/**
 * 删除标签
 **/
const postTagDelete = (data, config) => {
  let url = apiConfig['api'].POST_TAG_DELETE
  return ajax.post(url, data, config)
}
/**
 * 列表
 **/
const getEnrollRecord = (data, config) => {
  let url = apiConfig['api'].GET_ENROLL_RECORD
  return ajax.get(url, data, config)
}
/**
 * 删除报名信息
 **/
const postRecordDelete = (data, config) => {
  let url = apiConfig['api'].POST_RECORD_DELETE
  return ajax.post(url, data, config)
}
/**
 * 审核报名信息
 **/
const postRecordCheck = (data, config) => {
  let url = apiConfig['api'].POST_RECORD_CHECK
  return ajax.post(url, data, config)
}
/**
 * 导出
 **/
const getExcel = (data, config) => {
  let url = apiConfig['api'].GET_EXCEL
  return ajax.get(url, data, config)
}
/**
 * 导出
 **/
const getExcelEx = (data, config) => {
  let url = apiConfig['api'].GET_EXCEL_EX
  return ajax.get(url, data, config)
}
/**
 * 获取团队信息
 **/
const getEnrollRecordTeam = (data, config) => {
  let url = apiConfig['api'].GET_ENROLL_TEAM
  return ajax.get(url, data, config)
}
/**
 * 修改团队信息
 **/
const postEnrollRecord = (data, config) => {
  let url = apiConfig['api'].POST_ENROLL_TEAM
  return ajax.post(url, data, config)
}
/**
 * 修改个人信息
 **/
const postEnrollRecordMember = (data, config) => {
  let url = apiConfig['api'].POST_ENROLL_RECORD
  return ajax.post(url, data, config)
}
export {
  getPojectList,
  getPojectAdd,
  postPojectAdd,
  getPojectEdit,
  postPojectEdit,
  getPojectView,
  getTagList,
  postTagAdd,
  postPojectDelete,
  postTagDelete,
  getEnrollRecord,
  postRecordDelete,
  postRecordCheck,
  getExcel,
  getExcelEx,
  getEnrollRecordTeam,
  postEnrollRecord,
  postEnrollRecordMember
}
