/* eslint-disable */
// import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import {
  sync
} from 'vuex-router-sync'
import '../theme/index.css'
// import axios from 'axios'
// import Element from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
// Vue.prototype.$echarts = echarts
// Vue.prototype.$http = axios

// Vue.use(Element)

sync(store, router)

// 路由拦截
// router.beforeEach((to, from, next) => {
//   debugger
//   let loginState = false
//   // 判断是否登录
//   if (localStorage.getItem('token')) {
//     loginState = true
//     store.commit('SET_SEARCHLEVEL', localStorage.getItem('currentSearchLevel'))
//   }
//   if (to.name === 'login') {
//     if (loginState) {
//       // ElementUI.Message({
//       //   message: '您已登录，将自动为您跳转'
//       // })
//       setTimeout(() => {
//         next({name: 'home'})
//       }, 1000)
//     } else {
//       next()
//     }
//   } else {
//     if (loginState) {
//       next()
//     } else {
//       // ElementUI.Message({
//       //   message: '您还未登录，请先登录'
//       // })
//       setTimeout(() => {
//         next({name: 'login'})
//       }, 1000)
//     }
//   }
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
