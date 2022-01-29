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
    component: Home,
    meta:{
        title:'Home'
    }
  },
  {
    path: '/register',
    name: 'signUp',
    component: signUp,
    meta:{
        title:'Sign up'
    }
  },
  {
    path: '/login',
    name: 'signIn',
    component:Register,
    meta:{
        title:"Sign in"
    }
  },
  {
    path: '/dashboard',
    name: 'Task',
    component: Dashboard ,
    meta:{
        title:'Tasks'
    }
  },
  {
    path: '/dashboard/create-task',
    name: 'AddTask',
    component:CreateTask,
    meta:{
      title:'Create-task'
    }
  },
  {
    path: '/dashboard/tasks',
    name: 'allTask',
    component: Task
  },
  {
    path: '/:catchAll(.*)*',
    name: 'error',
    component: Notfound,
    meta:{
        title:'404-notfound'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to , from , next) => {
  let titleDocument = `Task-manager - ${ to.meta.title }` ;
  document.title = titleDocument
  next();
});

export default router
