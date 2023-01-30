<!-- <script >
import { h, ref } from 'vue';
import Home from './Home.vue'
export default {
  setup(){
    const counter = ref(0)
    const increment = () => {
      counter.value++
    }
    const decrement = () => {
      counter.value--
    }
    return () =>  
    h('div',{className:'par',title:'parTitle'},[
      h('h2',{className:'count'},`当前计数为${counter.value}`),
      h('button',{onClick:increment},'+1'),
      h('button',{onClick:decrement},'-1'),
      h(Home)
    ])  
  }
}
</script> -->

<template>
  <render />
</template>
<script setup>
import {ref,h} from 'vue'
import Home from './Home.vue'
  const counter = ref(0)
  const increment = () => {
    console.log("++")
    counter.value++
  }
  const decrement = () => {
    counter.value--
  } 
  const render = () => h('div',{className:'par',title:'parTitle'},[
    h('h2',{className:'count'},`当前计数为${counter.value}`),
    h('button',{onClick:increment},'+1'),
    h('button',{onClick:decrement},'-1'),
    h(Home)
  ])  
</script>

<style scoped lang="less">
</style>