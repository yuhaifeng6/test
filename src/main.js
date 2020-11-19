import Vue from 'vue'
import App from './App'
import router from './router'
import "./mock/index"
import store from "@/store/index"

// 全局配置
import http from "@/api"

Vue.prototype.$http = http
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
