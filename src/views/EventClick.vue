<template>
    <div>
        <button type = "button" @click="increaseCounter">ADD 1</button>
        <p> The Count is : {{counter}} </p>
    </div>
    <div>
        <button type = "button" @click="one(), two()">CLICK</button>
    </div>
</template>
<script>
export default{
    data(){
        return{
            counter: 0
        };
    },
    methods: {
        increaseCounter(){
            this.counter = this.counter + 1;
        },
        one(){
            alert('One');
        },
        two(){
            alert('Two');   
        }
    }
}
</script>