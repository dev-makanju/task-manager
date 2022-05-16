<template>
<div class="container">
    <div class="landing-page-image main-screen-wrapper">
        <div class="landing-screen">
            <img src="../assets/bgr.jpg" alt="" onerror="this.style.display='none'">
        </div>
        <div class="image-overlay"></div>
        <div class="image-overlay-wrapper">
            <div class="l-image-info ">
                <vue-typed-js :strings="['setting up an account with us', 'managing your todo list']">
                    <h1>You can maximise your daily app project by <span class="typing"></span></h1>
                </vue-typed-js>
            </div>
            <div class="l-image-info">
                <router-link class="btn-btn-link"  :to="{name:'signUp'}">Sign Up</router-link>
            </div>
        </div>
    </div>

    <div class="banner">
        <div class="banner__child text">
                <div v-scrollanimation class="text-content">
                    <h1>Work Perfectly with Task Manager</h1>
                    <p>Work efficiently with confidence that you are not out of schedule. Create , manage , and ,make use of daily activities judiciously with task Manager.</p>
                <div class="focus">
                    <router-link class="btn-sign-up"  :to="{name:'signUp'}">
                        <font-awesome-icon class="icon-banner" :icon="['fas', 'lock-open']"/>
                        Sign in
                    </router-link>
                </div>
            </div>
        </div>
        <div class="banner__child phone">
            <div v-scrollanimation class="phone__preview">
                <img src="@/assets/phone.png" onerror="this.style.display='none'">
            </div>
        </div>
    </div>

    <!----landing page--->
    <div class="landing-screen main-screen">
        <div class="">
            <div class="banner-image-wrapper header">
                <div class="header-wrapper">
                    <ul>
                        <h1>0</h1>
                        <h1>1</h1>
                    </ul>
                    <div v-scrollanimation class="header-wrapper-content">
                        <li><h1>A Little story on how you should get started.</h1></li> 
                        <li><p>You should make use of task manager on a daily basis, it will help you to increase productivity...</p></li>
                    </div>
                </div>
            </div>
            <div class="banner-image-wrapper">
                <div class="banner-img">
                    <img src="@/assets/bgr.jpg" onerror="this.style.display='none'">
                </div>
                <div class="banner-img none">
                    <img src="@/assets/dash.png" onerror="this.style.display='none'">
                </div>
            </div>
        </div>
    </div>

    <!--@third banner-->
    <div class="main-div">
        <div class="main-div-content">
            <div class="third-banner-wrapper">
                <div class="third-banner-wrapper wrapper">
                    <div class="third-banner-wrapper background"></div>
                    <div v-scrollanimation class="third-banner-wrapper images">
                        <img class="desktop" src="@/assets/image002.jpg" onerror="this.style.display='none'">
                        <img class="mobile" src="@/assets/image001.jpg" onerror="this.style.display='none'">
                    </div>
                </div>      
            </div>
            <div class="third-banner-wrapper text">
                <div v-scrollanimation class="put-top">
                    <h1>Put In The work that deserve the win</h1>
                    <p>Working with task manager will give you the required feel with our amazing ui and user experience, feel comfort in building your daily activities with amazing and quality user experience</p>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
    export default {
       name:"landingPage"
    }
</script>

<style>
/************
***  third banner
*************/

.main-div{
    width: 90%;
    padding: 10rem 0rem;
    margin: 0px auto;
}

.mobile{
    max-width: 400px;
    height: 300px;
    display: block;
}

.desktop{
    display: none;
}

.main-div-content{
    display: flex;
    flex-direction: column;
    justify-content: center ;
    align-items: center;
    margin: 0px auto;
}

@media (min-width: 1024px){
    .main-div{
        width: 80%;
        max-width: 1440px ;
        margin: 0px auto ;
        padding: 10rem 0rem;
    }
}   

@media screen and (min-width: 900px){
    .desktop{
        display: block;
        height: 300px ;
        max-width: 400px;
    }

    .mobile{
        display: none;
    }

    .main-div-content{
        display: flex;
        flex-direction: row;
        gap: 40px;
    }
}

.third-banner-wrapper{
    flex: 1;
}

