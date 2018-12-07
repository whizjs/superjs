let jwtDecode = require("jwt-decode");

const state = {
    user: window.localStorage.getItem('gotrue.user')
};

const getters = {
    getUser: state => state.user,
    getUserStatus: state => !!state.user
};

//Mutations Must Be Synchronous
const mutations = {
    setUser: (state, currentUser) => {
        state.User = currentUser;
    }
};

const actions = {
    updateUser: ({ commit }, payload) => {
        commit('setUser', payload.currentUser);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}