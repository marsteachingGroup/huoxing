import axios from 'axios'
// import { LOGIN_URL } from '@/config/env'
import { Message } from 'element-ui'
import { formatUrlParams } from '@/utils/utils'
const urlParams = formatUrlParams(window.location.href)
// 开发环境跨域请求带cookie
if (process.env.NODE_ENV === 'development') {
  axios.defaults.withCredentials = true
}
// 默认一分钟超时
axios.defaults.timeout = 60000
axios.interceptors.request.use(function (config) {
  return config
}, function (err) {
  return Promise.reject(err)
})
// resolve error
axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.resolve(error.response)
})
const checkStatus = function (response) {
  // debugger
  const {REJECTERRORCONFIG = {}} = response.config
  if (response.data.code === 1) {
    return response.data
  } else {
    return {
      code: -404,
      url: response.config.url,
      REJECTERRORCONFIG,
      ...response.data
    }
  }
}
const checkCode = function (res) {
  // 错误处理
  console.log(res)
  if (res.code === 1) {
    return res
  } else {
    return handleErrorStatus(res)
  }
}

const handleErrorStatus = function (res) {
  // const { msg } = res
  console.log(Message)
  // if (!msg) {
  //   MessageBox({
  //     type: 'error',
  //     title: '温馨提示',
  //     message: msg
  //   })
  // } else {
  //   MessageBox({
  //     type: 'error',
  //     title: '温馨提示',
  //     message: '找不到页面'
  //   })
  // }
  return Promise.reject(res)
}

const DEBUGREG = /(|&|\?)debug=([^&]+)?/

export default {
  post (url, data, config) {
    if (process.env.NODE_ENV === 'development') {
      if (config && config.headers && config.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
        if (!DEBUGREG.test(data)) {
          data += '&debug=1'
        }
      } else {
        if (data.debug === undefined) {
          data.debug = urlParams.debug || 1
        }
      }
    }
    console.log(url, 'url in post')
    let _config = Object.assign({}, {data: data, url: url, method: 'post'}, config)
    return axios(_config).then(checkStatus).then(checkCode)
  },
  get (url, data, config) {
    if (process.env.NODE_ENV === 'development') {
      data = data || {}
      if (data.debug === undefined) {
        data.debug = urlParams.debug || 1
      }
    }
    let _config = Object.assign({}, {params: data, method: 'get', url: url}, config)
    return axios(_config).then(checkStatus).then(checkCode)
  }
}
