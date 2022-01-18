<template>
  <div id="app">
    <div id="nav">
      <Navigation/>
         
    </div>
    <router-view/>
  </div>
</template>
<script>

import Navigation from './components/Navigation.vue'

export default {
    name:"entryPoint",
    components:{
      Navigation
    }
}
</script>

<style>
/**********
*Add fonts
**********/

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital@1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital@1&family=Montserrat:ital@1&display=swap');




*{
  margin: 0;
  padding: 0;
}

p{
   color: #fff;
   padding: 0.6rem;
   border-radius: 10rem;
   text-transform: uppercase;
   display: inline-block;
   border-radius: 0.3rem;
   cursor: pointer;
   margin-top: 1rem;
   font-family: 'Montserrat', sans-serif;
}

h1 , h2 , h3 , h4 , h5 , h6{
  color: #eee;
  padding: 0.6rem;
  border-radius: 10rem;
  text-transform: uppercase;
  display: inline-block;
  border-radius: 0.3rem;
  cursor: pointer;
  margin-top: 1rem;
  font-family: 'Montserrat Alternates', sans-serif;
}

ul , ol , li , a {
  list-style-type: none ;
  text-decoration: none ;
  font-family: 'Montserrat', sans-serif;
}

html {
   font-size: 62.5%;
   -webkit-box-sizing: border-box;
   box-sizing: border-box;
}

body{
  line-height: 1.6;
  font-weight: 300;
  font-family: 'Lato', sans-serif;
  color: #777;
  padding: 3rem;
  min-height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

::selection{
  box-shadow: 0px 20px 5px rgba(0 , 0 , 0 .3);
  color: #fff;
}

::-webkit-scrollbar {
    width: 10px;
    background:lightgray;
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgb(189, 198, 201); 
    border-radius: 17px;
}

::-webkit-scrollbar-thumb {
    border-radius: 17px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
    background:#e3e8e9;
} 

.btn{
   width: 100%;
   padding: 5px 10px;
   box-shadow: 0px 20xp 5px rgba(0 , 0 , 0 , .3);
   -webkit-box-shadow: 0px 20xp 5px rgba(0 , 0 , 0 , .3);
   border-radius: 5px;
   -webkit-border-radius: 5px;
   -moz-border-radius: 5px;
   -ms-border-radius: 5px;
}

</style>
