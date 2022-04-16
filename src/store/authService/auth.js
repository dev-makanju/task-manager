import axios from 'axios'
import eventServices from '../../event/eventServices'
import router from '../../router'

const state = {
    token: localStorage.getItem("token") || '',
    user: {},
    status: '',
    load:null,
    taskCount:0,
}

const getters = {
    isLoggedUserIn: (state) => !!state.token,
    user: (state) => state.user,
    authStatus: (state) => state.status,
}

const mutations = {
    auth_request(){
        state.status = "loading"
    },
    auth_info(state , payload){
        state.token = payload.token
        state.user = payload.user
        state.status = 'success'
        state.taskCount = payload.taskCount
    },
    register_req(){
        state.status = "loading"
    },
    register_success(){
        state.status = "success"
    },
    user_loggedout(){
        state.user = {} 
        state.status =''
    },
    auth_true(){
        state.load = true
    },
    auth_false(){
        state.load = false
    }
}

const actions = {
    //login user action
    async login({commit} , user){
        try{
            commit('auth_request');
            const response = await eventServices.loginEvent(user)
            if(response.status){
                const token = response.data.token;
                const user = response.data.user;
                const no_of_posts = response.data.no_of_posts
                const task = response.data.posts
                localStorage.setItem("token" , token);
                axios.defaults.headers.common['Authorization'] = token;
                const data = {
                    token: token,
                    user: user,
                    taskCount: no_of_posts,
                    tasks: task
                }
                commit("auth_info", data ); 
            }
            return response; 
        }catch(err){
            return err.response
        }
    } ,     
    //register new user action
    async register({ commit} ,user){
        try{
            commit("register_req")
            const response = await eventServices.registerEvent(user);
            if(response.status){
                commit("register_success")
            }
            return response
        }catch(err){
            return err.response
        }
    },
    //log user out of session
    logout({commit}){
        localStorage.removeItem('token');
        router.push('/');
        commit('user_loggedout');
        location.reload();
    },
    //get all user
    async getUser({commit}){
        try{
          commit('auth_true');
          const response = await eventServices.getUserInfo();
          if(response.status){   
            const token = localStorage.getItem("token");
            const user = response.data.user;
            console.log(user)
            const no_of_posts = response.data.no_of_posts
            const task = response.data.posts
            const data = {
                token: token,
                user: user,
                taskCount: no_of_posts,
                tasks: task 
            }  
            commit("auth_info",data)
            commit('auth_false');
          }
        }catch(err){
            return err.response
        }
    },
}


export default{
    state,
    getters,
    mutations,
    actions 
}
