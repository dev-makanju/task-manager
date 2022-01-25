<template>
<div class="form-wrapper">
    <Loading v-if="loading" />
    <Modal v-if="modal" :modalMessage="modalMessage" />
    <div class="form-control">
        <div class="form-control header">
             <a href="/">
                 <h1>Create Account</h1>
             </a>
        </div>
        <div class="form-control-inputs">
            <label for="email">Email:</label>
            <div class="det-wraps">
                <input type="email" 
                id="email" 
                placeholder="Enter your email" 
                v-model="email">

                <font-awesome-icon class="icon" :icon="['fas', 'envelope-open-text']"/>
                <div class="error">{{ validationError.userFailed }}</div>
            </div>
        </div>
        <div class="form-control-inputs">
            <label for="email">Username:</label>
            <div class="det-wraps">
                 <input 
                        type="text" 
                        name="" 
                        id="" 
                        placeholder="Enter your username"
                         v-model="username">

                 <font-awesome-icon class="icon" :icon="['fas', 'user-secret'] "/>
                 <div class="error">{{ validationError.emailFailed }}</div>
            </div>
        </div>
        <div class="form-control-inputs">
            <label for="password">Password:</label>
            <div class="det-wraps">
                 <input 
                 type="password" 
                 name="" 
                 id="password" 
                 placeholder="***************" 
                 v-model="password">

                 <font-awesome-icon class="icon" :icon="['fas', 'key']" />
                 <div class="error">{{ validationError.passwordFailed }}</div>
            </div>
        </div>
        <div class="form-control-inputs">
            <label for="password">Confirm Password:</label>
            <div class="det-wraps">
                 <input 
                 type="password" 
                 name="" 
                 id="password"
                 placeholder="***************" 
                 v-model="confirmPassword">
                 <font-awesome-icon class="icon" :icon="['fas', 'lock-open']" />
                 <div class="error">{{ validationError.confirmFailed }}</div>
            </div>
        </div>
        <div class="form-control-inputs">
              <button class="btn btn-auth" @click.prevent="registerUser">Sign Up</button>
        </div>
        <p>Already a member?
            <router-link :to="{name:'signIn'}">login</router-link>
        </p>
    </div>
</div>    
</template>

<script>
//import Loading from '../components/Loading.vue'
//import Modal from '../components/modal.vue'
import {mapActions} from 'vuex'
export default {
    name:"register",
    // components:{
    //     Loading,Modal
    // },
    data(){
        return{
            email:"",
            username:"",
            password:"",
            confirmPassword:"",
            loading:null,
            isModal:null,
            modalMessage:"",
            validationError:{
                userFailed:"",
                emailFailed:"",
                passwordFailed:"",
                confirmFailed:"",
            }
        }
    },
    methods:{
        ...mapActions(['register']),
        registerUser(){
            this.validationError.userFailed = ""
            this.validationError.emailFailed = ""
            this.validationError.passwordFailed = ""
            this.validationError.confirmFailed = ""

            if(this.email === ""){
                this.validationError.userFailed = 'email is required!'
            }
            if(this.username === ""){
                this.validationError.emailFailed = 'username is required!'
            }
            if(this.password === ""){
                this.validationError.passwordFailed = 'password is required!'
            }
            if(this.confirmPassword === ""){
                this.validationError.confirmFailed = 'confirm password is required!'
            }
            if(this.password !== this.confirmPassword){
                this.validationError.passwordFailed = 'confirm password is not a match!'
            }
            this.register().then( res => {
                if(res.data.success){
                    this.$router.push("/login")
                }
            }).catch(err => {
                console.log(err);
            })
        } ,
    }  
}
</script>
