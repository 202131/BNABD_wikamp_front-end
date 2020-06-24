<template>
    <div class="text-center shadow p-3 mb-5 bg-light rounded-sm" id="login">
        <h2>Login to system</h2>
        <input type="text" class="form-control m-2" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" class="form-control m-2" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" class="btn btn-success m-3" v-on:click="login()">Login</button>
        <button type="button" class="btn btn-danger m-3" v-on:click="gotoOptionlogin()">Go Back</button>
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
                this.$router.replace({ name: "loginpage" });
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