<template>
    <header>
        <div class="header">
            <div class="title-wrapper">
              <router-link to="/">
                  <h1>Task<span class="small-font">Manager</span></h1>
              </router-link>
          </div>
          <ul class="title-wrapper">
              <li v-if="!isMobile" class="link-wrapper">
                  <router-link  :to="{ name:'Home'}">Home</router-link>
              </li>
              <span v-if="isLoggedUserIn !== true">
                   <li v-if="!isMobile" class="link-wrapper">
                      <router-link :to="{ name:'signUp'}">Sign up</router-link>
                   </li>
              </span>
              <span v-if="isLoggedUserIn !== true">
                  <li v-if="!isMobile" class="link-wrapper">
                     <router-link :to="{ name:'signIn'}">Sign in</router-link>
                 </li>
              </span>
              <li v-if="!isMobile" class="link-wrapper">
                  <router-link v-if="isLoggedUserIn" :to="{name:'Task'}">Dashboard</router-link>
              </li>
              <li v-show="showHamburger" class="hamburger-wrapper">
                   <div v-if="!showNavbar" @click="toggleNavbar" class="link-wrapper">
                        <font-awesome-icon :icon="['fas', 'bars']"/>
                   </div>
                    <div v-if="showNavbar" @click="toggleNavbar" class="link-wrapper">
                        <font-awesome-icon :icon="['fas', 'times']" />
                   </div>
              </li>
          </ul>
          <transition name="mobile-nav">
            <ul v-if="showNavbar" class="title-wrapper-mobile">
              <li class="link-wrapper">
                  <router-link  :to="{ name:'Home'}">Home</router-link>
              </li>
              <li v-if="isLoggedUserIn !== true" class="link-wrapper">
                  <router-link :to="{ name:'signUp'}">Sign up</router-link>
              </li>
              <li v-if="isLoggedUserIn !== true" class="link-wrapper">
                  <router-link :to="{ name:'signIn'}">Sign in</router-link>
              </li>
              <li class="link-wrapper">
                  <router-link v-if="isLoggedUserIn" :to="{name:'Task'}">Dashboard</router-link>
              </li> 
          </ul>
          </transition>
        </div>
     </header>
</template>

<script>
    import { mapGetters } from 'vuex'
    
    export default {
        name:"",
        props:[],
        data(){
            return{
                isMobile: null,
                screenWidth: null,
                showHamburger: null,
                showNavbar: null
            }
        },
        created(){
            addEventListener('resize' , this.checkMobileDevice)
            this.checkMobileDevice();
        },
        methods:{
            checkMobileDevice(){
              this.screenWidth = window.innerWidth
              if(this.screenWidth <= 768 ){
                this.isMobile = true;
                this.showHamburger = true;
                return;
              }this.isMobile = false;
             this.showHamburger = false
            },
            toggleNavbar(){
                this.showNavbar = !this.showNavbar
            }
        },
        computed:{
            ...mapGetters(['isLoggedUserIn'])
        }
    }
</script>

<style scoped>
header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #eee;
    z-index: 111;
    border-bottom: 2px solid rgba(0, 0, 255, 0.297) ;
}

.header{
    display: flex ;
    display: -webkit-box;
    display: -ms-flexbox;
    flex-direction: row ;
    align-items: center ;
    justify-content: space-between;
    padding: .2rem  3rem;
    max-width: 1440px;
    width: 80%;
    margin: 0px auto;
}

@media (max-width: 1024px) {
    .header{
        width: 90%;
    }
}

@media only screen and (max-width: 768px) {
   header{
       padding: .5rem;
   }
}

.title-wrapper h1{
    font-size: 2.5rem;
    color: rgb(36, 81, 185);
    font-family: 'Montserrat' serif;
}

.small-font{
    font-size: 12px;
}

ul.title-wrapper{
    display: flex ;
    display: -webkit-box;
    display: -ms-flexbox;
    flex-direction: row ;
    align-items: center ;
    justify-content: space-between ;
    list-style-type: none ;
}

ul.title-wrapper-mobile{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    background: #eee;
    z-index: 1111;
    padding: 50px 20px;
}

ul li{
    padding: 3px 10px;
    font-size: 1.5rem;
    font-weight: bold;
    color: blue;
}


.hamburger-wrapper{
    position: relative;
    padding: 7px;
    width: 25px;
    height: 20px;
}

.hamburger-wrapper .link-wrapper{
    position: absolute;
    top: 0 ;
    font-size: 24px ;
    cursor: pointer;
    z-index: 2222;
    
}



        /*****
        **Add transitionn to the mobile navbar
        **
        ***/
        .mobile-nav-enter-active,
        .mobile-nav-leave-active{
            transition: all 1s ease;
        }

        .mobile-nav-enter{
            transform: translateY(-250px);
        }

        .mobile-nav-enter-to{
            transform: translateY(0);
        }

        .mobile-nav-leave-to{
            transform: translateY(-250px);
        }
</style>