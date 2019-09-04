import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

//引入elementui 组件库 以及样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

Vue.use(ElementUI)

Vue.config.productionTip = false

import '@/permission' // permission control
import '@/icons' // icon

import { mockXHR } from '../mock'
mockXHR()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

