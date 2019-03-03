let showLoadError = function (err) {
  if (process.env.NODE_ENV === 'development') {
    return console.error(err)
  }
  return console.error(err.message)
}
// 营销项目列表
const projectList = (r) => {
  require.ensure([], function (require) {
    let projectList = require('./project/projectList/index')
    r(projectList.default)
  }, showLoadError, 'projectList')
}
// 营销项目编辑
const projectEdit = (r) => {
  require.ensure([], function (require) {
    let projectEdit = require('./project/projectEdit/index')
    r(projectEdit.default)
  }, showLoadError, 'projectEdit')
}
// 营销项目查看
const projectView = (r) => {
  require.ensure([], function (require) {
    let projectView = require('./project/projectView/index')
    r(projectView.default)
  }, showLoadError, 'projectView')
}
// 营销项目查看
const enrollRecord = (r) => {
  require.ensure([], function (require) {
    let enrollRecord = require('./project/enrollRecord/index')
    r(enrollRecord.default)
  }, showLoadError, 'enrollRecord')
}
export default {
  projectList,
  projectEdit,
  projectView,
  enrollRecord
}
