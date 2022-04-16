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
                <div v-if="this.$store.state.auth.taskCount != 0" class="task-tab">
                    <div class="recent">
                        <div class="recent-info">
                           <p>09:00</p>
                        </div>
                        <div class="recent-info purple">
                           <p>5 post on instagram</p>
                        </div>
                    </div>
                    <!---second--->
                    <div class="recent">
                        <div class="recent-info">
                           <p>09:00</p>
                        </div>
                        <div class="recent-info purple">
                           <p>5 post on instagram</p>
                        </div>
                    </div>
                    <!--third--->
                    <div class="recent">
                        <div class="recent-info">
                            <p>09:00</p>
                        </div>
                        <div class="recent-info purple">
                            <p>5 post on instagram</p>
                        </div>
                    </div>
                </div>
                <div v-if="this.$store.state.auth.taskCount == 0" class="no-task-tab">
                    <span class="post-not-created">No Task Created</span>
                </div>
             </div>
            </div>
        </div>

</template>

<script>
    export default {
        name:'rightTab',
        components:{},
        data(){
            return{
            }
        },
        mounted(){
        },
        methods:{
        
        }
    }
</script>