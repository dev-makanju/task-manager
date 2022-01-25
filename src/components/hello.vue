<template>
    <div class="dashboard-container">
            <div class="flex-item toggle-side">
                <div class="profile-wrapper">
                    <img src="../assets/userIcon.png" >
                    <ul class="user-info">
                        <p>John C.</p>
                        <span>Software developer</span>
                    </ul>  
                </div>
                <ul class="side-nav">
                     <li>
                        <div class="side-wraps">
                            <div class="wrap-child">
                                <router-link :to="{name:'Home'}">Home</router-link>
                            </div>
                            <div class="wrap-child">
                                <font-awesome-icon :icon="['fas' , 'bars']"/>
                            </div>

                            <font-awesome-icon :icon="['fas', 'bars']"/>

                        </div>
                     </li>
                     <li>
                         <div class="side-wraps">
                            <div class="wrap-child">
                                <span>Calender</span>
                            </div>
                            <div class="wrap-child">
                                <font-awesome-icon :icon="['fas' , 'bars']"/>
                            </div>

                            <font-awesome-icon :icon="['fas', 'bars']"/>
                            
                        </div>
                     </li>
                     <li>
                         <div class="side-wraps">
                            <div class="wrap-child">
                                <span>Task</span>
                            </div>
                            <div class="wrap-child">
                                <font-awesome-icon :icon="['fas' , 'bars']"/>
                            </div>

                            <font-awesome-icon :icon="['fas', 'bars']"/>
                            
                        </div>
                     </li>
                </ul>
            </div>
           </div>
</template>

<script>
    export default {
        

    }
</script>

<style lang="scss" scoped>

</style>