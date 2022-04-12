import axios from 'axios'
import eventServices from '../../event/eventServices'
import router from '../../router'



const state = {
    token: localStorage.getItem("token") || '',
    user: {},
    status: '',
    load:null,
}

const getters = {
    isLoggedUserIn: (state) => !!state.token,
    user: (state) => state.user,
    authStatus: (state) => state.status,
}

const mutations = {
    auth_request(){
        state.status = "loading"
        console.log(state.token,'hello');
    },
    auth_info(state , payload){
        state.token = payload.token
        state.user = payload.user
        state.status = 'success'
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
    async login({commit} , user){
        try{
            commit('auth_request');
            const response = await eventServices.loginEvent(user);
            if(response.status){
                const token = response.data.token;
                const user = response.data.user;
                localStorage.setItem("token" , token);
                axios.defaults.headers.common['Authorization'] = token;
                const data = {
                    token: token,
                    user: user,
                }
                commit("auth_info", data ); 
            }
            return response; 
        }catch(err){
            return err.response
        }
    } ,     
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

    logout({commit}){
        localStorage.removeItem('token');
        router.push('/');
        commit('user_loggedout');
        location.reload();
    },

    async getUser({commit}){
        try{
          commit('auth_true');
          const response = await eventServices.getUserInfo();
          if(response.status){   
            const token = localStorage.getItem("token");
            const user = response.data.user;
            const data = {
                token: token,
                user: user,
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
