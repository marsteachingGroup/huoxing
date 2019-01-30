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
export default {
  projectList,
  projectEdit
}
