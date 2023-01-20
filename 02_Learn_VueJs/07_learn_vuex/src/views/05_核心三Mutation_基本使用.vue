<template>
  <div class="app">
    <button @click="changeName">改变name</button>
    <button @click="changeCounter">改变counter</button>
    <button @click="changeInfo">改变info</button>
    <hr>
    <h2>name:{{$store.state.name}}</h2>
    <h2>level:{{$store.state.level}}</h2>
    <h2>counter:{{$store.state.counter}}</h2>
   
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed:{
    ...mapGetters(['totalPrice','userInfo','getGameInfo101'])
  }
}
</script>

<script setup>
import {useStore,mapGetters} from 'vuex'
const store = useStore()

const changeName = () => {
  store.commit('changeName','异乡人')
}
const changeCounter = () => {
  store.commit('addCounter')
}
const changeInfo = () => {
  store.commit('changeInfo',{name:'xxhh',level:18})
}
</script>

<style scoped lang="scss">
</style>