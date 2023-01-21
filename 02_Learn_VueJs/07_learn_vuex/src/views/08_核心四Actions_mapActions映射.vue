<template>
  <div class="app">
    <h2>action基本使用</h2>
    <button @click="addCounterAction">派发counter</button>
    <button @click="changeInfoAction({name:'xxhh',level:19})">派发info</button>
    <hr>
    <h2>name:{{$store.state.name}}</h2>
    <h2>level:{{$store.state.level}}</h2>
    <h2>counter:{{$store.state.counter}}</h2>
   
  </div>
</template>
<script>
// import { mapActions } from 'vuex'
// export default {
//   methods:{
//     ...mapActions(['addCounterAction','changeInfoAction'])
//   }
// }
</script>

<script setup>
import {useStore,mapMutations} from 'vuex'
const store = useStore()

const addCounterAction = () => {store.dispatch('addCounterAction')}
const changeInfoAction = (payload) => {store.dispatch('changeInfoAction',payload)}
</script>

<style scoped lang="scss">
</style>