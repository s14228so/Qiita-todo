<template>
  <div v-if="user">
    <p>{{user.name}}</p>
    <li class="errors" v-for="(error, i) in errors" :key="i">{{error}}</li>
    <AddTodo @submit="addTodo" />
    <TodoList :todos="user.todos" />
  </div>
</template>

<script>
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import axios from "@/plugins/axios";
export default {
  components: {
    AddTodo,
    TodoList
  },
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.state.currentUser;
    },
    errors() {
      return this.$store.state.errors;
    }
  },
  fetch({ store, redirect }) {
    store.watch(
      state => state.currentUser,
      (newUser, oldUser) => {
        console.log({ newUser });
        if (!newUser) {
          return redirect("/login");
        }
      }
    );
  },
  methods: {
    async addTodo(todo) {
      try {
        const { data } = await axios.post("/v1/todos", { todo });
        this.$store.commit("setUser", {
          ...this.user,
          todos: [...this.user.todos, data]
        });
        this.$store.commit("clearErrors");
      } catch (error) {
        const { status } = error.response;
        if (status === 422) {
          this.$store.commit("setError", "タイトルが空です");
        }
      }
    }
  },
  destroyed() {
    this.$store.commit("clearErrors");
  }
};
</script>

<style scoped>
.errors {
  color: "red";
}
</style>