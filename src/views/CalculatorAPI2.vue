<template>
    <div>
        <h2>Calculator</h2>
        <div>
            <input type="text" v-model="state.num1"/>
            <span> + </span>
            <input type="text" v-model="state.num2"/>
            <span> = </span>
            <span>{{state.result}}</span>
        </div>
    </div>
</template>
<script>
import {reactive,computed} from 'vue';
export default{
    name:'calculatorAPI',
    setup(){
        let state = reactive({
            num1: 0,
            num2: 0,
            result:computed(() => parseInt(state.num1) + parseInt(state.num2))    //num1, num2의 변경이 있으면 result 업데이트  , 이 경우 위의 text의 이벤트는 필요없어도 됨
        });
        return{
            state,
        }
    }

}
</script>