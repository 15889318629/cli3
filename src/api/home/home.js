import {
  http,
  noAuthorizationHttp
} from '../config'
let qs = require('querystring')

// 左侧认证情况
export const getData = (url, data) => {
  return http.post(url, qs.stringify(data))
}
