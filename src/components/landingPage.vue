<template>
<div class="container">
    <div class="landing-page-image main-screen-wrapper">
         <div class="landing-screen">
             <img src="../assets/bgr.jpg" alt="">
        </div>
        <div class="image-overlay"></div>
        <div class="image-overlay-wrapper">
             <div class="l-image-info ">
                <vue-typed-js :strings="['setting up an account with us', 'managing your todo list']">
                    <h1>You can maximise your daily app project by <span class="typing"></span></h1>
                </vue-typed-js>
             </div>
             <div class="l-image-info">
                <router-link class="btn-btn-link"  :to="{name:'signUp'}">Get started</router-link>
             </div>
        </div>
    </div>
    <div class="banner">
           <div class="banner__child">
                <div>
                    <h1>Simple</h1>
                    <p>but</p>
                    <h1>Elegant</h1>
                </div>
                <div class="focus">
                    <p>Focus on the feature and functionality, we are growing</p>
                </div>
           </div>
           <div class="banner__child">
                <div class="vedio__preview">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/tCRbVEGHZlQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
           </div>
    </div>
    <!----landing page--->
    <div class="landing-screen main-screen">
        <div class="landing-screen-item header">
            <h2 class="about-info-header">You can maximise your daily app project by setting up an account with us</h2>
        </div>
        <div class="landing-screen-item main">
            <div class="main-flex-items children">
                <div v-scrollanimation class="children-items">
                    <div class="picture-info">
                        <img src="../assets/Screenshot from 2022-01-21 20-18-48.png" alt="">
                    </div>
                    <div class="picture-info">
                        <h3>Open an account</h3>
                    </div>
                </div>
                <div v-scrollanimation class="children-items">
                    <div class="picture-info">
                        <img src="../assets/Screenshot from 2022-01-21 20-18-40.png" alt="">
                    </div>
                    <div class="picture-info">
                        <h3>Sign in to your account</h3>
                    </div>
                </div>
                <div v-scrollanimation class="children-items">
                    <div class="picture-info">
                        <img src="../assets/Screenshot from 2022-01-21 20-18-26.png" alt="">
                    </div>
                    <div class="picture-info">
                        <h3>dashboard</h3>
                    </div>
                </div>
                <div v-scrollanimation class="children-items">
                    <div class="picture-info">
                        <img src="../assets/bgr.jpg" alt="">
                    </div>
                    <div class="picture-info">
                        <h3>Visit our website</h3>
                    </div>
                </div>
             </div>
             <div class="main-flex-items">
                  <div class="about-wrapper">
                      <h1 style="font-weight: 400 ;font-size: 30px;">About us</h1>
                      <p v-scrollanimation class="about-info">
                          Hi there, Thanks for visiting!. Task Timer is a schedule management system that helps you track your daily progress, manage your work schedules and also gives you the boost to achieve productivity. This project is one of my few projects and it has a whole lot of features to make thing simple for you, and also working efficiently for task scheduling. You might be wondering How do i start?, here is it <router-link style="font-weight:bold" :to="{name:'signUp'}">register</router-link>  as a member , or  <router-link style="font-weight:bold" :to="{name:'signUp'}">login</router-link> to your account. After then, you have access to your personalised dashboard. follow the on screen guilde and you will be fine. Thanks for choosing task timer as your new tool!.   
                      </p>
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
/***********overlay**********/
.vedio__preview{
    border-radius: 5px ;
    box-shadow: 0px 2px 55px 3px rgb(2 , 40 , 129);
    overflow: hidden ;
    max-width: 100%;
    height: auto ;
    width: auto\9; /* ie8 */
}

.banner{
    position: relative;
    height: 500px ;
    background: #2451B9;
    display: flex ;
    flex-direction: row;
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
    justify-content: center;
    align-items: center;
    flex-direction: column;
}


/*******end overlay*********/


.typing{
   text-transform: lowercase;
}

.l-image-info{
    margin: 10px;
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
}

.landing-screen-item.header{
    display: flex ;
    justify-content: center;
    align-items: center;
}

.about-wrapper{
    display: flex ;
    justify-content: center;
    align-items: center;
    flex-direction: column ;
}

.about-wrapper h1{
    color:  rgb(2, 40, 129);
    font-family: 'Montserrat', sans-serif ;
    font-weight: 300;
}

.about-info{
    color:  rgb(2, 40, 129);
    font-family: 'Merriweather', serif;
    font-weight: 600;
    text-transform: lowercase;
    font-size: 16px;
    letter-spacing: 1px;
    word-spacing: 2px;
}

.about-info.before-enter{
    transform: translateY(50px);
    transition: 1s ease-in-out all; 
    opacity:.1;
} 

.about-info.enter{
    opacity: 1;
    transform: translateY(0px);
    transition: 1s ease-in-out all; 
    word-spacing: 2px;
    font-weight: 350;
} 

.about-info-header{
    color:  rgb(2, 40, 129);
    font-family: 'Merriweather', serif;
    text-transform: lowercase;
    font-size: 30px;
    font-weight: 400;
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
    position: absolute;
    background: #000;
    height: 500px ;
    object-fit: cover ;
    width: 100%;
    top: 0;
    opacity: .7 ;
}

.image-overlay-wrapper{
    position: absolute;
    height: 500px ;
    object-fit: cover ;
    width: 100%;
    top: 0;
    display: flex ;
    justify-content: center ;
    align-items: center ;
    flex-direction: column ;
}

.landing-screen img{
    object-fit: cover;
    width: 100% ;
    height: 500px ;
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


@media (max-width: 450px) {
        .children-items.before-enter:nth-child(odd){
            transform: translateX(-240px);
            transition: 1s ease-in-out all; 
        }

        .children-items.enter:nth-child(odd){
            opacity: 1;
            transform: translateX(0px);
            transform: scale(1) rotateZ(0deg);
        }

        .children-items.before-enter:nth-child(even){
            transform: translateX(240px);
            transition: 1s ease-in-out all; 
        }

        .children-items.enter:nth-child(even){
            opacity: 1;
            transform: scale(1) rotateZ(0deg);
        }
}



.children-items img{
    border-radius: 2px ;
    width: 250px ;
    height: 250px ;
    box-shadow: 0px 5px 55px 5px rgba(0 , 0 , 0 , .1);
}


@media (max-width: 900px) {
   .landing-screen-item.main{
       flex-direction: column;
       justify-content: center;
       align-items: center;
    }   
}


</style>