<template>
    <main class="main">
            <div class="main-overview">
                <adminHeader @open-navbar="$emit('open-navbar')" :isAdminMobile="isAdminMobile"/>
                <!---middle card design-->      
                        <div class="middle-design-wrapper cards-design">
                            <div class="right-bar-card">
                                <div class="rightbar-card">
                                    <div class="one"></div>
                                    <div class="two"></div>
                                    <div class="three"></div>
                                    <div class="four"></div>
                                    <div class="five"></div>
                                    <div class="six"></div>
                                    <div class="seven"></div>
                                </div>
                                <div v-if="this.$store.state.auth.load" class="task-wrapp">
                                    <h1 style="font-size: 40px;">
                                        <vue-skeleton-loader
                                            type="rect"
                                            :width="70"
                                            :height="10"
                                            animation="fade"/>
                                    </h1>
                                    <div class="ctext-info">
                                        <h1>
                                            <vue-skeleton-loader
                                                type="rect"
                                                :width="70"
                                                :height="10"
                                                animation="fade"/>
                                        </h1>
                                    </div>    
                                </div>
                                <div v-if="!this.$store.state.auth.load" class="task-wrapp">
                                    <h1 style="font-size: 40px;">{{ getCurrentTime() }}</h1>
                                    <div class="ctext-info">
                                        <h1>Hello, &nbsp; {{ user.name }}</h1>
                                    </div>    
                                </div>
                           </div>
                    </div>
                    <div class="middle-design-wrapper new-task">
                        <div class="item-wrapper">
                           <h2 class="weekly-text">Weekly Tasks</h2>
                        </div>
                    </div>
                    
                <div class="get-all-task">

                <ul class="side-nav">
                    <li>
                        <router-link class="side-wraps t-center" to="#">
                            <div class="wrap-child t-icon">
                                <font-awesome-icon  :icon="['fas', 'search-dollar']"/>
                            </div> 
                            <div class="wrap-child">
                                <span>Marketing</span>
                            </div>        
                        </router-link>
                    </li>
                    <li>
                        <router-link class="side-wraps t-center" to="#">
                            <div class="wrap-child t-icon">
                                <font-awesome-icon :icon="['fas', 'layer-group']"/>
                            </div> 
                            <div class="wrap-child">
                                <span>Developing</span>
                            </div>           
                        </router-link>
                    </li>
                    <li>
                        <router-link class="side-wraps t-center" to="#">
                            <div class="wrap-child t-icon">
                                <font-awesome-icon :icon="['fas', 'radiation-alt']"/>
                            </div> 
                            <div class="wrap-child">
                                <span>Animation</span>
                            </div>       
                        </router-link>
                    </li>
                </ul>
            </div>    
            <!---create a new task--->
            </div>
        </main>
</template>

<script>
    import adminHeader from '../components/admin-header'
    import { mapGetters } from 'vuex'
    import VueSkeletonLoader from 'skeleton-loader-vue';

    export default {
        name:"adminMain",
        props:['isAdminMobile'],
        components:{
           adminHeader,VueSkeletonLoader 
        },
        mounted(){
           
        },
        methods:{
           getCurrentTime(){
                const date = new Date();
                let hours = date.getHours();
                let minutes = date.getMinutes();    
                const ampm = hours >= 12 ? 'pm' : 'am';
                hours %= 12;
                hours = hours || 12;    
                minutes = minutes < 10 ? `0${minutes}` : minutes;
                const strTime = `${hours}:${minutes} ${ampm}`;
                return strTime;
           }
        },
        computed:{
            ...mapGetters(['user']),
        }
    }
</script>

<style>

.dashboard-container{
    display: grid ;
    grid-template-columns: 240px 1fr 350px;
    grid-template-areas: 'aside main';
    height: 100vh;
}

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
    .dashboard-container{
        display: grid ;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: 'aside main';
        height: 100vh;
    }
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
       z-index: 2222;
    }
}

@media (max-width:650px){
    .dashboard-container{
        display: grid ;
        grid-template-columns:1fr ;
        grid-template-rows: 1fr 1fr;
        grid-template-areas: 'main';
        height: 100vh;
    }

    .wrapper-items{
        width: 90%;
        margin: 20px auto; 
    }
}

</style>

