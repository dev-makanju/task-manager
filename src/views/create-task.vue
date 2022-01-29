<template>
    <div style="position: relative;" class="main">
        <Loading/>
        <Modal/>
        <div class="dashboard-container">
        <Sidenav @close-navbar="closeNavbar" :isAdminMobile="isAdminMobile"/>
        <main class="main">
            <div class="tasks-wrapper">
                <adminHeader  @open-navbar="openNavbar" :isAdminMobile="isAdminMobile"/>
                  <h2 class="title">Add a new task</h2> 
                <div class="task">
                      <!--add a new task finder-->
                      <div class="Add-a-task">
                           <input 
                              type="text"
                              id="task"
                              name="task"
                              placeholder="Set a task"
                           >
                           <button class="btn-btn-input">submit</button>
                      </div>
                </div>  
            </div>
           </main>
        </div>
    </div>
</template>

<script>
    //import Loading from '../components/Loading.vue'
    //import Modal from '../components/modal.vue'
    import adminHeader from '../components/admin-header'
    import Sidenav from '../components/sidenav.vue'
    export default {
        name:"addTask",
        components:{
             Sidenav,adminHeader
        },
        data(){
            return{
                isAdminMobile:null,
                adminScreenWidth:null
            }
        },
        created(){
            this.checkSreensize();
            addEventListener("resize" , this.checkSreensize)
        },
        methods:{
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
.Add-a-task{
    width: 50%;
    margin: 0px auto;
    padding: 40px 4px;
}

.Add-a-task input{
    padding: 7px ;
    outline: none;
    border-radius: 10px;
    border: 1px solid rgb(2 , 40 , 129);
    display: block;
    width: 100%;
    box-sizing: border-box;
}

.btn-btn-input{
    padding: 7px ;
    color: #eee;
    background: rgb(2 , 40 , 129);
    border: 1px solid rgb(2 , 40 , 129);
    border-radius: 10px;
    cursor: pointer ;
    outline: none;
    margin-top: 10px;
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