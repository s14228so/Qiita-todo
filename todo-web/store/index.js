import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => {
    return new Vuex.Store({
        state: {
            currentUser: null,
            loading: false
        },
        mutations: {
            setUser(state, payload) {
                state.currentUser = payload
            },
            setLoading(state, payload) {
                state.loading = payload
            }
        },
        actions: {
        }
    })
}

export default store