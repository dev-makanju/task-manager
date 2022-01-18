<template>
    <div class="form-control">
        <div class="form-control header">
             <h1>Create Account</h1>
        </div>
        <div class="form-control-inputs">
            <label for="email">Email:</label>
            <input type="email" name="" id="email" placeholder="Enter your email">
        </div>
        <div class="form-control-inputs">
            <label for="email">Username:</label>
            <input type="text" name="" id="" placeholder="Enter your username">
        </div>
        <div class="form-control-inputs">
            <label for="password">Password:</label>
            <input type="password" name="" id="password" placeholder="***************">
        </div>
        <div class="form-control-inputs">
            <label for="password">Confirm Password:</label>
            <input type="password" name="" id="password" placeholder="***************">
        </div>
        <div class="form-control-inputs">
              <button class="btn btn-auth">Sign Up</button>
        </div>
        <p>Already a menber?
            <router-link :to="{name:'signIn'}">login</router-link>
        </p>
    </div>
</template>

<script>
export default {
    name:"register"    
}
</script>