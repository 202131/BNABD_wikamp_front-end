<template>
  <div id="app">
    <div id="nav">
      <router-link v-if="authenticated" to="/loginpage" v-on:click.native="logout()" replace>Logout</router-link>
    </div>
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      authenticated: false,
      mockAccountUser: {
        username: "nraboy",
        password: "password"
      }
    };
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: "loginpage" });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    }
  }
};
</script>

<style>
body {
  background-image: url("~@/assets/main.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
h1 {
  padding: 0;
  margin-top: 0;
}
#app {
  width: 1024px;
  margin: auto;
}
</style>