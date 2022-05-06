<template>
    <div style="position: relative;" class="main">
        <Loading v-if="loading"/>
        <Modal v-if="modal"/>
        <div class="dashboard-container">
        <Sidenav @close-navbar="closeNavbar" :isAdminMobile="isAdminMobile"/>
        <main class="main">
            <div class="tasks-wrapper">
                <adminHeader  @open-navbar="openNavbar" :isAdminMobile="isAdminMobile"/>
                   <h2 class="title">All Created Task</h2> 
                <div v-if="!this.$store.state.auth.load" class="scroll-body">
                    <table v-if="this.$store.state.auth.taskCount != 0" width="400" cellpadding="3" cellspacing="0" border="0" align="center">
                    <thead>
                        <th>S/N</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Created at</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </thead>
                    <tbody v-for="(task , index) in $store.state.tasks" :key="task._id">
                        <tr>
                            <td>{{ index+1 }}</td>
                            <td>{{ task.title }}</td>
                            <td>pending</td>
                            <td>{{ formatDate(task.createAt) }}</td>
                            <td>
                                <router-link :to="{name:'EditTask', params:{ slug:task._id }}">
                                    <font-awesome-icon 
                                       style="cursor: pointer"
                                       :icon="['fas', 'edit']"/>
                                </router-link>
                            </td>
                            <td>
                                <span @click="deletePost(task._id)">
                                    <font-awesome-icon 
                                        style="cursor: pointer"  
                                       :icon="['fas', 'trash']"/>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                    <div v-else class="no-task-created">
                      <h1>No Task Created...</h1>
                    </div>
                </div> 
                <div v-else>
                    <load/>
                </div> 
            </div>
        </main>
        </div>
    </div>
</template>

<script>
    import Load from '../components/load.vue'
    import Modal from '../components/Modal.vue'
    import adminHeader from '../components/admin-header'
    import Sidenav from '../components/sidenav.vue'
    import { mapActions } from 'vuex'

    export default {
        name:"Task",
        components:{
            Sidenav,
            adminHeader,
            Load,
            Modal
        },
        data(){
            return{
                isAdminMobile:null,
                adminScreenWidth:null,
                loading: null,
                modal: null,
                isModal: null,
                modalMessage: "Oops!, input feilds is required",
                appError: null
            }
        },
        onMounted(){
           this.$store.dispatch('getUser').auth
        },
        created(){
            this.checkSreensize();
            addEventListener("resize", this.checkSreensize)
        },
        methods:{
            ...mapActions(['deleteTask']),
            //check screen size
            checkSreensize(){
                this.adminScreenWidth = window.innerWidth
                if(this.adminScreenWidth <= 900 ){
                    this.isAdminMobile = true;
                    return;
                }this.isAdminMobile = false
            },

            //close toggle
            closeNavbar(){
                const aside = document.querySelector("#aside")
                aside.classList.remove('open')
            },

            //toggle navbar
            openNavbar(){
                const aside = document.querySelector("#aside")
                aside.classList.add('open')
            },
            
            formatDate(date){
                const value = new Date(date)
                return value.toLocaleDateString()
            },

            deletePost(id){
                this.deleteTask(id).then(res => {
                    if(res.status === 200){
                       console.log('deleted');
                    }
                }).catch(err => {
                    console.log(err);
                });
            },
        },

        watch:{
            $route(){
                this.checkSreensize()
            }
        },
    }
</script>

<style scoped>

.title{
    color: rgb(2, 40, 129);
}

/********
***Add a table cell and padding on it
********/
.main{
    background: #fff;
    grid-area: 'main';
}


.tasks-wrapper{
    display: flex ;
    justify-content: center ;
    flex-direction: column ;
    width: 80% ;
    margin: 0px auto;
}

.scroll-body{
    display: flex ;
    flex-direction: column ;
}

table{
    border: 2px solid rgb(189, 201, 230);
    border-radius: 7px;
    border-collapse: collapse;
    width: 100%;
    overflow: auto;
}

th{
   border: 2px solid rgb(189, 201, 230);
   padding: 10px 20px;
   font-size: 16px;
   font-weight: 500 ;
   color: rgb(36, 81, 185);
   font-family: 'Merriweather', serif;

}

td{
   border: 2px solid rgb(189, 201, 230);
   padding: 10px 20px;
   font-size: 14px;
   font-size: 16px ;
   text-align: center;
   font-weight: 500 ;
   color: rgb(63, 117, 243);
   font-family: 'Merriweather', serif;
}

td:nth-child(2){
   text-align: left;
}

@media (max-width: 600px) {
    td{
       padding: 2px ;
    }
}

tr:nth-child(odd){
    background: #eee ;
}


.dashboard-container{
    display: grid ;
    grid-template-columns: 240px 1fr ;
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
}

@media (max-width:900px) {
    .dashboard-container{
        display: grid ;
        grid-template-columns: 1fr ;
        grid-template-areas: 'main';
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
       z-index: 222;
    }
}

@media (max-width:650px){
    .dashboard-container{
        display: grid ;
        grid-template-columns: 1fr ;
        grid-template-areas: 'aside main';
        height: 100vh;
    }

     .tasks-wrapper{
        width: 100% ;

    }

    .scroll-body{ 
       overflow: scroll ;
       width: 100vw ;
    }
}

@media (max-width:490px){
    
    .scroll-body{ 
       overflow: scroll ;
    }
}


@media (max-width:300px){
    
    .scroll-body{ 
       overflow: scroll ;
    }

    .tasks-wrapper{
        width: 95% ;
    }
}

.no-task-created{
    text-align: center ;
    padding: 40px;
    background: rgb(161, 157, 157);
}


</style>