import Vue from 'vue'
import Vuex from 'vuex'
import auth from '../store/authService/auth'
import eventServices from '../event/eventServices'
Vue.use(Vuex)

export default new Vuex.Store({

  state: {
      taskLoaded: null, 
      postAdded: '',
      tasks: [],
      _id: "",
      title: "",
      description: "",
      status: "",
      created_at: "",
      updated_at: "",
      taskInput: "",
  },

  mutations: {
    SAFE_TASK(state , payload){
       state.tasks = payload; 
    },

    UPDATE_TASK(state , payload){
        state.tasks = state.tasks.filter(task => task._id === payload._id);
        state.tasks.title = payload.title;
        state.tasks.status = payload.status;
        state.tasks.created = payload.created;
        state.tasks.updated_at = payload.updated_at;
    },

    DELETE_TASK(state , payload){
        state.tasks = state.tasks.filter(task => task._id !== payload)
    },
    POST_CREATED(state){
       state.postAdded = 'success';
    }
  },

  actions:{  
    async editTask({commit} , payload){
      try{
        const response = await eventServices.updateTaskEvent(payload);
        if(response.data.success){
            commit('UPDATE_TASK' , payload)
        }
      }catch(err){
        this.errMessage = err.message;
      }
    },

    async deleteTask({commit} , payload){
      try{
        const response = await eventServices.deleteTaskEvent(payload);
        console.log(response)
        if(response.status){
           commit("DELETE_TASK" , payload)
        } 
        return response;
      }catch(err){
        return err.response
      }
    },

    async AddTask({commit} ,post){
      try{
        console.log(post)
        const response = await eventServices.createTask(post);
        if(response.status === 'success'){
          commit("POST_CREATED")
        }
        return response;
      }catch(err){
          return err.response
      }
    }
  },

  modules: {
    auth
  },  

});
