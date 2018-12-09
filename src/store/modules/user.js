const state = {
    user: window.localStorage.getItem('gotrue.user'),
    userprofile: window.localStorage.getItem('userprofile')
};

const getters = {
    getUserStatus: state => !!state.user,
    getUserprofile: state => JSON.parse(state.userprofile)
};

//Mutations Must Be Synchronous
const mutations = {
    setUser: (state, currentUser) => {
        state.user = currentUser;
    },
    setUserprofile: (state, currentUserprofile) => {
        let profile = JSON.stringify(currentUserprofile);
        state.userprofile = profile;
        window.localStorage.setItem('userprofile', profile);
    }
};

const actions = {
    async updateUser({ commit }, payload) {
        await commit('setUser', payload.currentUser);
    },
    async updateUserprofile({ commit }, payload) {
        await commit('setUserprofile', payload.currentUserprofile);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}