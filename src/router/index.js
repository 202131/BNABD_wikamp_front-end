import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginAdminComponent from "../views/loginAdmin.vue"
import LoginUserComponent from "../views/loginUser.vue"
import LoginOptionsComponent from "../views/loginOptions.vue"
import AdminPageComponent from "../views/AdminPage.vue"
import UserPageComponent from "../views/UserPage.vue"

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: {
                name: "loginOptions"
            }
        },
        {
            path: "/loginOptions",
            name: "loginOptions",
            component: LoginOptionsComponent
        },
        {
            path: "/loginUser",
            name: "loginUser",
            component: LoginUserComponent
        },
        {
            path: "/loginAdmin",
            name: "loginAdmin",
            component: LoginAdminComponent
        },
        {
            path: "/AdminPage",
            name: "AdminPage",
            component: AdminPageComponent
        },
        {
            path: "/UserPage",
            name: "UserPage",
            component: UserPageComponent
        }
    ]
})