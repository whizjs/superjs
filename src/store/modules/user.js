import { loginAuth0 } from '@/helpers/auth0';

const state = {
    id_token: window.localStorage.getItem('superjs_auth0_id_token'),
    access_token: window.localStorage.getItem('superjs_auth0_access_token'),
};

const getters = {
    isLoggedIn: state => !!state.id_token,
    hasAccess: state => !!state.access_token,
    getIdToken: state => state.id_token,
    getAccessToken: state => state.access_token
};

//Mutations Must Be Synchronous
const mutations = {
    setIdToken: (state, token) => {
        state.id_token = token;
    },
    setAccessToken: (state, token) => {
        state.access_token = token;
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
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}