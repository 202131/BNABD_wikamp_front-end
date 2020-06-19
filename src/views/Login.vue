<template>
  <div class="text-center shadow p-3 mb-5 bg-light rounded-sm" id="login">
    <h2>Login As:</h2>
    <button type="button" class="btn btn-warning m-3" v-on:click="gotoAdminlogin()">Admin</button>
    <button type="button" class="btn btn-success m-3" v-on:click="gotoUserlogin()">User</button>
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
    gotoUserlogin() {
      this.$router.replace({ name: "loginUser" });
    }
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