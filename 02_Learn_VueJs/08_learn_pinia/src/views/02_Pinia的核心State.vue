<template>
  <h2>Home组件</h2>
  <button @click="changeInfo">修改</button>
  <button @click="reset">重置</button>
  <h3>name:{{name}}</h3>
  <h3>age:{{age}}</h3>
  <h3>level:{{level}}</h3>
</template>

<script setup>
import { useUser } from '@/stores/user';
import { storeToRefs } from 'pinia'
import { toRefs } from 'vue';

const userStore = useUser()

const {name,age,level} = storeToRefs(userStore)

const changeInfo = () => {
  // 1.直接修改
  userStore.name = '异乡人'

  // 2.批量修改
  // userStore.$patch({
  //   name:'嘻嘻哈哈',
  //   level:200
  // })
  
  // 3.替换state
  // userStore.$state = {
  //   name:'杰洛特',
  //   level:66
  // }
}
const reset = () => {
  userStore.$reset()
}
</script>

<style scoped lang="scss">
</style>