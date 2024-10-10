<template>
    <ChildComponent @send-message = 'sendMessage' ref="child_component" />
</template>
<script>
    import ChildComponent from "./ChildCompoent.vue"
    export default{
        components:{ChildComponent},
        mounted() {
            this.$refs.child_component.$refs.btn.click();
        }
    }
</script>