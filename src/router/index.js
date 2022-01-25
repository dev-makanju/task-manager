import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import signUp from "../views/signUp.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'signUp',
    component: signUp
  },
  {
    path: '/login',
    name: 'signIn',
    component: () => import('../views/signIn.vue')
  },
  {
    path: '/dashboard',
    name: 'Task',
    component: () => import('../views/Task.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
