<template>
  <h2>我是App组件</h2>
  <h3>当前计数:{{counter}}</h3>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
</template>

<script>
import { ref } from 'vue'
import useCounter from './hooks/useCounter'
export default {
  setup(){
    // 1.常规写法
    // let counter = ref(100)
    // const increment = () => {
    //   counter.value++
    // }
    // const decrement = () => {
    //   counter.value--
    // }

    // 2.抽取hooks
    return {
      ...useCounter()
    }
  }
}
</script>