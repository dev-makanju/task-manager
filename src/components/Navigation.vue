<template>
     <header>
          <div class="title-wrapper">
              <router-link to="/">
                  <h1>Task <span class="small-font">Timer</span></h1>
              </router-link>
          </div>
          <ul class="title-wrapper">
              <li v-if="!isMobile" class="link-wrapper">
                  <router-link  :to="{ name:'Home'}">Home</router-link>
              </li>
              <li v-if="!isMobile" class="link-wrapper">
                  <router-link :to="{ name:'signUp'}">Sign up</router-link>
              </li>
              <li v-if="!isMobile" class="link-wrapper">
                  <router-link :to="{ name:'signIn'}">Sign in</router-link>
              </li>
              <li v-if="!isMobile" class="link-wrapper">
                  <router-link :to="{name:'Task'}">Dashboard</router-link>
              </li>
              <li v-show="showHamburger" class="hamburger-wrapper">
                   <div class="link-wrapper">
                        <font-awesome-icon :icon="['fas', 'bars']"/>
                   </div>
                    <div class="link-wrapper">
                        <font-awesome-icon :icon="['fas', 'times']" />
                   </div>
              </li>
          </ul>
     </header>
</template>

<script>
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
            addEventListener('resize' , this.checkMobileDevice )
            this.checkMobileDevice();
        },
        methods:{
            checkMobileDevice(){
              this.screenWidth = window.innerWidth
              if(this.screenWidth <= 768 ){
                this.isMobile = true;
                this.showHamburger = true
                return;
              }this.isMobile = false ;
             this.showHamburger = false
            }
        },
        watch:{

        }
    }
</script>

<style scoped>

header{
    display: flex ;
    display: -webkit-box;
    display: -ms-flexbox;
    flex-direction: row ;
    align-items: center ;
    justify-content: space-between ;
    padding: .5rem  3rem;
    background: #eee;
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

ul li{
    padding: 5px 15px;
    font-size: 2rem;
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
}
</style>