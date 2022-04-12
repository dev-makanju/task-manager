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
                <div class="scroll-body">
                <table width="400" cellpadding="3" cellspacing="0" border="0" align="center">
                    <thead>
                        <th>S/N</th>
                        <th>Title</th>
                        <th>Created at</th>
                        <th>Status</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>build fadaka</td>
                            <td>20th , Aug 2022 </td>
                            <td>pending</td>
                                <td>
                                     <font-awesome-icon style="cursor: pointer"  :icon="['fas', 'edit']"/>
                                </td>
                                <td>
                                     <font-awesome-icon style="cursor: pointer" :icon="['fas', 'trash']"/>
                                </td>
                             </tr>
                             <tr>
                                 <td>2</td>
                                 <td>build fadaka</td>
                                 <td>20th , Aug 2022 </td>
                                 <td>pending</td>
                                 <td>
                                    <font-awesome-icon style="cursor: pointer" :icon="['fas', 'edit']"/>
                                 </td>
                                 <td>
                                     <font-awesome-icon style="cursor: pointer" :icon="['fas', 'trash']"/>
                                 </td>
                             </tr>
                             <tr>
                                 <td>3</td>
                                 <td>build fadaka</td>
                                 <td>20th , Aug 2022 </td>
                                 <td>pending</td>
                                 <td>
                                    <router-link :to="{name:'ViewBlog' , params:{slug:'123'}}">
                                         <font-awesome-icon style="cursor: pointer" :icon="['fas', 'edit']"/>
                                    </router-link>
                                 </td>
                                 <td>
                                        <font-awesome-icon @click="deleteTask(post._id)" style="cursor: pointer" :icon="['fas', 'trash']"/>
                                 </td>
                             </tr>
                      </tbody>
                  </table>
                </div>  
            </div>
           </main>
        </div>
    </div>
</template>

<script>
    import Loading from '../components/Loading.vue'
    import Modal from '../components/Modal.vue'
    import adminHeader from '../components/admin-header'
    import Sidenav from '../components/sidenav.vue'
    import { mapActions } from 'vuex'

    export default {
        name:"addTask",
        components:{
             Sidenav,adminHeader,Loading,Modal
        },
        data(){
            return{
                isAdminMobile:null,
                adminScreenWidth:null,
                loading: null,
                modal: null,
                isModal: null,
                modalMessage: "Oops! , input feilds is required",
                appError: null
            }
        },
        created(){
            this.checkSreensize();
            addEventListener("resize" , this.checkSreensize)
            this.getUserData();
        },
        methods:{
            ...mapActions(['deleteTask' , 'getAllTask' ]),
            checkSreensize(){
                this.adminScreenWidth = window.innerWidth
                if(this.adminScreenWidth <= 900 ){
                    this.isAdminMobile = true;
                    return;
                }this.isAdminMobile = false
            },
            closeNavbar(){
                const aside = document.querySelector("#aside")
                aside.classList.remove('open')
            },
            openNavbar(){
                const aside = document.querySelector("#aside")
                aside.classList.add('open')
            },
            deleteTask(id){
                this.deleteTask(id).then( res => {
                    if(res.data){
                        //
                    }
                }).catch( err => {
                    console.error(err)
                });
            },
            getUserData(){
                this.getAllTask().then( res => {
                    console.log(res)
                }).catch( err => {
                    console.log(err)
                })
            }
        },
        watch:{
            $route(){
                this.checkSreensize()
            }
        }
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

}

td{
   border: 2px solid rgb(189, 201, 230);
   padding: 10px 20px;
   font-size: 14px;
   text-align: center;
   font-size: 16px ;
   font-weight: 500 ;
   color: rgb(63, 117, 243);
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


</style>