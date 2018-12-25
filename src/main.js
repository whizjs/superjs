import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuetify from 'vuetify';
import VueAnalytics from 'vue-analytics';
import GoogleAuth from 'vue-google-auth';

import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

const isProd = process.env.NODE_ENV === 'production';
// console.log(isProd); // true in netlify

Vue.config.productionTip = false

Vue.use(GoogleAuth, {
  client_id: '820664319776-su7r3dsg9e83s5t59adi3oi3hh2rti1s.apps.googleusercontent.com'
});
Vue.googleAuth().load();


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
