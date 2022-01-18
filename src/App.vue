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


}

ul , ol , li , a {
  list-style-type: none ;
  text-decoration: none ;
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




</style>
