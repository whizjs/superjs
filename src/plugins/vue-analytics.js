import Vue from 'vue';
import VueAnalytics from 'vue-analytics';

const isProd = process.env.NODE_ENV === 'production';
// console.log(isProd); // true in netlify

Vue.use(VueAnalytics, {
    id: 'UA-114773079-3',
    router,
    debug: {
        enable: !isProd,
        sendHitTask: isProd
    }
})
