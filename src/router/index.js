import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ManageBookSource from "@/views/settings/ManageBookSource";

Vue.use(VueRouter)
const settingsUrl = "/settings"
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta:{title:"首页——网络阅读"},

    },
    {
        path: settingsUrl + "/manageBookSource",
        name: "ManageBookSource",
        component: ManageBookSource,
        meta:{title:"书源管理"},
    },
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to,from,next) => {
    window.document.title = to.meta.title
    next()
})
export default router
