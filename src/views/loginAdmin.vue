<template>
    <div id="login">
        <h1>Login Admin</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
         <button type="button" v-on:click="gotoOptionlogin()">Go Back</button>
    </div>
</template>

<script>

    export default {
        name: 'LoginAdmin',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccountUser.username && this.input.password == this.$parent.mockAccountUser.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "AdminPage" });
                    } else {
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
            },
            gotoOptionlogin() {
                this.$router.replace({ name: "login" });
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