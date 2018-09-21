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
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}