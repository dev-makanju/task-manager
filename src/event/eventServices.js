import axios from 'axios'

const token = localStorage.getItem("token")
const apiClient = axios.create({
    baseURL:'https://mikepostapp.herokuapp.com/',
    headers:{
        'Access-Control-Allow-Origin':'',
        'Authorization': 'Bearer '+token,
    }
});

export default{
    loginEvent(user){
        return apiClient.post('auth/login' , user );
    },
    getUserInfo(){
        return apiClient.get('auth/me');
    },
    registerEvent(user){
        return apiClient.post('auth/signup' , user);
    },
    getSinglePostById(data){
        return apiClient.get('feed/post/'+ data);
    },
    createTask(data){     
        return apiClient.post('feed/post', data);
    },
    updateTaskEvent(data){
        return apiClient.patch(`feed/post/${data.id}`, data.post);
    },
    deleteTaskEvent(taskId){
        return apiClient.delete('feed/post/'+taskId);
    }
}
