import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginAdminComponent from "../views/loginAdmin.vue"
import LoginComponent from "../views/Login.vue"
import AdminPageComponent from "../views/AdminPage.vue"
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
            path: "/loginAdmin",
            name: "loginAdmin",
            component: LoginAdminComponent
        },
        {
            path: "/AdminPage",
            name: "AdminPage",
            component: AdminPageComponent
        }
    ]
})