<template>
    <aside class="aside" id="aside">
            <div class="flex-item toggle-side">
            <div @click="$emit('close-navbar')" v-if="isAdminMobile" class="side-link-wrapper">
                <font-awesome-icon class="link-wrapper" :icon="['fas', 'arrow-left']"/>  
            </div>
            <div v-if="this.$store.state.auth.load" class="side-nav info">      
                    <vue-skeleton-loader
                        class="profile-icon"
                        type="circle"
                        :width="60"
                        :height="60"
                        animation="fade"/>
                    <ul class="user-info">
                        <vue-skeleton-loader
                           style="margin-top: 10px"
                           type="rect"
                           :width="100"
                           :height="10"
                           :rounded="true"
                           animation="fade"/>
                        <vue-skeleton-loader
                            style="margin-top: 10px"
                            type="rect"
                            :width="70"
                            :height="10"
                            :rounded="true"
                            animation="fade"/>
                    </ul>
            </div>
            <div v-if="!this.$store.state.auth.load" class="side-nav info">
                    <img class="profile-icon" src="../assets/userIcon.png">
                    <ul class="user-info">
                        <p>{{ user.name }}</p>
                        <span>Registered {{ user.role }}</span>
                    </ul>
            </div>
            <ul class="side-nav">
                    <li>
                        <router-link class="side-wraps" :to="{name:'Task'}">
                            <div class="wrap-child">
                                <font-awesome-icon :icon="['fas', 'home']"/>
                            </div> 
                            <div class="wrap-child">
                                <span>Dashboard</span>
                            </div>   
                            <div class="wrap-child">
                                <font-awesome-icon :icon="['fas' , 'paperclip']"/>
                            </div>         
                        </router-link>
                    </li>
                    <li>
                        <router-link class="side-wraps" :to="{name:'Home'}">
                            <div class="wrap-child">
                                <font-awesome-icon :icon="['fas', 'calendar-times']"/>
                            </div> 
                            <div class="wrap-child">
                                <span>Home</span>
                            </div>   
                            <div class="wrap-child">
                                <font-awesome-icon :icon="['fas' , 'paperclip']"/>
                            </div>         
                        </router-link>
                    </li>
                    <li>
                        <router-link class="side-wraps" :to="{name:'allTask'}">
                            <div class="wrap-child">
                                <font-awesome-icon :icon="['fas', 'tasks']"/>
                            </div> 
                             <div class="wrap-child">
                                <span>Task</span>
                            </div>   
                            <div class="wrap-child">
                                <font-awesome-icon :icon="['fas' , 'paperclip']"/>
                            </div>         
                        </router-link>
                    </li>

                     <li>
                        <router-link class="side-wraps" :to="{name:'AddTask'}">
                            <div class="wrap-child">
                                <font-awesome-icon :icon="['fas', 'plus']"/>
                            </div> 
                             <div class="wrap-child">
                                <span>Add Task</span>
                            </div>   
                            <div class="wrap-child">
                                <font-awesome-icon :icon="['fas' , 'paperclip']"/>
                            </div>         
                        </router-link>
                    </li>
                </ul>
            </div>

            <div @click="logUserOut" class="aside-text-overlay">
                  <font-awesome-icon  :icon="['fas' , 'sign-out-alt']"/> &nbsp;&nbsp; logout
            </div>
        </aside>
</template>

<script>
    import { mapGetters } from 'vuex'
    import VueSkeletonLoader from 'skeleton-loader-vue';
    export default {
        props:[ 'isAdminMobile' ],
        components:{
            VueSkeletonLoader 
        },
        methods:{
            logUserOut(){
                this.$store.dispatch('logout')   
            }
        },
        computed:{
            ...mapGetters(['user']),
        }
    }
</script>

<style scoped>

.aside{
    background: whitesmoke;
    box-shadow: 0px 2px 5px 3px rgba(13, 6, 214, 0.304);
    z-index: 111;
    grid-area: 'aside' ;
    display: flex ;
    flex-direction: column ;
    max-width: 240px;
    transition: all 1s ease;
}

@media (max-width:900px) {
    .aside{
       position: absolute ;
       top: 0px;
       bottom: 0px;
       width: 100%;
       left: -350px;
    }
    .aside.open{
       position: fixed;
       top: 0px;
       bottom: 0px;
       width: 100%;
       left: 0px ;
       z-index: 222;
    }
}

.side-link-wrapper{
    display: flex ;
    justify-content: flex-end ;
}

.link-wrapper{
    font-size: 14px;
    color: rgb(36, 81, 185);
    display: flex ;
    padding: 4px;
    cursor: pointer;
}

.side-wraps .wrap-child{
    color:  rgb(2, 40, 129);
}

.aside-text-overlay{
   position: absolute;
   bottom: 30px;
   left: 20px;
   display: flex ;
   justify-content:center;
   align-items: center;
   cursor: pointer;
   color:   rgb(2, 40, 129);
   font-size: 17px;
}

.aside-overlay{
    width: 200px;
    height: 200px;
    background:   rgb(121, 155, 224) ;
    border-radius: 50%;
    position: absolute;
    bottom: -90px;
    left: -100px;
}

.flex-item{
   padding: 20px 8px ;
   display: flex;
   flex-direction: column;
}    

.side-wraps{
   display: flex;
   flex-direction: row ;
   padding: 15px 20px;
   background: #eee;
   justify-content: space-between ;
   align-items: center;
   border-radius: 7px;
}

.ctext-info{
   display: flex ;
   margin-right: 30px;
}

.side-nav.flex{
    display: flex ;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}


.profile-icon{
    float: left;
}

.side-nav li{
    padding:10px 10px ;
    outline: none;
}

.wrap-child{ 
    font-size: 14px;
    /***font-family: ;**/
    font-weight: 500;
}


.user-info{
    display: flex;
    flex-direction: column ;
}

.user-info p{
    color:  rgb(2, 40, 129);
}

.user-info span{
    color:  rgb(2, 40, 129);
}

</style>