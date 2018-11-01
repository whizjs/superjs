import axios from 'axios';
import router from '@/router';
import auth0 from '@/helpers/auth0';

const BASE_URL_DEV = 'http://127.0.0.1:8000/api';
const BASE_URL_PROD = 'HTPP://api.fuliapi.com/api';

let BASE_URL = process.env.NODE_ENV == 'production' ? BASE_URL_PROD : BASE_URL_DEV;

const state = {
    token: window.localStorage.getItem('superjs_auth_token')
};

const getters = {
    isLoggedIn: state => !!state.token,
    getToken: state => state.token
};

//Mutations Must Be Synchronous
const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};

const actions = {
    loginWithAuth0() {
        auth0.login();
    },
    async signupWithLocal({ commit }, payload) {
        const SIGNUP_URL = BASE_URL + '/auth/signup';
        const SIGNUP_DATA = payload.signupData;

        let resp = await axios({
            method: 'post',
            url: SIGNUP_URL,
            data: SIGNUP_DATA
        });

        commit('setToken', resp.data.data.token);
        window.localStorage.setItem('superjs_auth_token', resp.data.data.token);
        router.push('/');


    },
    async login({ commit }, payload) {

        const LOGIN_URL = BASE_URL + '/auth/login';
        const LOGIN_DATA = payload.credentials;

        let resp = await axios({
            method: 'post',
            url: LOGIN_URL,
            data: LOGIN_DATA
        });

        commit('setToken', resp.data.data.token);
        window.localStorage.setItem('superjs_auth_token', resp.data.data.token);
        router.push('/');
    },

    logout: ({ commit }) => {
        commit('setToken', null);
        window.localStorage.removeItem('imgur_token');
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}