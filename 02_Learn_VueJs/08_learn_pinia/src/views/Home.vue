<template>
  <h2>Home组件</h2>
  <button @click="addCount">count+1</button>
  <h3>当前计数:{{counterStore.count}}</h3>
  <h3>当前计数:{{count}}</h3>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCounter } from '@/stores/counter'
import { toRefs } from 'vue';

const counterStore = useCounter()

// const { count } = toRefs(counterStore)
const { count } = storeToRefs(counterStore)

const addCount = () => {
  counterStore.count++
}
</script>

<style scoped lang="scss">
</style>