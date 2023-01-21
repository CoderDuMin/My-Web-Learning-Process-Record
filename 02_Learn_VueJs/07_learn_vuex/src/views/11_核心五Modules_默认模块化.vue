<template>
  <div class="app">
    <h2>modules命名空间</h2>
    <h2>轮播</h2>
    <ul>
      <li v-for="item in $store.state.home.banners">{{ item.title }}</li>
    </ul>
    <hr>
    <h2>推荐列表</h2>
    <ul>
      <li v-for="item in $store.state.home.recommends">{{ item.title }}</li>
    </ul>
    <hr>
    <button @click="addMCounter">mCounter派发事件</button>
    <h2>Moudle:Counter的计数:{{$store.state.mcounter.counter}}</h2>
    <h2>Moudle:Counter的allCounter:{{$store.getters['mcounter/allCounter']}}</h2>
    <h2>RootState计数:{{$store.state.counter}}</h2>
  </div>
</template>

<script setup>
import {useStore,mapMutations} from 'vuex'
const store = useStore()

store.dispatch('getMultidataAciton')

const addMCounter = () => {
  store.dispatch('mcounter/addCounterAction')
}
</script>

<style scoped lang="scss">
</style>