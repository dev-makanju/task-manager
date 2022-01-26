<template>
    <main class="main">
            <div class="main-overview">
                <div class="middle-design-wrapper task-header">
                    <div class="item-wrapper">
                         <p><span style="font-size: 17px;">15</span> October , 2020</p>
                    </div>
                    <div class="item-wrapper">
                            <p class="progress-bar">1 of 5 completed</p> 
                        <div class="progress-wrapper">
                            <div class="progress-bar p-tag">
                               <div class="background"></div>
                               <div class="p-overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
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
                        <div class="task-wrapp">
                          <h2></h2>
                           <div class="ctext-info">
                                
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
                        <router-link class="side-wraps t-center" :to="{name:'Home'}">
                            <div class="wrap-child t-icon">
                                <font-awesome-icon  :icon="['fas', 'search-dollar']"/>
                            </div> 
                            <div class="wrap-child">
                                <span>Marketing</span>
                            </div>        
                        </router-link>
                    </li>
                    <li>
                        <router-link class="side-wraps t-center" :to="{name:'Home'}">
                            <div class="wrap-child t-icon">
                                <font-awesome-icon :icon="['fas', 'layer-group']"/>
                            </div> 
                            <div class="wrap-child">
                                <span>Developing</span>
                            </div>           
                        </router-link>
                    </li>
                    <li>
                        <router-link class="side-wraps t-center" :to="{name:'Home'}">
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
    export default {
        
    }
</script>

<style>

</style>