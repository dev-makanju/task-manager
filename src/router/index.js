import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import signUp from "../views/signUp.vue";
import Notfound from "../views/error.vue";
import Register from "../views/signIn.vue";
import Dashboard from "../views/dashboard.vue";
import CreateTask from "../views/create-task.vue";
import Task from "../views/Tasks.vue";
import EditTask from "../views/EditTask.vue"
import store from "../store/authService/auth";

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
          title:'Home',
          requiresAuth: false ,
      }
    },
    {
      path: '/register',
      name: 'signUp',
      component: signUp,
      meta:{
          title:'Sign up',
          requiresAuth: false,
          requiresGuest: true,
      }
    },
    {
      path: '/login',
      name: 'signIn',
      component:Register,
      meta:{
          title:"Sign in",
          requiresAuth: false ,
          requiresGuest: true,
      }
    },
    {
      path: '/dashboard',
      name: 'Task',
      component: Dashboard ,
      meta:{
          title:'Tasks',
          requiresAuth: true ,
      }
    },
    {
      path: '/dashboard/create-task',
      name: 'AddTask',
      component:CreateTask,
      meta:{
        title:'Create-task',
        requiresAuth: true,
      }
    },
    {
      path: '/dashboard/edit/:slug',
      name: 'EditTask',
      component:EditTask,
      meta:{
        title:'Edit',
        requiresAuth: true ,
      }
    },
  {
      path: '/dashboard/tasks',
      name: 'AllTask',
      component: Task,
      meta:{ 
          title: 'Task',
          requiresAuth: true , 
      }
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

router.beforeEach((to , from , next) => {
  const user = store.state.token  
  if(to.matched.some(res => res.meta.requiresAuth)){
    if(user == ''){
        return next({name:'signIn'});
    }
    next();
  }else{
       return next()
  }
})

router.beforeEach((to , from , next) => {
    const user = store.state.token  
    if(to.matched.some(res => res.meta.requiresGuest)){
      if(user !== ''){
          return next({name:'Task'});
      }
      next();
    }else{
         return next()
    }
})


export default router
