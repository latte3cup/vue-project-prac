<template>
    <div class = "container" v-bind:class="{'active' : isActive, 'text-red': hasError}">CLASS BINDING</div>
</template>
<script>
export default{
    data(){
        return{
            isActive: true,
            hasError : false
        };
    }
}
</script>
<style scoped>
    container{
        width: 100%;
    }
    .active{
        background-color: yellow;
        font-weight: bold;
    }
    .text-red{
        color:red;
    }
</style>