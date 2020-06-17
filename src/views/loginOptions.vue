<template>
    <div id="login">
        <h1 center>Login As :</h1>
        
        <button type="button" v-on:click="gotoAdminlogin()">Admin</button>
        <button type="button" v-on:click="gotoUserlogin()">User</button>
    </div>
</template>

<script>
    export default {
        name: 'LoginOptions',
        methods: {
            gotoAdminlogin() {
                this.$router.replace({ name: "loginAdmin" });
            },
            gotoUserlogin() {
                this.$router.replace({ name: "loginUser" });
            }
            
        }
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>