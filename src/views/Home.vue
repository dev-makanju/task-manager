<template>
  <div class="home">
       <landingPage/>
  </div>
</template>

<script>
// @ is an alias to /src
import landingPage from '../components/landingPage.vue'

export default {
  name: 'Home',
  components: {
      landingPage
  }
}
</script>

<style scoped>
  .home{
      overflow: hidden;
  }
</style>
