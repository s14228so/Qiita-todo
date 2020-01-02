<template>
  <v-row>
    <v-col cols="12" md="4">
      <h2>Login</h2>
      <form>
        <v-text-field
          v-model="name"
          v-validate="'required|max:10'"
          :counter="10"
          label="Name"
          data-vv-name="name"
          required
        ></v-text-field>
        <v-text-field v-model="password" label="password" data-vv-name="password" required></v-text-field>
        <v-btn class="mr-4" @click="submit">submit</v-btn>
      </form>
    </v-col>
  </v-row>
</template>
<script>
export default {};
</script>

<style>
</style>