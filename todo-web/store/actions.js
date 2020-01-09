import firebase from "@/plugins/firebase"
import axios from "@/plugins/axios"
const actions = {
    login({
        commit,
    }, payload) {
        const { email, password } = payload

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
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
                const errorMsg = (code => {
                    switch (code) {
                        case "auth/user-not-found":
                            return "メールアドレスが間違っています";
                        case "auth/wrong-password":
                            return "※パスワードが正しくありません";
                        default:
                            return "※メールアドレスとパスワードをご確認ください";
                    }
                })(error.code);
                commit("setErrors", errorMsg)
            });
    },
    signUp({
        commit,
    }, payload) {

        const { email, password, name } = payload

        commit("setLoading", true);

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(res => {
                const user = {
                    email: res.user.email,
                    name,
                    uid: res.user.uid
                };
                axios.post("/v1/users", { user }).then(res => {
                    commit("setLoading", false);
                    commit("setUser", res.data);
                    this.$router.push("/");
                });
            })
            .catch(error => {
                commit("setLoading", false);

                const errorMsg = (code => {
                    switch (code) {
                        case "auth/email-already-in-use":
                            return "既にそのメールアドレスは使われています";
                        case "auth/wrong-password":
                            return "※パスワードが正しくありません";
                        case "auth/weak-password":
                            return "※パスワードは最低6文字以上にしてください";
                        default:
                            return "※メールアドレスとパスワードをご確認ください";
                    }
                })(error.code);

                commit("setErrors", errorMsg)
            });

    }
}
export default actions;