import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        username: 'io',
    },
    actions: {
        setUsername(context, username) {
            context.commit('setUsername', username);
        }
    },
    mutations: {
        setUsername(state, username) {
            state.username = username;
        }
    },
})
