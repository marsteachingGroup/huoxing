import axios from 'axios'
// import { LOGIN_URL } from '@/config/env'
// import { MessageBox, Notification } from 'element-ui'
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
  console.log(response)
  // const {REJECTERRORCONFIG = {}} = response.config
  // if (response.data.code === 1) {
  //   return response.data
  // } else {
  //   return {
  //     code: -404,
  //     url: response.config.url,
  //     REJECTERRORCONFIG,
  //     ...response.data
  //   }
  // }
}
const checkCode = function (res) {
  // 错误处理
  console.log(res)
  // if (res.code === -404) {
  //   // return handleErrorStatus(res)
  //   console.log(res)
  // } else {
  //   return res
  // }
}

// const handleErrorStatus = function (res) {
//   const {httpError, serveError, duration = 3000} = res.REJECTERRORCONFIG
//   const {status, msg, url} = res
//   if (!httpError || !serveError) {
//     let message
//     if (!httpError && status < 1000 && status > 399) {
//       message = msg
//       if (res.status === 401) {
//         let curURL = encodeURIComponent(location.href)
//         location.replace(`${LOGIN_URL}${curURL}`)
//         return
//       }
//       switch (status) {
//         case 403:
//           message = process.env.NODE_ENV === 'development' ? `当前用户无权限请求接口${url}` : '请联系管理员开通相关权限'
//           break
//         case 404:
//           message = process.env.NODE_ENV === 'development' ? `接口${url}未找到` : '请联系管理员确认是否存在相关页面'
//           break
//         case 500:
//         case 504:
//           message = process.env.NODE_ENV === 'development' ? `服务器发生内部错误` : '请刷新页面后重试'
//           break
//       }
//     }
//     if (!serveError && status > 1000) {
//       message = msg
//     }
//     if (message) {
//       if (status === 1001) {
//         Notification({
//           type: 'error',
//           title: '温馨提示',
//           message: message,
//           customClass: 'jfk-notification--center jfk-notification__request',
//           duration: duration
//         })
//       } else {
//         res.$msgbox = MessageBox({
//           type: 'error',
//           title: '温馨提示',
//           message: message
//         })
//       }
//     }
//   }
//   return Promise.reject(res)
// }

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
