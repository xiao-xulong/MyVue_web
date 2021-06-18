import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const module_wea={
  state: {
 show:false
  },
  mutations: {
  },
  actions: {
  },
}


export default new Vuex.Store({
  state: {
    username:''
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    wea:module_wea
  }
})
