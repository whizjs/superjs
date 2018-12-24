import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';
import ApiDocs from '@/components/ApiDocs';

import GoogleSignIn from '@/components/meta/GoogleSignIn';

import Videos from '@/components/Videos';
import Pictures from '@/components/Pictures';
import Vip from '@/components/Vip';

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
            path: "/api-docs",
            name: "ApiDocs",
            component: ApiDocs
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
            path: '/meta',
            component: () => import('@/components/meta/Meta.vue'),
            children: [
                {
                    path: 'privacy-policy',
                    name: 'MetaPrivacyPolicy',
                    component: () => import('@/components/meta/PrivacyPolicy.vue')
                },
                {
                    path: 'terms-of-use',
                    name: 'MetaTermsOfUse',
                    component: () => import('@/components/meta/TermsOfUse.vue')
                },
                {
                    path: 'google-sign-in',
                    name: 'GoogleSignIn',
                    component: GoogleSignIn
                }
            ]
        },
        {
            path: '*',
            component: () => import('@/components/layout/NotFound.vue')
        }
    ]
});

export default router;