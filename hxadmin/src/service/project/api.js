let API_URL_SUFFIX = ''
if (process.env.NODE_ENV === 'production') {
  API_URL_SUFFIX = 'http://api.marsco.online/admin'
} else {
  API_URL_SUFFIX = '/admin'
}
const api = {
  // 营销项目列表
  GET_POJECT_LIST: `${API_URL_SUFFIX}/project`,
  // 营销项目添加页
  GET_POJECT_ADD: `${API_URL_SUFFIX}/project/add`,
  // 营销项目提交添加数据
  POST_POJECT_ADD: `${API_URL_SUFFIX}/project/addPost`,
  // 营销项目编辑页
  GET_POJECT_EDIT: `${API_URL_SUFFIX}/project/edit`,
  // 营销项目提交编辑数据
  POST_POJECT_EDIT: `${API_URL_SUFFIX}/project/editPost`,
  // 营销项目查看数据
  GET_POJECT_VIEW: `${API_URL_SUFFIX}/project/show`,
  // 删除项目
  POST_POJECT_DELETE: `${API_URL_SUFFIX}/project/delete`,
  // 标签列表
  GET_TAG_LIST: `${API_URL_SUFFIX}/tag`,
  // 添加标签
  POST_TAG_ADD: `${API_URL_SUFFIX}/tag/addPost`,
  // 删除标签
  POST_TAG_DELETE: `${API_URL_SUFFIX}/tag/delete`,
  // 营销大赛报名列表
  GET_ENROLL_RECORD: `${API_URL_SUFFIX}/project/enroll_record`,
  // 删除报名信息
  POST_RECORD_DELETE: `${API_URL_SUFFIX}/record/delete`,
  // 审核报名信息
  POST_RECORD_CHECK: `${API_URL_SUFFIX}/record/check`,
  // 营销大赛管理/查看比赛/报名信息，Excel导出
  GET_EXCEL: `/admin/activity_enroll_record/export_excel`,
  // 营销大赛管理/学生报名信息，Excel导出
  GET_EXCEL_EX: `/admin/activity_enroll_record/export_excel_ex`,
  // 获取团队信息
  GET_ENROLL_TEAM: `${API_URL_SUFFIX}/project/get_enroll_team`,
  // 修改团队信息
  POST_ENROLL_TEAM: `${API_URL_SUFFIX}/project/modify_enroll_team`,
  // 修改个人信息
  POST_ENROLL_RECORD: `${API_URL_SUFFIX}/project/modify_enroll_record`
}

export {
  api
}
