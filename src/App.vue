<template>
  <div id="app">
    <div id="nav" v-cloak>
        <Navigation v-cloak v-if="!showNavbar"/>
        <router-view/>
    </div>
    <Footer v-cloak v-if="!showNavbar"/>
  </div>
</template>
<script>

import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import { mapActions } from 'vuex'


export default {
    name:"rootApp",
    components:{
        Navigation , 
        Footer,
    },
    data(){
        return{
           showNavbar : null
        }
    },
    created(){
       this.checkRoute();
       const token = localStorage.getItem('token')
       if(token !== null){
           this.checkUser();
       }
    },
    methods:{
        ...mapActions(['getUser']),
        checkUser(){
           this.$store.dispatch('getUser')
        },
       checkRoute(){
            if(this.$route.name === "signIn" || 
             this.$route.name === "signUp" ||
             this.$route.name === "Task" || 
             this.$route.name === "AddTask" || 
             this.$route.name === "AllTask" ||
             this.$route.name === "EditTask" ||
             this.$route.name === "error"){

              this.showNavbar = true;
              return;
            }this.showNavbar = false;
       } 
    },
    watch:{
      $route(){
          this.checkRoute()
      }
    }

}
</script>

<style>
/**********
*Add fonts
**********/

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital@1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital@1&family=Montserrat:ital,wght@0,300;1,400&family=Roboto:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital@1&family=Montserrat:ital@1&family=Roboto:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital@1&family=Montserrat:ital,wght@0,300;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital@1&display=swap'); 
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=IM+Fell+English&family=Lora:ital@1&family=Mochiy+Pop+P+One&family=Rubik+Moonrocks&display=swap');


*{
  margin: 0;
  padding: 0;
}

p{
   color: #fff;
   padding: 0.6rem;
   border-radius: 10rem;
   text-transform: uppercase;
   display: inline-block;
   border-radius: 0.3rem;
   cursor: pointer;
   margin-top: 1rem;
   font-family: 'Merriweather', serif;
}


h1 , h2 , h3 , h4 , h5 , h6{
  color: #eee;
  padding: 0.6rem;
  border-radius: 10rem;
  text-transform: uppercase;
  display: inline-block;
  cursor: pointer;
  border-radius: 0.3rem;
  margin-top: 1rem;
  font-family: 'Merriweather', serif;
}


ul , ol , li , a {
  list-style-type: none ;
  text-decoration: none ;
  font-family: 'Merriweather', serif;
  font-weight:  400;
  color: rgb(33, 64, 138) ;
}


html {
   font-size: 62.5%;
   -webkit-box-sizing: border-box;
   box-sizing: border-box;
   min-height: 100% ;
   line-height: 1.7;
   outline: none;
}


body{
  line-height: 1.6;
  font-weight: 300;
  font-family: 'Lato', sans-serif;
  color: #777;
  min-height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox !important;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

#nav{
    display: flex;
    min-height: 100vh;
    -ms-flex-direction: column;
    flex-direction: column;
}

::selection{
  box-shadow: 0px 20px 5px rgba(0 , 0 , 0 .3);
  color: #fff;
}


::-webkit-scrollbar {
    width: 10px;
    background:lightgray;
}


::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgb(189, 198, 201); 
    border-radius: 17px;
}


::-webkit-scrollbar-thumb {
    border-radius: 17px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
    background:#e3e8e9;
} 


.btn{
   width: 100%;
   padding: 5px 10px;
   box-shadow: 0px 20xp 5px rgba(0 , 0 , 0 , .3);
   -webkit-box-shadow: 0px 20xp 5px rgba(0 , 0 , 0 , .3);
   border-radius: 5px;
   -webkit-border-radius: 5px;
   -moz-border-radius: 5px;
   -ms-border-radius: 5px;
}


/*****LOGIN AND REGISTER****/
.form-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    inset: 0 ;
    width: 100%;
    height: 100%;
}

.form-control{
    width: 40%;
    margin: 0px auto ;
}

@media only screen and (max-width: 800px) {
    .form-control{
        width: 80%;
    }
}

@media only screen and (max-width: 450px) {
    .form-control{
        width: 90%;
    }
}

.form-control p{
    color: #300;
    font-family: 'raleways' , sans-serif ;
    text-transform: lowercase;
    font-size: 17px;
    text-align: center;
    width: 100%;
    margin-top: 5px;
}

.form-control.header{
    padding: 20px 0px ;
    width: 100% ;
    background: #eee ;
}

.form-control.header h1{
    color:   rgb(33, 64, 138) ;
    padding: 0px 40px;
}

@media only screen and (max-width: 450px) {
    .form-control.header h1{
        padding: 0px 10px ;
    }
}

.form-control-inputs{
    margin-top: 10px;
    height: 80px;
}

.form-control-inputs label{
    font-size: 17px ;
    color:  rgb(33, 64, 138) ;
    display: block;
    display: -webkit-box;
}

.btn.btn-auth{
    margin-top: 1em ;
    background:  rgb(33, 64, 138) ;
    border: none ;
    padding: 7px;
    color: #eee;
    font-size: 17px;
    cursor: pointer ;
    outline: none ;
}

.det-wraps{
    position: relative ;
}

.icon{
    position: absolute ;
    font-size: 17px;
    padding: 7px;
    background: #eee;
    border-radius: 50%;
    right: 5px;
    top: 2px;
}

.error{
    color: #e74e3c ;
    font-size:12px;
}

.is-invalid{
    border: 1px solid #e74e3c !important;
}

.error__wrapper{
    border: 1px solid red ;
    background: #f3d8d5 ;
    border-radius: 5px;
    padding: 10px;
}

.error__wrapper p{
    color: red ;
    font-family: 'raleways' , sans-serif ;
}

.is-valid{
    border: 1px solid green !important;
}


.form-control-inputs input{
    width: 100% ;
    box-sizing: border-box;
    padding: 9px ;
    outline: none ;
    border-radius: 4px;
    border: 1px solid #000;
}

[v-cloak]{
   display: none;
}

</style>
