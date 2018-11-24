import { loginAuth0 } from '@/helpers/auth0';

const state = {
    id_token: window.localStorage.getItem('superjs_auth0_id_token'),
    access_token: window.localStorage.getItem('superjs_auth0_access_token'),
    username: window.localStorage.getItem('superjs_auth0_username'),
    email_verified: window.localStorage.getItem('superjs_auth0_email_verified'),
};

const getters = {
    isLoggedIn: state => !!state.id_token,
    hasAccess: state => !!state.access_token,
    getIdToken: state => state.id_token,
    getAccessToken: state => state.access_token,
    getUsername: state => state.username,
    getEmailVerificationStatus: state => state.email_verified
};

//Mutations Must Be Synchronous
const mutations = {
    setIdToken: (state, token) => {
        state.id_token = token;
    },
    setAccessToken: (state, token) => {
        state.access_token = token;
    },
    setUsername: (state, username) => {
        state.username = username
    },
    setEmailVerificationStatus: (state, email_verified) => {
        state.email_verified = email_verified
    }
};

const actions = {
    loginWithAuth0() {
        loginAuth0();
    },

    finalizeAuth0Login: ({ commit }, payload) => {

        commit('setIdToken', payload.my_id_token);
        window.localStorage.setItem('superjs_auth0_id_token', payload.my_id_token);

        commit('setAccessToken', payload.my_access_token);
        window.localStorage.setItem('superjs_auth0_access_token', payload.my_access_token);

    },

    logout: ({ commit }) => {
        commit('setIdToken', null);
        commit('setAccessToken', null);
        window.localStorage.removeItem('superjs_auth0_id_token');
        window.localStorage.removeItem('superjs_auth0_access_token');
    },

    updateUsername: ({ commit }, payload) => {
        commit('setUsername', payload.nickname);
        window.localStorage.setItem('superjs_auth0_username', payload.nickname);
    },

    updateEmailVerificationStatus: ({ commit }, payload) => {
        commit('setEmailVerificationStatus', payload.email_verified);
        window.localStorage.setItem('superjs_auth0_email_verified', payload.email_verified);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}