import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './assets/sass/index.scss'

Vue.use(BootstrapVue)
Vue.use(Vuex)

Vue.config.productionTip = false;
//const isDev = process.env.NODE_ENV !== "production";
//Vue.config.performance = isDev;
Vue.config.performance = true;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
