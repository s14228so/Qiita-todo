<template>
  <v-row>
    <v-col cols="12" md="4">
      <h2>Sign Up</h2>
      <form>
        <v-text-field v-model="name" :counter="10" label="Name" data-vv-name="name" required></v-text-field>
        <v-text-field v-model="email" :counter="20" label="Email" data-vv-name="email" required></v-text-field>
        <v-text-field v-model="password" label="password" data-vv-name="password" required></v-text-field>
        <v-btn class="mr-4" @click="submit">submit</v-btn>
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
      name: "",
      password: "",
      error: ""
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(res => {
          console.log(res.user);
        })
        .catch(error => {
          this.error = (code => {
            switch (code) {
              case "auth/email-already-in-use":
                return "※既にそのメールアドレスは使われています";
              case "auth/wrong-password":
                return "※パスワードが正しくありません";
              case "auth/weak-password":
                return "※パスワードは最低6文字以上にしてください";
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