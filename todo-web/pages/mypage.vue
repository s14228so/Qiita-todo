<template>
  <div>
    <div v-if="user">
      <p>Email: {{user.email}}</p>
      <p>ユーザー名: {{user.name}}</p>
    </div>
    <v-btn @click="logOut">ログアウト</v-btn>
  </div>
</template>

<script>
import firebase from "@/plugins/firebase";
export default {
  computed: {
    user() {
      return this.$store.state.currentUser;
    }
  },
  fetch({ store, redirect }) {
    if (!store.state.currentUser) {
      return redirect("/login");
    }
  },
  methods: {
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/login");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style>
</style>