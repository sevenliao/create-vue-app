// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import http from './utils/http'
import Toasted from 'vue-toasted'

export const USERNAME = 'username'
export const HESTORY = 'hesPath' 

Vue.prototype.$http = http;

//弹框封装(dialog)
Vue.prototype.$dialog = function(oTtext,status){
  let obj = {
    showDialog: status,
    oTtext:oTtext,
  }
  this.$store.dispatch('getShowDialog', obj)
}

//飘窗(Toast)
Vue.use(Toasted, {
  // 主题样式 primary/outline/bubble
  theme: 'outline',
  // 显示在页面哪个位置
  position: 'bottom-center',
  // 显示多久时间（毫秒）
  duration: 2000,
  // 可以执行哪些动作
  // action: {
  //   text: 'Cancel',
  //   onClick: (e, toastObject) => {
  //     toastObject.goAway(0)
  //   }
  // },
})

router.beforeEach((to, from, next) => {
  // 如果没有登录(If you are not logged in)
  if (to.path.indexOf('login') === -1 && !sessionStorage[USERNAME]) {
    localStorage.setItem(HESTORY, to.fullPath)
    next({
      path: '/login'
    })
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
 