.third-banner-wrapper.text{
    display: flex;
    justify-content: center;
    align-items: center;
}

.third-banner-wrapper.text h1{
    color: blue;
}

.third-banner-wrapper.text p{
    color: blue;
    text-transform: lowercase;
    font-size: 18px;
}

.third-banner-wrapper.wrapper{
    position: relative ;
    height: 400px ;
    max-width: 500px ;
}

.third-banner-wrapper.background{
    height: 300px;
    max-width: 400px;
    background: #2451b966;
    position: absolute;
    inset: 0;
}

.third-banner-wrapper.images.before-enter{
    transform: translateX(0px) translateY(0px);
    opacity: 1;  
    transition: 1s ease-in-out all;  
}

.third-banner-wrapper.images.enter{
    transform: translateX(25px) translateY(35px);
    transition: 1s ease-in-out all; 
    opacity: 1;  
}

/***********overlay**********/
.phone__preview img{
    border-radius: 5px;
    overflow: hidden;
    max-width: 100%;
    min-height: 500px;
    width: 300px;
    object-fit: cover;
}

.banner{
    max-width: 1440px;
    margin: 0px auto;
    position: relative;
    display: flex ;
    margin-top: 5rem ;
    height: 700px;
    width: 80%;
    flex-direction: row;
}

@media (max-width: 768px){
    .banner-img.none{
        display: none;
    }
}

@media (max-width: 1024px ) {
    .banner{
        width: 90% ;
    }
}

@media (max-width: 700px) {
    .banner{
        display: flex ;
        flex-direction: column ;
    }
}

.banner__child{
    display: flex;
    flex: 1;
}

.banner__child.phone{
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
}

@media (max-width: 700px){
    .banner__child.phone {
       justify-content: center;
       align-items: center;
    }
}

