<template>
    <child-component-2 @send-message = 'sendMessage' ref="child_component" />
</template>
<script>
    import ChildComponent2 from "./ChildCompoent2.vue"
    export default{
        components:{ChildComponent2},
        mounted() {
            this.$refs.child_component.callFromParent();
        }
    }
</script>