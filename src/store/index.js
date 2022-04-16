import Vue from 'vue'
import Vuex from 'vuex'
import auth from '../store/authService/auth'
import eventServices from '../event/eventServices'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      taskLoaded:null, 
      tasks:[],
      _id:"",
      title:"",
      description:"",
      status:"",
      created_at:"",
      updated_at:"",
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
    }
  },

  actions:{  

    async getAllTask(context){
        try{
          const response = await eventServices.getTaskEvent();
          //get current user id to get the user task post
          const user_id = this.state.auth.user._id;
          console.log(user_id)
          response.data.posts.forEach(doc => {
            if( user_id === doc.creator._id){
              console.log('true');
              const data = {
              //     _id: doc._id,
              //     title : doc.title,
              //     status : doc.status,
              //     created : doc.created,
              //     updated_at : doc.updated_at,
              }
              context.state.tasks.push(data);
            }
          });
        }catch(err){
            this.errMessage = err.message;
        }
    },

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
         if(response.data.success){
            commit("DELETE_TASK" , payload)
         } 
      }catch(err){
        this.errMessage = err.message
      }
    },

    async createNewTask(data){
       try{
          const response = await eventServices.createTask(data);
          if(response.status ===   'success'){
              console.log('Created!!!');
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
