<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <slot-modal-layout />
</template>
<script>
  import SlotModalLayout from './SlotModalLayout.vue'

  export default{
    components:{SlotModalLayout},
  }
</script>
