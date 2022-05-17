<template>
    <div class="rightbar">
        <div class="wrapper-items">
                 <div class="rightbar-contain">
                  <div class="right-bar-card">
                      <div class="rightbar-card">
                        <div class="right-overlay"></div>
                     </div>
                    <div class="task-wrapp">
                      <div class="ctext-info">
                          <h2 >Recent Task</h2>
                     </div>
                      <div class="ctext-info left-tab">
                          <p>Developer skill</p>
                          <p>pending</p>
                      </div>
                    </div>
                 </div>
             </div>
             <div class="rightbar-contain">
                   <router-link :to="{ name:'AddTask'}">
                      <ul class="add-task">
                        <li>
                          Add Task
                        </li>
                     </ul>
                  </router-link>
             </div>
             <div class="rightbar-contain">
                <h2 class="date-time">Calender</h2>
                <p class="date-time">{{ new Date().toISOString().substring(0 , 10) }}</p> 
                <div v-show="this.getFilteredTask != null">
                    <div v-for="(task , index) in this.getFilteredTask" :key="index" class="task-tab">
                        <div class="recent">
                            <div class="recent-info">
                               <p>{{ timeFormat(task.createAt)  }}</p>
                            </div>
                            <div class="recent-info purple">
                               <p>{{ task.title }}</p>
                            </div>
                        </div>
                    </div>
                <div/>    
            </div>
            </div>   
        </div>
    </div>    
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        name:'rightTab',
        components:{
            
        },
        data(){
            return{

            }
        },
        methods:{
            timeFormat(date){
                const time = new Date(date)
                return time.getHours()+":"+time.getMinutes();
            }
        },
        computed:{
            ...mapGetters(['getFilteredTask','getTaskLength'])
        }
    }
</script>