<template>
     <div class="error">
          <div class="error-wrapper">
              <h2>404</h2>
              <router-link :to="{name:'Home'}"> Home </router-link>
          </div>
     </div>
</template>

<script>
    export default {
        name:"Notfound"
        
    }
</script>

<style scoped>

</style>