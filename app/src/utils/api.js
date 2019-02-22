import request from './request'

// const ApiRootUrl = 'http://127.0.0.1:8360/api/'

const api = {
  // 首页数据接口
  getIndexData: (r) => request.get('activity/project', null, {
  })
}

export default api
