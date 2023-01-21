<template>
  <div class="app">
    <h2>modules基本使用</h2>
    <h2>轮播</h2>
    <ul>
      <li v-for="item in $store.state.home.banners">{{ item.title }}</li>
    </ul>
    <hr>
    <h2>推荐列表</h2>
    <ul>
      <li v-for="item in $store.state.home.recommends">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script setup>
import {useStore,mapMutations} from 'vuex'
const store = useStore()

store.dispatch('getMultidataAciton')
</script>

<style scoped lang="scss">
</style>