<template>
  <div class="app">
    <h2>action发送网络请求</h2>
    <h2>轮播</h2>
    <ul>
      <li v-for="item in $store.state.banners">{{ item.title }}</li>
    </ul>
    <hr>
    <h2>推荐列表</h2>
    <ul>
      <li v-for="item in $store.state.recommends">{{ item.title }}</li>
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