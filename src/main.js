import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuetify from 'vuetify';

import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

import VueAnalytics from 'vue-analytics';


// '820664319776-kratepkqp0lnq1kgsk6ob34pc7u3meug.apps.googleusercontent.com'
import VueAxios from 'vue-axios'
import VueAuthenticate from 'vue-authenticate'
import axios from 'axios';

Vue.use(VueAxios, axios)
Vue.use(VueAuthenticate, {
  baseUrl: 'https://superjs.org/api', // Your API domain

  providers: {
    google: {
      clientId: '820664319776-kratepkqp0lnq1kgsk6ob34pc7u3meug.apps.googleusercontent.com',
      redirectUri: 'https://superjs.org/oauth/google' // Your client app URL
    },
    github: {
      clientId: "49436bf9dcfb609b511f",
      redirectUri: "http://localhost:8080/oauth/github"
    }
  }
})

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
