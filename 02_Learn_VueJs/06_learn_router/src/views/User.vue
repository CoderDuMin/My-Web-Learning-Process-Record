<template>
  <h2>User</h2>
  <p>当前用户:{{$route.params.id}}</p>
</template>

<script setup>
import {onBeforeRouteUpdate, useRoute} from 'vue-router'
console.log('user',useRoute().params.id)

onBeforeRouteUpdate((to,from) => {
  console.log('to',to.params.id)
  console.log('from',from.params.id)
})
</script>

<style scoped lang="scss">
</style>