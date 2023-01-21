<template>
  <h2>Home组件</h2>
  <button @click="">修改</button>
  <button @click="">重置</button>
  <h3>doubleCount:{{counterStore.doubleCount}}</h3>
  <h3>doubleCountAddOne:{{counterStore.doubleCountAddOne}}</h3>
  <h3>Game101:{{counterStore.gameInfoById(101)}}</h3>
  <h3>Game102:{{counterStore.gameInfoById(102)}}</h3>
  <h3>showMessage:{{ counterStore.showMessage }}</h3>
</template>

<script setup>
import { useCounter } from '@/stores/counter';
import { storeToRefs } from 'pinia'
import { toRefs } from 'vue';

const counterStore = useCounter()


</script>

<style scoped lang="scss">
</style>