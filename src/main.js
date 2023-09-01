// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    sum: 0
  },
  mutations: {
    plusTwo (state,{num}) {
      state.sum = state.sum + parseFloat(num.value)
    },
    timesTwo (state, {num}) {
      state.sum = state.sum * parseFloat(num.value)
    },
    overTwo (state, {num}) {
      state.sum = state.sum / parseFloat(num.value)
    }

  },
  actions: {
    plusTwo (context, {num}) {
      context.commit('plusTwo', {num})
    },
    timesTwo (context,{num}) {
      context.commit('timesTwo', {num})
    },
    overTwo (context,{num}) {
      context.commit('overTwo', {num})
    }
  }
})
export default store
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store: store
})
