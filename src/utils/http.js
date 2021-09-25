import axios from 'axios'
import VueCookie from 'vue-cookie'


function getToken () {
  let key = 'FS_PROD_API_TOKEN_WKT'
  if (process.env.NODE_ENV === 'testing') {
    key = 'FS_TEST_API_TOKEN_YPZK'
  }
  let token = VueCookie.get(key)
  if (!token || token === null || token === '' || token === 'undefined') {
    token = login()
  }
  return token
}

function login () {
  if (process.env.NODE_ENV === 'development') {
    return 'D2F4B38037985B168D9FCAD189F49B687DFE3A46FE8A0CE2'
    // return '83EAA66EA98693B2120A84659C4C8DB94CA0CCE372201F1B' //线上的
  } else {
    //跳去获取权限拿到token
    let url = window.location.href
    window.location.href = url+'/login'
  }
}

// 基础配置
var instance = axios.create({
  // baseURL: '/api',
  // baseURL: 'http://xuexi-mgmt-dev.fsstudy.com/stat/',
  // baseURL: 'http://62.234.110.14/loginsql/',
  // baseURL: 'http://localhost/php/SelectandAdd/loginsql/',
  baseURL: 'http://localhost/php/jiekou/',
  timeout: 10000,  // 超时时间
  // headers: {
  //   TOKEN: getToken(),
  //   ostype: 4,
  //   littleOsType: 0,
  //   channel: 0
  // }
})

// 用户以后访问后端需要认证的 API 时都要传输 Token，而 axios 可以通过创建 request interceptor 自动帮你添加 Token 到请求头 Authorization 中：
instance.interceptors.request.use(function (config) {
  //在请求发送之前做某事
  // const token = window.localStorage.getItem('madblog-token')
  // const token = '2and1543992763';
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`
  // }
  return config
}, function (error) {
  return Promise.reject(error)
})

// 前面说过 JWT 的有效期要设置的短一些，当它过期后，用户再通过它访问后端 API 时会返回 401 UNAUTHORIZED 错误，我们希望 axios 自动处理这个错误，如果用户当前访问的不是 /login 路由（正常登录）时，会自动跳转到登录页，要求用户重新认证
// instance.interceptors.response.use(function (response) {
//   if (response.status === 200) {
//     const errorCode = response.data.errorCode
//     // 1100 没有登录或token不正确、 1 成功、 -1 失败
//     if (errorCode === 1) {
//       return response.data
//     } else if (errorCode === 1100) {
//       // login()
//       let url = window.location.href
//       window.location.href = url+'/login'
//     } else {
//       return Promise.reject(new Error(errorCode))
//     }
//   } else {
//     return Promise.reject(new Error(response.status))
//   }
// }, function (error) {
//   return Promise.reject(error)
// })
// 上 or 下
instance.interceptors.response.use(function (response) {
  // 用响应数据做某事  --具体情况进行修改
  return response
}, function (error) {
  console.log(error)
  // 用响应错误做某事 --具体情况进行修改
  switch  (error.response.status) {
    case 400:
      // 清除 Token 及 已认证 等状态
      store.logoutAction()
      // 跳转到登录页
      if (router.currentRoute.path !== '/login') {
        Vue.toasted.error('401: 认证已失效，请先登录', { icon: 'fingerprint' })
        router.replace({
          path: '/login',
          query: { redirect: router.currentRoute.path },
        })
      }
      break
    case 404:
      Vue.toasted.error('404: NOT FOUND', { icon: 'fingerprint' })
      router.back()
      break
  }
  return Promise.reject(error)
})

export default instance