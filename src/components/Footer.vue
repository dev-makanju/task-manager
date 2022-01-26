<template>
    <footer>
         <div class="brand-name">
              <h1>Task manager system</h1>
              <p>&copy; 2022</p>
         </div>
         <div class="brand-name brand-item">
              <div class="footer-items">
                  <li>
                      <router-link class="links" :to="{ name:'signUp'}">Sign In</router-link>
                  </li>
                  <li>
                      <router-link class="links" :to="{name:'signIn'}">Sign Up</router-link>
                  </li>
                  <li>
                      <router-link class="links" :to="{name:'Task'}">Dashboard</router-link>
                  </li>
             </div>
             <div class="footer-items">
                 <li>About</li>
                 <li>Contact</li>
             </div>
         </div>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
     footer{
         background: #000;
         opacity: .7;
         margin-top: 10%;
         display: flex ;
         flex-direction: column ;
         padding: 5px ;
         justify-content:space-between ;
         align-items: center;
     }

     @media (min-width: 600px) {
         footer{
         flex-direction: row;
         padding: 10px 40px;
         height: 200px;
     }
     }

     .brand-name{
         margin: 10px;
     }

     .brand-name h1{ 
        font-family: 'Montserrat' serif;    
     }

     @media (max-width:450px) {
         .brand-name h1{ 
             font-size: 14px;   
          }
     }

     .brand-name.brand-item{
         display: flex;
         flex-direction: row;
     }

     @media (max-width:450px) {
        .brand-name.brand-item{
            gap: 30px;
        }
     }

     .footer-items{
         margin: 10px;
     }

     .footer-items li{
        font-family: 'Montserrat' serif;
        font-size: 15px;
        color: #fff;
        cursor: pointer;
     }

     .links{
        color: #eee;
     }

     @media (max-width:450px) {
        .links{
            font-weight: bold;
            letter-spacing: 1px;
        }
        .footer-items li{
           font-family: 'Montserrat' serif;
           font-weight: bold ;
           color: #fff;
           cursor: pointer;
        }
     }

</style>