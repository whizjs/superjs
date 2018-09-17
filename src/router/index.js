import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';
import Videos from '@/components/Videos';
import Pictures from '@/components/Pictures';
import Vip from '@/components/Vip';
import Login from '@/components/auth/Login';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/videos',
            name: 'Videos',
            component: Videos
        },
        {
            path: '/pictures',
            name: 'Pictures',
            component: Pictures
        },
        {
            path: '/vip',
            name: 'Vip',
            component: Vip
        },
        {
            path: '/auth/login',
            name: 'Login',
            component: Login
        }
    ]
});

// router.beforeEach((to, from, next) => {
//     let currentUser = firebase.auth().currentUser;
//     let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//     if (requiresAuth && !currentUser) next('login')
//     else if (!requiresAuth && currentUser) next('hello')
//     else next()
//   })

export default router;