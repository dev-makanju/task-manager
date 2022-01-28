<template>
    <div class="middle-design-wrapper task-header">
        <div class="item-wrapper">
            <p><font-awesome-icon @click="$emit('open-navbar')" v-if="isAdminMobile" class="link-wrapper" :icon="['fas', 'arrow-right']"/>  <span style="font-size: 17px;">15</span> October , 2020</p>
                </div>
            <div class="item-wrapper">
            <p class="progress-bar">1 of 5 completed</p> 
            <div class="progress-wrapper">
                <div class="progress-bar p-tag">
                    <div class="background"></div>
                        <div class="p-overlay"></div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
         name:"adminHeader",
         props:[
             'isAdminMobile',
         ]
    }
    
</script>

<style scoped>


.task-header{
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
}

.progress-wrapper p{
    margin-top: 0px;
}

.progress-wrapper{
    width: 100%;
    display: flex ;
    flex-direction: column;
}

.p-overlay{
    width: 20% ;
    height: 7px ;
    background:  rgb(36, 81, 185) ;
    border-radius: 17px;
    position: absolute;
    top: 0 ;
    left: 0;
}

.p-tag{
    position: relative ;
}

.background{
    position: relative;
    flex-grow: 10px;
    width: 100%;
    height: 7px ;
    background: #eee ;
    border-radius: 17px ;
    top: 0;
    left: 0;
}

.p-overlay{
    width: 20% ;
    height: 7px ;
    background:  rgb(36, 81, 185) ;
    border-radius: 17px;
    position: absolute;
    top: 0 ;
    left: 0;
}

.item-wrapper{
    width: 100%;
}

.item-wrapper p{
    color: rgb(36, 81, 185);
    font-family: 'Courier New', Courier, monospace ;
}

</style>