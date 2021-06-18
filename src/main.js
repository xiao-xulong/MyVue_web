import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import './assets/css/normalize.css'
import './assets/css/base.css'
import FastClick from 'fastclick'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

axios.interceptors.request.use(config=>{
NProgress.start()
  return config
})

axios.interceptors.response.use(config=>{

  NProgress.done()
  return config
})


Vue.use(VueLazyload,{
  loading:require('./assets/img/loading.jpeg')
})
Vue.use(Vant)
Vue.prototype.$http = axios
FastClick.attach(document.body)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
