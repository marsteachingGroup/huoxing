import wx from 'wx'
import Fly from 'flyio'

const request = new Fly()

// 设置请求基地址
request.config.baseURL = "https://api.marsco.online"

request.interceptors.response.use(
  (response, promise) => {
    wx.hideNavigationBarLoading()
    return promise.resolve(response.data)
  },
  (err, promise) => {
    wx.hideNavigationBarLoading()
    wx.showToast({
      title: err.message,
      icon: 'none'
    })
    return promise.resolve()
  }
)

export default request
