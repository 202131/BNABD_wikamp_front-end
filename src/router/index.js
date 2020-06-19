import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginAdminComponent from "../views/loginAdmin.vue"
import LoginUserComponent from "../views/loginUser.vue"
import LoginComponent from "../views/Login.vue"
import AdminPageComponent from "../views/AdminPage.vue"
import UserPageComponent from "../views/UserPage.vue"
import Faculty from "../components/Faculty.vue"
import 'bootstrap';

Vue.use(VueRouter)

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            name: "loginpage",
            alias: "/login",
            component: LoginComponent,
            children: [
            {
                    path: "faculty/:id",
                    name: "faculty-details",
                    component: Faculty,
                    props: true
                }
            ]
        },
        {
            path: "/login",
            name: "Login",
            component: LoginComponent
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