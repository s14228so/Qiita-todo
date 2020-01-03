import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => {
    return new Vuex.Store({
        state: {
            currentUser: null,
        },
        mutations: {
            setUser(state, payload) {
                state.currentUser = payload
            },
        },
        actions: {
        }
    })
}

export default store