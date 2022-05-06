<template>
    <div style="position: relative;" class="main">
        <Loading v-if="loading"/>
        <Modal v-if="modal" @close-modal="closeModal" :modalMessage="modalMessage"/>
        <div class="dashboard-container">
        <Sidenav @close-navbar="closeNavbar" :isAdminMobile="isAdminMobile"/>
        <main class="main">
            <div class="tasks-wrapper">
                <adminHeader  @open-navbar="openNavbar" :isAdminMobile="isAdminMobile"/>
                    <h2 class="title">Edit Task</h2> 
                <div class="task">
                      <!--add a new task finder-->
                      <div class="Add-a-task">
                           <!--include error-->
                            <div v-if="error" class="app-error">
                               {{ errorMessage }}
                            </div>

                            <input 
                              type="text"
                              id="task"
                              name="task"
                              placeholder="Set a task title"
                              v-model.trim="taskName">

                            <textarea name="" 
                                id="" 
                                cols="30" 
                                rows="10" 
                                v-model.trim="taskBody"
                                placeholder="Description">
                           </textarea>

                            <button 
                                @click="updateTask()" 
                                class="btn-btn-input">
                                    Update
                            </button>
                      </div>
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
        name:"EditTask",
        components:{
            Sidenav,
            adminHeader,
            Loading,
            Modal,
        },     
        data(){
            return{
                taskName: '',
                taskBody: '',
                isAdminMobile: null,
                adminScreenWidth: null,
                loading: null,
                modal: null,
                isModal: null,
                errorMessage: "",
                modalMessage:"",
                error: null,
            }
        },

        mounted(){
            this.getPost()
        },

        created(){
            this.checkSreensize();
            addEventListener("resize" , this.checkSreensize)
        },
        methods:{
            ...mapActions(['AddTask' , 'editTask' , 'getPostById' ]),
            checkSreensize(){
                this.adminScreenWidth = window.innerWidth
                if(this.adminScreenWidth <= 900 ){
                    this.isAdminMobile = true;
                    return;
                }this.isAdminMobile = false
            },

            closeNavbar(){
                const aside = document.querySelector("#aside")
                aside.classList.remove('open');
            },

            openNavbar(){
                const aside = document.querySelector("#aside");
                aside.classList.add('open');
            },

            getPost(){
                const id = this.$route.params.slug
                this.getPostById(id).then(res => {
                    if(res.status){
                       this.taskName = res.data.post.title
                       this.taskBody = res.data.post.content
                    }else{this.loading = false,
                        this.error = true ;
                        this.errorMessage = res.data.message;
                        setTimeout(() => {
                            this.error = false
                            this.errorMessage = '' ; 
                        }, 5000);
                    }
                }).catch(err => {
                    this.loading = false,
                    this.error = true
                    this.errorMessage = 'Oops, something went wrong!';    
                    setTimeout(() => {  
                        this.error = false
                        this.errorMessage = ''; 
                    }, 5000);
                    console.log(err);
                })
            },

            updateTask(){
                if(this.taskName === "" || this.taskBody === "" ){
                    this.error = true;
                    this.errorMessage = 'Oops!, input fields are required'
                    setTimeout( () => {
                        this.errorMessage = '';
                        this.error = false;
                    }, 5000);
                }else{
                    let post = {
                        title: this.taskName,
                        content: this.taskBody
                    }
                    let id = this.$route.params.slug;
                    this.loading = true;
                    this.editTask({ post , id }).then( res => {
                        this.errorMessage = '';
                            if(res.status === 200){
                                this.loading = false;
                                this.modal = true;
                                this.modalMessage = "Task"
                                this.$store.dispatch('getUser').auth;
                            }else{
                                this.loading = false,
                                this.error = true ;
                                this.errorMessage = res.data.message;
                                setTimeout(() => {
                                    this.error = false
                                    this.errorMessage = '' ; 
                                }, 5000);
                            }
                    }).catch(error => {
                        this.loading = false,
                        this.error = true
                        this.errorMessage = 'Oops, something went wrong!';    
                        setTimeout(() => {  
                            this.error = false
                            this.errorMessage = ''; 
                        }, 5000);
                        console.log(error);
                    });
                }
            },

            closeModal(){
                this.modal = !this.modal  
                this.$router.push({name:'AllTask'})
                this.taskName = ''
                this.taskBody = ''
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

/********
***Add a table cell and padding on it
********/

.app-error{
   padding: 10px;
   background: #f36b5b;
   border-radius: 5px;
   color: #eee;
   font-size: 16px;
   text-align: center;
   border: 1px solid #eee;
}


.Add-a-task{
    width: 80%;
    margin: 0px auto;
    padding: 40px 4px;
}

.Add-a-task input{
    padding: 10px ;
    outline: none;
    border-radius: 5px;
    border: 2px solid rgb(201, 211, 233);;
    display: block;
    width: 100%;
    font-family: 'Merriweather', serif;
    box-sizing: border-box;
}

.Add-a-task textarea{
    padding: 10px ;
    outline: none;
    border-radius: 5px;
    border: 2px solid rgb(201, 211, 233);
    display: block;
    width: 100%;
    margin-top: 1rem ;
    font-family: 'Merriweather', serif;
    box-sizing: border-box;
}

.btn-btn-input{
    padding: 10px ;
    color: #eee;
    background: rgb(69, 119, 235);
    border: 1px solid rgb(69, 119, 235);
    border-radius: 5px;
    cursor: pointer ;
    outline: none;
    box-shadow: 0px 2px 15px 4px rgba(0 , 0 , 0 , .3);
    margin-top: 10px;
    font-family: 'Merriweather', serif;
}

.btn-btn-input:hover{
    transform: rotateZ(4deg);
}

.title{
    color: rgb(2, 40, 129);
}

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

    .Add-a-task{
       width: 70%;
       margin: 0px auto;
       padding: 40px 4px;
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

    .Add-a-task{
       width: 90%;
       margin: 0px auto;
       padding: 40px 4px;
    }

}
</style>