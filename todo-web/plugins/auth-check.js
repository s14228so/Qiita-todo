import firebase from "@/plugins/firebase"
import axios from "@/plugins/axios"

const authCheck = ({ store, redirect }) => {
    firebase.auth().onAuthStateChanged(async user => {
        if (user) {
            console.log("ユーザーイ流よ")
            const { data } = await axios.get(`/v1/users?uid=${user.uid}`)
            store.commit("setUser", data)
        } else {
            console.log("ユーザーイナヨ")
            store.commit("setUser", null)
        }
    });
}

export default authCheck