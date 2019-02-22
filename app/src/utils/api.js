import request from './request'

const api = {
  // 首页数据接口
  getIndexData: (r) => request.get('/activity/project?debug=1', null, {}),
  // 详情
  getDetail: (paramObj) => request.get('/activity/project/read?debug=1', paramObj, {})
}

export default api
