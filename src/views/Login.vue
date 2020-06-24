<template>
  <div class="text-center shadow p-3 mb-5 bg-light rounded-sm" id="login">
    <h2>Welcome to the Wikamp Beta version</h2>
    <button type="button" class="btn btn-warning m-3" v-on:click="gotoAdminlogin()">Login</button>
    <router-link class="btn btn-primary m-3" to="/">Faculty</router-link>
    <p>Access for employees and students of the University</p>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    gotoAdminlogin() {
      this.$router.replace({ name: "loginAdmin" });
    },
  }
};
</script>

<style scoped>
#login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>