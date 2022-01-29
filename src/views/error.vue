<template>
     <div class="error">
          <div class="error-wrapper">
              <h2>404 - page not found</h2>
              <p>this page no longer exist or was moved to another location</p>
              <router-link class="link" :to="{name:'Home'}"> Home </router-link>
          </div>
     </div>
</template>

<script>
    export default {
        name:"Notfound"
        
    }
</script>

<style scoped>
 .error{
     display: flex ;
 }

 .error-wrapper {
     display: flex ;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     margin: 40px auto;
 }

 .error-wrapper h2 {
     color: rgb(2, 40, 129);
     font-size: 20px;
 }

 .error-wrapper p {
     color: rgb(2, 40, 129);
     text-transform: lowercase;
 }

.link{
     color: rgb(2, 40, 129);
     text-transform: lowercase;
     text-decoration: underline;
 }
</style>