<template>
  <v-row>
    <v-col cols="12" md="4">
      <h2>Sign Up</h2>
      <form>
        <v-text-field v-model="name" :counter="10" label="Name" data-vv-name="name" required></v-text-field>
        <v-text-field v-model="email" :counter="20" label="Email" data-vv-name="email" required></v-text-field>
        <v-text-field
          v-model="password"
          label="password"
          data-vv-name="password"
          required
          :type="show1 ? 'text' : 'password'"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="show1 = !show1"
        ></v-text-field>
        <v-text-field
          v-model="passwordConfirm"
          label="passwordConfirm"
          data-vv-name="passwordConfirm"
          required
          :type="show2 ? 'text' : 'password'"
          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="show2 = !show2"
        ></v-text-field>
        <v-btn class="mr-4" @click="signup">submit</v-btn>
        <p v-for="(error,i) in errors" :key="i" class="errors">{{error}}</p>
      </form>
    </v-col>
  </v-row>
</template>
<script>
import firebase from "@/plugins/firebase";
import axios from "@/plugins/axios";
export default {
  data() {
    return {
      email: "",
      name: "",
      password: "",
      passwordConfirm: "",
      show1: false,
      show2: false
    };
  },
  computed: {
    errors() {
      return this.$store.state.errors;
    }
  },
  methods: {
    signup() {
      if (this.password !== this.passwordConfirm) {
        this.error = "※パスワードとパスワード確認が一致していません";
        return;
      }
      const payload = {
        email: this.email,
        password: this.password,
        name: this.name
      };

      this.$store.disptch("signUp", payload);
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