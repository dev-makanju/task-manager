import axios from 'axios'
import eventServices from '../../event/eventServices'

const state = {
    token: localStorage.getItem("token") || "",
    user(){},
    status:""
}

const getters = {
    isLoggedUserIn: (state) => !!state.token,
    user: (state) => state.user,
    authStatus: (state) => state.status
}

const mutations = {
    auth_request(){
        state.status = "loading"
    },
    auth_info(token , user){
        state.token = token
        state.user = user
    },
    register_req(){
        state.status = "loading"
    },
    register_success(){
        state.status = "success"
    }

}

const actions = {
    async login({commit} , user){
        try{
            commit('auth_request')
            const response = await eventServices.loginEvent(user);
            if(response.data.success){
                const token = response.data.token;
                const user = response.data.user;
                localStorage.setItem("token" , token);
                axios.defaults.headers.common['Authorization'] = token
                commit("auth_info" , token , user ) 
            }
            return response;
        }catch(err){
            console.log(err)
        }
    } , 
    async register({ commit} ,user){
        try{
            commit("register_req")
            const response = await eventServices.registerEvent(user);
            if(response.data.success !== undefined ){
                commit("register_success")
            }
            return response
        }catch(err){
            console.log(err)
        }
    }
}


export default{
    state,
    getters,
    mutations,
    actions 
}
