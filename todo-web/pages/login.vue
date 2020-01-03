<template>
  <v-row>
    <v-col cols="12" md="4">
      <h2>Login</h2>
      <form>
        <v-text-field v-model="email" :counter="20" label="email" data-vv-name="email" required></v-text-field>
        <v-text-field
          v-model="password"
          label="password"
          data-vv-name="password"
          required
          :type="show1 ? 'text' : 'password'"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="show1 = !show1"
        ></v-text-field>
        <v-btn class="mr-4" @click="login">submit</v-btn>
        <p v-if="error" class="errors">{{error}}</p>
      </form>
    </v-col>
  </v-row>
</template>
<script>
import firebase from "@/plugins/firebase";
export default {
  data() {
    return {
      email: "",
      password: "",
      show1: false,
      error: ""
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
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
};
</script>
<style scoped>
.errors {
  color: red;
  margin-top: 20px;
}
</style>