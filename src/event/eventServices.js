import axios from 'axios'

const apiClient = axios.create({
    //baseURL:'https://mikepostapp.herokuapp.com/',//
    headers:{
        'Access-Control-Allow-Origin':'*',
    }
})

export default{
    loginEvent(user){
        return apiClient.post('auth/login' , user );
    },
    getUserInfo(){
        return apiClient.get('auth/me')
    },
    registerEvent(user){
        return apiClient.post('auth/signup' , user );
    },
    getTaskEvent(){
        return apiClient.get('feed/posts');
    },
    updateTaskEvent(taskId){
        return apiClient.put('task' , taskId );
    },
    deleteTaskEvent(taskId){
        return apiClient.delete('task' , taskId);
    }
}
