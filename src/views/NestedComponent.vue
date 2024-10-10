<template>
    <div>
        <PageTitle v-bind:title2="title2" title="부모 컴포넌트에서 자식 컴포넌트로 데이터 전달" />  <!-- 밑에서 가져와서 사용 가능한 것. -->
    </div>
</template>
<script>
    import PageTitle from '../components/PageTitle';
    export default{
        components: {PageTitle},  // 현재 컴포넌트에 사용할 컴포넌트를 가져옴
        data(){
            return{
                title2: '동적 데이터 타이틀2'
            }
        }
    };
   
</script>
