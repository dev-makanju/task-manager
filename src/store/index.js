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
       state.tasks = payload 
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
    async getTask(){
      try{
        const response = await eventServices.getAllTask();
        if(response.status){
            console.log(response.data);
        }
      }catch(err){
           console.log(err)
      } 
    },

    async tryLogin(){
      try{
          const result = await eventServices.loginEvent({ email:'emmanuel' , Password:'emmanuel' })
          if(result){
             console.log(result)
          }
      }catch(err){
         console.log(err);
      }
    },

    async getAllTask( state , payload ){
        try{
          const response = await eventServices.getTaskEvent(payload);
          console.log(response);
          response.forEach(doc => {
            if(!state.tasks.some( task => task._id === doc._id)){
              const data = {
                  _id: doc._id,
                  title : doc.title,
                  status : doc.status,
                  created : doc.created,
                  updated_at : doc.updated_at,
              }
              state.tasks.push(data);
              return response;
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
