<template>
  <div class="app">
    <h2>action基本使用</h2>
    <button @click="addCounter">派发counter</button>
    <button @click="changeInfo({name:'xxhh',level:19})">派发info</button>
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
//     addCounter(){
//       this.$store.dispatch('addCounterAction')
//     },
//     changeInfo(payload){
//       this.$store.dispatch('changeInfoAction',payload)
//     }
//   }
// }
</script>

<script setup>
import {useStore,mapMutations} from 'vuex'
const store = useStore()

const addCounter = () => {store.dispatch('addCounterAction')}
const changeInfo = (payload) => {store.dispatch('changeInfoAction',payload)}
</script>

<style scoped lang="scss">
</style>