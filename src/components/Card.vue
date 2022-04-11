<template>
    <div class="card">
        <div class="card_header">
             <div class="card_details">
                <span class="font"> {{ post.user }} </span>
             </div>
             <div class="card_details">
                 <span class="font">
                    {{ post.date }}
                 </span>
             </div>
        </div>
        <div class="card_header">
            <div class="post_body">{{ post.body }} <span class="read_more">read more...</span></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PostCard',
        data(){
            return{
                post:{
                    user:'Oluwafemi',
                    date:'24th, july 2020',
                    body:'We are really indebted to bringing people to our user and also finding our feet in mordern united people testing testing',
                }
            }
        }
    }
</script>
<style scoped>

.card{
    width: 350px;
    box-shadow: 0px 2px 6px 14px rgba(0 , 0 , 0 , .05);
    border-radius: 5px;
    padding: 10px 5px;
}

.font{
    color:  rgb(2, 40, 129);
    font-weight: 500;
}

.font{
    font-style: italic  ;
}

.card_header{
    display: flex ;
    justify-content: space-between;
    padding: 15px 0px;
    font-size: 16px;
}

.read_more{
    font-style: italic;
    font-size: 14px;
    cursor: pointer ;
}
.post_body{
    font-family: 14px;
}

</style>