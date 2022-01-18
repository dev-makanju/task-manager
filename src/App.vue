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




</style>
