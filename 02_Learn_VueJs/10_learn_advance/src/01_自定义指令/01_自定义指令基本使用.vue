<template>
  <div class="app">
    <input v-focus  type="text">
  </div>
</template>

<!-- <script>
export default {
  directives:{
    focus:{
      mounted(el){
        el?.focus()
      }
    }
  }
}
</script> -->
<script setup>
const vFocus = {
      mounted(el){
        el?.focus()
      }
}

</script>

<style scoped lang="less">
</style>