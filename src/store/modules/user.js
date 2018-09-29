import axios from 'axios';
import router from '../../router';

const BASE_URL = 'http://127.0.0.1:8000/api';

const state = {
    token: window.localStorage.getItem('superjs_auth_token')
};

const getters = {
    isLoggedIn: state => !!state.token
};

//Mutations Must Be Synchronous
const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};

const actions = {
    async login({ commit }, payload) {

        const LOGIN_URL = BASE_URL + '/auth/login';
        const LOGIN_DATA = payload.credentials;

        let resp = await axios({
            method: 'post',
            url: LOGIN_URL,
            data: LOGIN_DATA
        });
        // console.log(resp.data.token);
        commit('setToken', resp.data.token);
        window.localStorage.setItem('superjs_auth_token', resp.data.token);
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