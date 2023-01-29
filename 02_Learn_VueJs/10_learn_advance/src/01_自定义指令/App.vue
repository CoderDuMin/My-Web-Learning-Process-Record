<template>
  <div class="app">
    <h2 v-msg:mess.lazy.once="message">嘻嘻嘻嘻嘻</h2>
    <h2 v-unit>200</h2>
    <h2 v-ftime>1552111124354</h2>
    <h2 v-ftime="'YYYY/MM/DD hh:mm:ss'">1726112524</h2>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const message = '哈哈哈哈哈哈'

const vMsg = {
  mounted(el,bindings) {
    console.log("mounted",el,bindings)
    el.textContent = bindings.value
  },
}

</script>

<style scoped lang="less">
</style>