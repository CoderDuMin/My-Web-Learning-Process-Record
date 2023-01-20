<template>
  <div class="app">
    <h2>optionApi mapGetters</h2>
    <h2>游戏总价值:{{totalPrice}}</h2>
    <h2>用户信息:{{userInfo}}</h2>
    <h2>游戏信息101:{{getGameInfo101}}</h2>
    <hr>
    <h2>compositionApi mapGetters</h2>
    <h2>游戏总价值:{{gTotalPrice()}}</h2>
    <h2>用户信息:{{gUserInfo()}}</h2>
    <h2>游戏信息101:{{gGetGameInfo101()}}</h2>
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
const getters =  mapGetters(['totalPrice','userInfo','getGameInfo101'])
const newGetters = {}
 Object.keys(getters).forEach(key => {

  newGetters[key] = getters[key].bind({$store:store})
 })
 const {totalPrice:gTotalPrice,userInfo:gUserInfo,getGameInfo101:gGetGameInfo101} = newGetters
</script>

<style scoped lang="scss">
</style>