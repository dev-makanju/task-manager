<template>
<div class="form-wrapper">
    <Loading v-if="loading"/>
     <div class="form-control">
        <div class="form-control header">
             <a href="/">
                 <h1>Login</h1>
             </a>
        </div>
        <div class="form-control-inputs">
            <label for="email">Email:</label>
            <div class="det-wraps">
                <input 
                    type="email"
                    name="" 
                    id="email" 
                    placeholder="Enter your email"
                    v-model="email"
                    autocomplete="off">
                <font-awesome-icon class="icon" :icon="['fas', 'envelope-open-text']"/>
                <div class="error">{{ validationError.emailFailed }}</div>
            </div>
        </div>
        <div class="form-control-inputs">
            <label for="password">Password:</label>
            <div class="det-wraps">
                 <input 
                 type="password" 
                 id="password" 
                 placeholder="***************"
                 v-model="password"
                 autocomplete="off"
                 >
                 <font-awesome-icon class="icon" :icon="['fas', 'lock-open']" />
                 <div class="error">{{ validationError.passwordFailed }}</div>
            </div>
        </div>
        <div class="form-control-inputs">
              <button @click.prevent="logUserIn()" class="btn btn-auth">Login</button>
        </div>
        <p>Need an account?
            <router-link :to="{name:'signUp'}">register here</router-link>
        </p>
    </div>
</div>
</template>

<script>
import Loading from '../components/Loading.vue'
import { mapActions } from 'vuex'
export default {
    name:"Login",
    components:{
        Loading
    },
    data(){
    return{
        email:"",
        password:"",
        loading:false,
        modalMessage:"",
          validationError:{
              emailFailed:"",
              passwordFailed:"",
          }
        }
    },
    methods:{
        ...mapActions(['login']),
        logUserIn(){
            this.validationError.emailFailed = ""
            this.validationError.passwordFailed = ""

            if(this.email === ""){
                this.validationError.emailFailed = 'email is required!'
                if(this.password === ""){
                    this.validationError.passwordFailed = 'password is required!'
                }
            }else{
                this.loading = true
                const user = {
                     email: this.email,
                     password: this.password
                }
                this.loading = true
                this.login(user).then(res => {
                    if(res.data.success){
                       this.loading = false
                       this.$router.push('/dashboard')
                    }
                }).catch(err => {
                    console.log(err)
                })
            }
        } 
    }
}
</script>
