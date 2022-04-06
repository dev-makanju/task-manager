<template>
    <div class="modal">
        <div class="modal-content">
            <img src="@/assets/edited.png" alt="">
            <p>{{ this.modalMessage }}Successfully created!!</p>
            <button class="btn-click" @click="closeModal">
                <font-awesome-icon :icon="['fas', 'times']" />
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        props:["modalMessage"],
        methods:{
            closeModal(){
                this.$emit("close-modal");
            }
        }
        
    }
</script>

<style scoped>

.modal{
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 222;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background: rgba(0 , 0 , 0 , .7);
}

.modal-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
    width: 200px;
    padding: 30px 20px;
    background: rgb(30, 93, 238);
    position: relative;
}

.modal-content img{
    width: 80px;
    margin: 0 auto;
}

p{
    text-align: center ;
    text-transform: lowercase;
    font-size: 14px ;
    font-family: 'Montserrat' serif ;
}

.btn-click{
    align-self: center;
    border: none;
    color: #fff;
    background:  rgb(8, 8, 102);
    padding: 7px;
    border-radius: 17px;
}

.btn-click{
    align-self: center;
    border: none;
    color: #fff;
    background:  rgb(8, 8, 102);
    padding: 7px;
    border-radius: 4px;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
}
</style>