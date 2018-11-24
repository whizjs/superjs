import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BootstrapVue from 'bootstrap-vue'
import VueAnalytics from 'vue-analytics'

const isProd = process.env.NODE_ENV === 'production';
// console.log(isProd); // true in netlify

Vue.use(BootstrapVue);
Vue.use(VueAnalytics, {
  id: 'UA-114773079-3',
  router,
  debug: {
    enable: !isProd,
    sendHitTask: isProd
  }
})

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
