<template>
  <div class="app">
    <h2>Home当前计数:{{$store.state.counter}}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()
const increment = () => {
  store.commit('addCounter')
}
</script>

<style lang="scss">
</style>
