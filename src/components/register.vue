<template>
<div class="form-wrapper">
    <Loading v-if="loading" />
    <Modal v-if="modal" @close-modal="closeModal" :modalMessage="modalMessage"/>
    <div class="form-control">
        <div class="form-control header">
            <a href="/">
               <h1>Create Account</h1>
            </a>
        </div>
        <div  style="height:20px;">
            <span v-show="showError" style="color:#e74e3c;font-size:14px">{{ errorMessage }}</span>
        </div>
        <div class="form-control-inputs">
            <label for="email">Email:</label>
            <div class="det-wraps">
                <input type="email" 
                placeholder="Enter your email"
                id="email" 
                v-model.trim="$v.email.$model" :class="{ 'is-invalid':$v.email.$error, 'is-valid':!$v.email.$invalid }" >
                <font-awesome-icon class="icon" :icon="['fas', 'envelope-open-text']"/>
                <div v-if="$v.email.$error" class="error">
                    <span v-if="!$v.email.required">email is required</span> 
                    <span v-if="!$v.email.email">email is not valid</span>
                </div>
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
                        v-model.trim="$v.username.$model" :class="{ 'is-invalid':$v.username.$error, 'is-valid':!$v.username.$invalid }">
                        <font-awesome-icon class="icon" :icon="['fas', 'user-secret'] "/>
                        <div v-if="$v.username.$error" class="error">
                            <span v-if="!$v.username.required">username is required</span>
                            <span v-if="!$v.username.minLength">username must have at least {{ $v.username.$params.minLength.min }} letters</span>
                            <span v-if="!$v.username.maxLength">username must have at most {{ $v.username.$params.maxLength.max }} letters</span>
                        </div>
            </div>
        </div>
        <div class="form-control-inputs">
            <label for="email">Password:</label>
            <div class="det-wraps">
                    <input 
                        type="password" 
                        name="" 
                        id="password" 
                        placeholder="Enter your password"
                        v-model.trim="$v.password.$model" 
                        :class="{ 'is-invalid':$v.password.$error, 'is-valid':!$v.password.$invalid }">
                        <font-awesome-icon style="cursor:pointer" @click="toggleShowPassword" class="icon" :icon="['fas', showPassword ? 'eye-slash':'eye'] "/>
                        <div v-if="$v.password.$error" class="error">
                            <span v-if="!$v.password.required">password is required</span>
                            <span v-if="!$v.password.minLength">password must have at least {{ $v.password.$params.minLength.min }} numbers</span>
                        </div>
            </div>
        </div>
        <div class="form-control-inputs">
            <label for="password">Confirm Password:</label>
            <div class="det-wraps">
                <input 
                    type="password" 
                    name="" 
                    id="password"
                    placeholder="*************" 
                    v-model.trim="$v.confirmPassword.$model" 
                    :class="{ 'is-invalid':$v.confirmPassword.$error, 'is-valid':!$v.confirmPassword.$invalid }">
                    <font-awesome-icon class="icon" :icon="['fas', 'lock-open']"/>
                    <div v-if="$v.confirmPassword.$error" class="error">
                        <span v-if="!$v.password.required">confirm password is required</span>
                        <span v-if="!$v.password.sameAsPassword">confirm password is not a match!</span>
                    </div>
            </div>
        </div>
        <div class="form-control-inputs">
              <button class="btn btn-auth" @click="registerUser">Sign Up</button>
        </div>
        <p>Already a member?
            <router-link :to="{name:'signIn'}">login</router-link>
        </p>
    </div>
</div>    
</template>

<script>
import Loading from '../components/Loading.vue'
import Modal from './Modal.vue'
import {mapActions} from 'vuex'
import { required , minLength , maxLength  ,  email , sameAs}  from 'vuelidate/lib/validators'
export default {
    name:"register",
    components:{
        Loading,Modal
    },
    data(){
        return{
            email:"",
            username:"",
            password:"",
            confirmPassword:"",
            loading:null,
            modal: null,
            isModal:null,
            modalMessage:"",
            showPassword:null,
            errorMessage:"",
            showError:null,
        }
    },
    validations:{
        email:{
            required,
            email,
        },
        username:{
            required,
            minLength: minLength(3),
            maxLength: maxLength(10),
        },
        password:{
            required,
            minLength: minLength(8),
        },
        confirmPassword:{
            required,
            sameAsPassword: sameAs('password')
        }
    },
    methods:{
        ...mapActions(['register']),
        closeModal(){
            this.modal = !this.modal
            this.$router.push('/login');
        },
        modalActive(){
            this.modal = true;
        },
        registerUser(){
            this.$v.$touch()
            if(this.$v.$invalid !== true){
                let user = {
                    name: this.username, 
                    email: this.email,
                    password: this.password,
                    passwordConfirm:this.confirmPassword
                }
                this.loading = true
                this.register(user).then( res => {
                    this.errorMessage = '';
                    if(res.status === 200 ){
                        this.loading = false,
                        this.modalActive();
                    }this.loading = false,
                     this.showError = true;
                     this.errorMessage = res.data.message ;
                }).catch( err => {
                    this.loading = false,
                    this.showError = true
                        this.errorMessage = 'Oops, something went wrong!';    
                    setTimeout(() => {
                        this.showError = false
                        this.errorMessage = ''; 
                    }, 5000)
                    console.error(err);
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
 