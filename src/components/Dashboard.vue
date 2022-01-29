<template>
    <div class="main-div">
        <Loading/>
        <Modal/>
        <div class="dashboard-container">
           <Sidenav @close-navbar="closeNavbar" :isAdminMobile="isAdminMobile"/>   
           <Main @open-navbar="openNavbar"  :isAdminMobile="isAdminMobile"/> 
           <Rightbar/>
        </div>
    </div>
</template>

<script>
    // import Loading from '../components/Loading.vue'
    // import Modal from '../components/modal.vue'
    import Main from '../components/main.vue'
    import Sidenav from '../components/sidenav.vue'
    import Rightbar from '../components/rightbar.vue'
    export default {
        components:{
            Main , Sidenav , Rightbar
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

<style>
.main-div{
    position:relative;
    height: 100%; 
}

.one{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background:  rgb(19, 67, 180);
    position: absolute ;
    left: 400px ;
    bottom: 100px ;
}

.two{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background:  rgb(19, 67, 180);
    position: absolute ;
    left: 105px ;
    top: 10px ;
}

.three{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background:  rgb(19, 67, 180);
    position: absolute ;
    left: 300px ;
    bottom: 10px ;
}

.four{
    width: 50px;
    height: 50px;
    position: absolute ;
    border-radius: 50%;
    background:  rgb(19, 67, 180);
    left: 10px ;
    bottom: 10px ;
}

.five{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background:  rgb(19, 67, 180);
    position: absolute ;
    top: 130px;
    right: -10px;
}

.six{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background:  rgb(19, 67, 180);
    position: absolute ;
    top: 45px;
    right: 200px;
}

.seven{
    width: 13px;
    height: 13px;
    border-radius: 60%;
    background:  rgb(19, 67, 180);
    position: absolute ;
    top: 10px;
    right: 10px;
}


.side-wraps .wrap-child{
    color:  rgb(2, 40, 129);
}

.aside-text-overlay{
   position: absolute;
   bottom: 30px;
   left: 20px;
   display: flex ;
   justify-content:center;
   align-items: center;
   cursor: pointer;
   color:   rgb(2, 40, 129);
   font-size: 17px;
}

.aside-overlay{
    width: 200px;
    height: 200px;
    background:   rgb(121, 155, 224) ;
    border-radius: 50%;
    position: absolute;
    bottom: -90px;
    left: -100px;
}

.weekly-text{
    font-weight: bold;
    color: rgb(36, 81, 185);
}

.middle-design-wrapper.new-task{
    width: 100%;
    display: flex ;
    justify-content: space-between;
}

.wrap-child.t-icon{
    padding: 5px;
    background: #eee ;
    border-radius: 7px ;
    width: 40px ;
    height: 30px ;
    box-shadow: 0px 2px 5px rgba(0 , 0 , 0 , .3);
    display: flex ;
    justify-content: center;
    align-items: center;
}

.side-wraps.t-center{
   background: #eee;
}

.recent{
    display: flex;
    margin-top: 10px;
}

.date-time {
    color:  rgba(3, 1, 61, 0.304);
}

.recent-info{
    padding: 7px;
    color: rgb(36, 81, 185) ;
}

.recent-info p{
    color: rgb(36, 81, 185) ;
}

.purple{
    border-left: 10px solid rgb(36, 81, 185)  ;
    border-radius: 7px;
}

.wrapper-items{
    margin: 50px auto;
    width: 80%;
}

.dashboard-container{
    display: grid ;
    grid-template-columns: 240px 1fr 350px;
    grid-template-areas: 'aside main' ;
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
       z-index: 222;
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


.left-tab{
    display: flex ;
    justify-content: space-between;
}

/****
* Recent
*
****/

.rightbar{
    background: whitesmoke;
    z-index: 111;
    grid-area: 'aside';
    grid-area: '.rightbar';
    display: flex ;
    flex-direction: column ;
    height: 100vh;
}

.right-bar-card{
    width: 100%;
    height: 200px ;
    border-radius: 7px;
    background:  rgb(33, 64, 138) ;
    position: relative;
    overflow: hidden;
}

.rightbar-card{
    position: absolute;
    inset: 0;
}

.right-overlay{
    width: 150px;
    height: 150px;
    background: rgb(36, 81, 185) ;
    border-radius: 50%;
    position: absolute;
    left: -50px ;
    top: -50px;
}

.task-wrapp{
    display: flex ;
    flex-direction: column;
    position: absolute;
    bottom: 25px;
    display: flex ;
    width: 100%;
}

.flex-item{
   padding: 20px 8px ;
   display: flex;
   flex-direction: column;
}

.side-wraps{
   display: flex;
   flex-direction: row ;
   padding: 15px 20px;
   background: #eee;
   justify-content: space-between ;
   align-items: center;
   border-radius: 7px;
}

.ctext-info{
   display: flex ;
   margin-right: 30px;
}

.side-nav.flex{
    display: flex ;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

/***add-task***/
.add-task{
     width: 100%;
     box-sizing: border-box;
     padding: 7px;
     border: 1px dashed rgb(36, 81, 185) ;
     border-radius: 10px;
     text-align: center;
     font-size: 15px;
     color: rgb(36, 81, 185);
     font-weight: 700;
     cursor:pointer;
     margin-top: 30px;
}

.profile-icon{
    float: left;
}

.side-nav li{
    padding:10px 10px ;
    outline: none;
}

.wrap-child{ 
    font-size: 14px;
    /***font-family: ;**/
    font-weight: 500;
}

.main{
    background: #fff;
    grid-area: 'main';
}


.main-overview{
    display: flex;
    flex-wrap: wrap ;
    padding: 2px 15px;
    flex-direction: column ;
    height: 100vh;
}

.middle-design-wrapper{
    display: flex;
    flex-direction: row;
}

.p-relative{
    width: 200px;
    height: 200px;
    border-radius: 7px;
    padding: 10px 10px;
}

.card-wrapper{
    width: 200px;
    height: 200px;
    border-radius: 7px;
    background: rgb(30, 93, 238) ;    
}

</style>