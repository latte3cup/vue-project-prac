<template>
    <h2>{{title}}</h2>
    <h2>{{title2}}</h2>
</template>
<script>
    export default{
        props:{
            title:{
                type:String,
                default: "페이지 제목입니다."
            },
            title2:{
                type:String,
                default: "페이지2 제목입니다."
            }
        }
        
    }
</script>

