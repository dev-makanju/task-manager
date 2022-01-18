<template>
    <div class="form-control">
        <div class="form-control header">
             <h1>Login</h1>
        </div>
        <div class="form-control-inputs">
            <label for="email">Email:</label>
            <input type="email" name="" id="email" placeholder="Enter your email">
        </div>
        <div class="form-control-inputs">
            <label for="password">Password:</label>
            <input type="password" name="" id="password" placeholder="***************">
        </div>
        <div class="form-control-inputs">
              <button class="btn btn-auth">Login</button>
        </div>
        <p>Need an account?
            <router-link :to="{name:'signUp'}">register here</router-link>
        </p>
    </div>
</template>

<script>
    export default {
        name:"Login",
    }
</script>

<style>
.form-control{
    width: 40%;
    margin: 0px auto 0px auto;
    margin-top: 2.5rem;
}

.form-control p{
    color: #300;
    font-family: 'raleways' , sans-serif ;
    text-transform: lowercase;
    font-size: 17px;
    text-align: center;
    width: 100%;
    margin-top: 20px;
}

.form-control.header{
    padding: 20px 0px ;
    width: 100% ;
    background: #eee ;
}

.form-control.header h1{
    color: purple ;
    padding: 0px 40px;
}

.form-control-inputs{
    margin-top: 10px;
}

.form-control-inputs label{
    font-size: 17px ;
    color: purple ;
    display: block;
    display: -webkit-box;
}

.form-control-inputs input{
    width: 100% ;
    box-sizing: border-box;
    padding: 7px;
    border-color: 1px solid #eee;

}

.btn.btn-auth{
    margin-top: 2em;
    background: purple ;
    border: none;
    padding: 7px;
    color: #eee;
    font-size: 17px;
    cursor: pointer ;
}

</style>