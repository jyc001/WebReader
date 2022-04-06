import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ManageBookSource from "@/views/settings/ManageBookSource";

Vue.use(VueRouter)
const settingsUrl="/settings"
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: settingsUrl+"/manageBookSource",
    name: "ManageBookSource",
    component: ManageBookSource,
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
