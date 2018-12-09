const state = {
    userprofile: window.localStorage.getItem('userprofile')
};

const getters = {
    getUserStatus: state => !!state.userprofile,
    getUserprofile: state => JSON.parse(state.userprofile)
};

//Mutations Must Be Synchronous
const mutations = {
    setUserprofile: (state, currentUserprofile) => {
        if (!currentUserprofile) {
            state.userprofile = null;
            window.localStorage.removeItem('userprofile');
            return;
        }
        let profile = JSON.stringify(currentUserprofile);
        state.userprofile = profile;
        window.localStorage.setItem('userprofile', profile);
    }
};

const actions = {
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