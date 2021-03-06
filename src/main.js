import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuetify from 'vuetify';

import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

import VueAnalytics from 'vue-analytics';


// '820664319776-kratepkqp0lnq1kgsk6ob34pc7u3meug.apps.googleusercontent.com'

const isProd = process.env.NODE_ENV === 'production';
// console.log(isProd); // true in netlify

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-114773079-3',
  router,
  debug: {
    enable: !isProd,
    sendHitTask: isProd
  }
})

Vue.use(Vuetify, {
  iconfont: 'fa',
})



new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')