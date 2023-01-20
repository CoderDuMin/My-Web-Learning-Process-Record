<template>
  <div class="app">
    <button @click="changeName('异乡人')">改变name</button>
    <button @click="addCounter">改变counter</button>
    <button @click="changeInfo({name:'xxhh',level:19})">改变info</button>
    <hr>
    <h2>name:{{$store.state.name}}</h2>
    <h2>level:{{$store.state.level}}</h2>
    <h2>counter:{{$store.state.counter}}</h2>
   
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  methods:{
    ...mapMutations(['addCounter','changeName','changeInfo'])
  }
}
</script>

<script setup>
import {useStore,mapMutations} from 'vuex'
const store = useStore()
// 不推荐
// const mutations = mapMutations(['addCounter','changeName','changeInfo'])
// const newMutations = {}
// Object.keys(mutations).forEach(key => {
//   newMutations[key] = mutations[key].bind({$store:store})
// })
// const {addCounter,changeInfo,changeName} = newMutations
</script>

<style scoped lang="scss">
</style>