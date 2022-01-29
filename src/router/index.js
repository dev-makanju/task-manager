import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import signUp from "../views/signUp.vue"
import Notfound from "../views/error.vue"
import Register from "../views/signIn.vue"
import Dashboard from "../views/dashboard.vue"
import CreateTask from "../views/create-task.vue"
import Task from "../views/Tasks.vue"


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
    component:Register
  },
  {
    path: '/dashboard',
    name: 'Task',
    component: Dashboard ,
  },
  {
    path: '/dashboard/create-task',
    name: 'AddTask',
    component:CreateTask
  },
  {
    path: '/dashboard/tasks',
    name: 'allTask',
    component: Task
  },
  {
    path: '/:catchAll(.*)*',
    name: 'error',
    component: Notfound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
