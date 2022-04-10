<template>
<div class="form-wrapper">
    <Loading v-if="loading"/>
     <div class="form-control">
        <div class="form-control header">
             <a href="/">
                 <h1>Login</h1>
             </a>
        </div>
        <div style="height:20px;">
            <span v-show="showError" style="color:#e74e3c;font-size:14px">{{ errorMessage }}</span>
        </div>
        <div class="form-control-inputs">
            <label for="email">Email:</label>
            <div class="det-wraps">
                <input type="email" 
                id="email" 
                placeholder="Enter your email" 
                v-model.trim="$v.email.$model" :class="{ 'is-invalid':$v.email.$error, 'is-valid':!$v.email.$invalid }" >
                <font-awesome-icon class="icon" :icon="['fas', 'envelope-open-text']"/>
                <div v-if="$v.email.$error" class="error">
                    <span v-if="!$v.email.required">email is required</span>
                    <span v-if="!$v.email.email">email is not valid</span>
                </div>
            </div>
        </div>
        <div class="form-control-inputs">
            <label for="password">Password:</label>
            <div class="det-wraps">
                    <input 
                    type="password" 
                    name="" 
                    id="password" 
                    placeholder="Enter your username"
                    v-model.trim="$v.password.$model" 
                    :class="{ 'is-invalid':$v.password.$error, 'is-valid':!$v.password.$invalid }">
                    <font-awesome-icon style="cursor:pointer" @click="toggleShowPassword" class="icon" :icon="['fas', showPassword ? 'eye-slash':'eye'] "/>
                    <div v-if="$v.password.$error" class="error">
                        <span v-if="!$v.password.required">password is required</span>
                    </div>
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
import  { required ,  email , }  from 'vuelidate/lib/validators'
export default {
    name:"Login",
    components:{
        Loading
    },
    data(){
    return{
            email:"",
            password:"",
            showPassword: null,
            loading:false,
            modalMessage:"",
            errorMessage:'',
            showError:null,
        }
    },
    validations:{
        email:{
            required,
            email,
        },
        password:{
            required,
        }
    },
    methods:{
        ...mapActions(['login']),
        logUserIn(){
            this.$v.$touch();
            if(this.$v.$invalid !== true){
                this.loading = true
                const user = {
                    email: this.email,
                    password: this.password
                }
                this.login(user).then(res => {
                    this.errorMessage = '';
                    if(res.status === 200 ){
                        this.loading = false
                        this.$router.push('/dashboard');
                    }this.loading = false,
                    this.showError = true;
                    this.errorMessage = res.data.message;
                }).catch(err => {
                    this.loading = false,
                    this.errorMessage = '';
                    this.errorMessage = 'Failed!, try again...';
                    console.log(err);
                });
            }
        },
        toggleShowPassword(){
            var password = document.getElementById('password');
            if(this.showPassword === false){
                this.showPassword = true
                password.type = "text"
            }else{
                this.showPassword = false
                password.type = "password"
            }
          }
        } 
    }
</script>
