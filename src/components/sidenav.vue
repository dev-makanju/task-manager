<template>
    <aside class="aside">
            <div class="flex-item toggle-side">
                <div class="side-nav info">
                    <img class="profile-icon" src="../assets/userIcon.png">
                    <ul class="user-info">
                        <p>Miracool</p>
                        <span>Software developer</span>
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
                                <span>Calender</span>
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
                </ul>
            </div>

            <div class="aside-text-overlay">
                  <font-awesome-icon :icon="['fas' , 'sign-out-alt']"/> &nbsp;&nbsp; logout
            </div>
        </aside>
</template>

<script>
    export default {
        
    }
</script>
