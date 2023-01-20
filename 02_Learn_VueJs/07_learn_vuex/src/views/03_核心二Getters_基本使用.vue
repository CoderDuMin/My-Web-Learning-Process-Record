<template>
  <div class="app">
    <h2>getters</h2>
    <h2>游戏总价值:{{$store.getters.totalPrice}}</h2>
    <h2>用户信息:{{$store.getters.userInfo}}</h2>
    <h2>游戏信息101:{{$store.getters.getGameInfo101}}</h2>
    <h2>游戏信息102:{{$store.getters.getGameInfoById(102)}}</h2>
    <h2>游戏信息103:{{$store.getters.getGameInfoById(103)}}</h2>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
</style>