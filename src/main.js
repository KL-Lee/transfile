import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/wyz-echarts/wyz-echarts.js'
import './plugins/element.js'

Vue.config.productionTip = false

import axios from 'axios'
//这里填入你的服务器数据的根目录
// axios.defaults.baseURL = ''
Vue.prototype.$http = axios
//在所需要的请求的页面使用this.$http.post("login", this.loginFrom)的形式调用数据
//具体还要根据你的接口形式设置
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
