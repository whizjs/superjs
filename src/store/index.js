import Vue from 'vue'
import Vuex from 'vuex'
import videos from './modules/videos'

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    modules: {
        videos
    }
});
