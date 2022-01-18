<template>
     <header>
          <div class="title-wrapper">
              <router-link to="#">
                  <h1>Task Timer</h1>
              </router-link>
          </div>
          <ul class="title-wrapper">
              <li class="link-wrapper">
                  <router-link :to="{ name:'signUp'}">Sign up</router-link>
              </li>
              <li class="link-wrapper">
                  <router-link :to="{ name:'signIn'}">Sign in</router-link>
              </li>
              <li class="link-wrapper">
                  <router-link to="#">Task</router-link>
              </li>
              <li class="hamburger-wrapper">
                   <div class="link-wrapper">
                        <font-awesome-icon :icon="['fas', 'bars']"/>
                   </div>
                    <div class="link-wrapper">
                        <font-awesome-icon :icon="['fas', 'times']" />
                   </div>
              </li>
          </ul>
     </header>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

header{
    display: flex ;
    flex-direction: row ;
    align-items: center ;
    justify-content: space-between ;
}

ul.title-wrapper{
    display: flex ;
    flex-direction: row ;
    align-items: center ;
    justify-content: space-between ;
    list-style-type: none ;
}

</style>