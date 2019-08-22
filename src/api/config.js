/* eslint-disable */
// 配置请求服务所在路径
axios.defaults.baseURL = 'https://qc.chinacpc.org'

const http = axios.create({
  // 设置过期时间
  timeout: 500000
})

// 请求拦截  http 带有token 返回判断用户是否弹出登录
http.interceptors.request.use(config => {
  // httpLoading = Loading.service({
  //   fullscreen: true,
  //   lock: true,
  //   spinner: 'el-icon-loading',
  //   background: 'rgba(0, 0, 0, 0.7)',
  //   customClass: 'qc-loading-icon'
  // })
  if (localStorage.getItem('token')) {
    config.headers['Authorization'] = localStorage.getItem('token')
  }
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  return config
}, error => {
  Promise.reject(error)
})

// 响应拦截
http.interceptors.response.use(res => {
  // httpLoading.close()
  if (res.data.code === 40001) {
    Message({
      message: '您的登录已过期，请重新登录'
    })
    setTimeout(() => {
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      router.push({
        name: 'login'
      })
    }, 1000)
    return
  }
  return res
}, error => {
  setTimeout(() => {
    // httpLoading.close()
    // Message({
    //   message: '请求失败',
    //   type: 'error'
    // })
    return Promise.reject(error)
  }, 1000)
})

const noAuthorizationHttp = axios.create({
  // 设置过期时间
  timeout: 500000
})

// 请求拦截 noAuthorizationHttp 不带token
noAuthorizationHttp.interceptors.request.use(config => {
  // httpLoading = Loading.service({
  //   fullscreen: true,
  //   lock: true,
  //   spinner: 'el-icon-loading',
  //   background: 'rgba(0, 0, 0, 0.7)',
  //   customClass: 'qc-loading-icon'
  // })
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  return config
}, error => {
  Promise.reject(error)
})

// 响应拦截
noAuthorizationHttp.interceptors.response.use(res => {
  // httpLoading.close()
  return res
}, error => {
  setTimeout(() => {
    // httpLoading.close()
    // Message({
    //   message: '请求失败',
    //   type: 'error'
    // })
    return Promise.reject(error)
  }, 1000)
})

export {
  http,
  noAuthorizationHttp
}
