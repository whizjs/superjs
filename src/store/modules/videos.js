import axios from "axios";

const API_KEY = "AIzaSyBIdels2r6lBo0SVDptMtBMA-YuePvfats";

const state = {
    videos: []
};

const getters = {
    getVideos: state => state.videos
};

//Mutations Must Be Synchronous
const mutations = {
    setVideos: (state, newVideos) => {
        state.videos = newVideos;
    }
};

const actions = {
    async getYouTubeVideos({ commit }, payload) {

        const keyword = payload.keyword;
        const ytURL = "https://www.googleapis.com/youtube/v3/search";

        const newVideos = await axios.get(ytURL, {
            params: {
                key: API_KEY,
                type: "video",
                part: "snippet",
                q: keyword,
                maxResults: 8 //optional
            }
        });

        commit('setVideos', newVideos.data.items);

    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}