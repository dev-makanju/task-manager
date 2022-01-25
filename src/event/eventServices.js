import axios from 'axios'

const apiClient = axios.create({
    baseURL:'https://taskmanagermike.herokuapp.com/api/v1/',
    headers:{
        'Access-Control-Allow-Origin': '' ,
    }
})

export default{
    loginEvent(user){
        return apiClient.post('login' , user );
    },
    registerEvent(user){
        return apiClient.post('signup' , user );
    }
}