.banner__child.text{
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.text-content{
    min-height: 100px;
}


.text-content h1{
    color: #2451B9;
}

.text-content p{
    color: #2451B9;
    font-size: 18px;
    text-transform: lowercase;
}

/*******end overlay*********/

.typing{
   text-transform: lowercase;
}

.l-image-info{
    margin: 10px;
    width: 80%;
    max-width: 1440px;
    margin: 0px auto;
}

@media (max-width: 1024px){
    .l-image-info{
        width: 90%;
    }
}

.l-image-info h1 {
    font-family: 'Rubik Moonrocks', cursive;
    word-spacing: 2px;
    font-size: 30px;
    font-weight: 300;
}

.btn-btn-link{
    padding: 10px 20px;
    border-radius: 5px ;
    color: #fff;
    font-size: 17px;
    background: rgb(36, 81, 185);
    margin-top: 20px;
    transition: .5s ease;
    position: absolute ;
    bottom: 4rem;
}

.btn-sign-up{
    padding: 10px 20px;
    border-radius: 5px ;
    color: #fff;
    font-size: 17px;
    background: rgb(36, 81, 185);
    margin-top: 20px;
    transition: .5s ease;
    box-shadow: 0px 2px 5px 7px rgba(0 , 0 , 0 , .1);
}

.focus{
    margin-top: 3rem;
}

.btn-btn-link:hover{
    font-size: 19px;
    box-shadow: 0px 2px 5px 7px rgba(0 , 0 , 0 , .1);
}

.landing-screen-item.header{
    display: flex;
    justify-content: center;
    align-items: center;
}

.header-wrapper ul{
    border: 2px solid rgba(0, 0, 255, 0.361);
    float: left;
    padding: 10px;
    box-shadow: 0px 2px 15px 7px rgba(0 , 0 , 0 , .1);
}

.header-wrapper ul h1{
    color: #2451B9;
}

.landing-screen-item.header h1{
    float: left ;
    font-weight: bolder;
}

.header-wrapper-content li p{
    color: blue;
    text-transform: lowercase;
    padding: 0px .8rem;
}

.header-wrapper-content li h1{
    color: blue;
    font-weight: 600;
}

.banner-image-wrapper.header{
   padding: 30px 0px;
}

.put-top.before-enter{
    transform: translateY(50px);
    transition: 1s ease-in-out all; 
    opacity:.1;
} 

.put-top.enter{
    opacity: 1;
    transform: translateY(0px);
    transition: 1s ease-in-out all; 
    word-spacing: 2px;
    font-weight: 350;
} 

.header-wrapper-content.before-enter{
    transform: translateX(50px);
    transition: 1s ease-in-out all; 
    opacity:.1;
}

.header-wrapper-content.enter{
    opacity: 1;
    transform: translateX(0px);
    transition: 1s ease-in-out all; 
    word-spacing: 2px;
    font-weight: 350;
}

.phone__preview.before-enter{
    transform: scale(.8);
    transition: 1s ease-in-out all; 
    opacity:.1;
}

.phone__preview.enter{
    opacity: 1;
    transform: scale(1);
    transition: 1s ease-in-out all; 
}


.text-content.before-enter{
    transform: translateY(50px);
    transition: 1s ease-in-out all; 
    opacity:.1;
}

.text-content.enter{
    opacity: 1;
    transform: translateY(0px);
    transition: 1s ease-in-out all; 
    word-spacing: 2px;
    font-weight: 350;
}

@media (max-width: 620px ) {
    .about-info-header{
        font-size: 20px;  
    }
}

.landing-page-image.main-screen-wrapper{
    position: relative ;
}

.image-overlay{
    position: absolute ;
    background: #000 ;
    height: 70vh ;
    object-fit: cover ;
    width: 100% ;
    top: 0 ;
    opacity: .7 ;
}

.image-overlay-wrapper{
    position: absolute;
    height: 70vh ;
    object-fit: cover ;
    width: 100%;
    top: 0;
    display: flex ;
    justify-content: center ;
    align-items: center ;
    flex-direction: column ;
}

.landing-screen.main-screen{
    width: 80%;
    max-width: 1440px;
    margin: 0px auto;
}

@media (max-width: 1024px){
    .landing-screen.main-screen{
        width: 90%;
    }
}

@media (max-width: 700px){
    .landing-screen.main-screen{
        margin-top: 20rem;
    }
}

@media (max-width: 480px){
    .landing-screen.main-screen{
        margin-top: 25rem;
    }
}

.banner-image-wrapper{
    display: grid ;
    grid-template-columns: 1fr 400px;
    gap: 2.5rem;
}

@media (max-width: 768px) {
    .banner-image-wrapper {
        display: grid ;
        grid-template-columns: 1fr;
    }
}

.landing-screen img{
    object-fit: cover;
    width: 100% ;
    height: 70vh ;
    background-position: center;
}

/**
*Landing page 
*Landing screen
**/
.picture-info{
    display: flex ;
    justify-content: center;
    align-items: center;
    flex-direction: column ;
}

.picture-info h3{
   text-align: center;
   color: rgb(36, 81, 185);
}

.picture-info p{
   text-align: center;
   color: rgb(36, 81, 185);
   font-size: 9px;
   text-transform: lowercase;   
}

.landing-screen.main-screen{
    display: flex;
    flex-direction: column ;
}

.landing-screen-item.header{
    height: 100px;
    padding: 5px 5px;
}

.landing-screen-item.main{
    display: flex ;
    flex-direction: row;
    padding: 20px 30px;
    overflow: hidden ; 
}

@media (max-width:450px) {
    .landing-screen-item.main{
        padding: 10px 10px;
    } 
}


.main-flex-items{
    width: 100%;
    display: flex ;
    justify-content: center;
    align-items: center;
    padding: 10px;
}


.main-flex-items.children{
    display: grid ;
    grid-template-columns: 1fr 1fr;
}

@media (max-width: 600px) {     
    .main-flex-items.children{
        grid-template-columns: 1fr;
    }
}

.main-flex-items .children-items:hover{
    opacity: .7;
    background: blue;
    border-radius: 2px ;
    transform: scale(.1s) ;
    transition: .2s ease;
}

.children-items{
    display: flex;
    justify-content: center;
    margin: 4px;
    flex-direction: column;
}

.children-items img{
    border-radius: 2px ;
    width: 250px ;
    height: 250px ;
    box-shadow: 0px 5px 55px 5px rgba(0 , 0 , 0 , .1);
}


</style>