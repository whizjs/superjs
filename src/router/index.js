import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';
import Videos from '@/components/Videos';
import Pictures from '@/components/Pictures';
import Jobs from '@/components/jobs/Jobs';

import Tools from '@/components/tools/Tools';

import Vip from '@/components/Vip';


import Login from '@/components/user/Login';
import Signup from '@/components/user/Signup';

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
            path: '/jobs',
            name: 'Jobs',
            component: Jobs
        },
        {
            path: '/tools',
            name: 'Tools',
            component: Tools
        },
        {
            path: '/vip',
            name: 'Vip',
            component: Vip
        },
        {
            path: '/user/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/user/signup',
            name: 'Signup',
            component: Signup
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