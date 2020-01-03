import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "@/plugins/firebase"
Vue.use(Vuex)

const store = () => {
    return new Vuex.Store({
        state: {
            currentUser: null,
            loading: false,
            notification: {
                status: false,
                message: ""
            }
        },
        mutations: {
            setUser(state, payload) {
                state.currentUser = payload
            },
            setLoading(state, payload) {
                state.loading = payload
            },
            setNotice(state, payload) {
                state.notification = payload
            }
        },
        actions: {
            login({
                commit,
            }, payload) {
                firebase
                    .auth()
                    .signInWithEmailAndPassword(payload.email, payload.password)
                    .then(() => {
                        commit("setNotice", {
                            status: true,
                            message: "ログインしました"
                        });
                        setTimeout(() => {
                            commit("setNotice", {});
                        }, 2000);
                        this.$router.push("/");
                    })
                    .catch(error => {
                        console.log(error);
                        this.error = (code => {
                            switch (code) {
                                case "auth/user-not-found":
                                    return "メールアドレスが間違っています";
                                case "auth/wrong-password":
                                    return "※パスワードが正しくありません";
                                default:
                                    return "※メールアドレスとパスワードをご確認ください";
                            }
                        })(error.code);
                    });
            }
        }
    })
}

export default store
