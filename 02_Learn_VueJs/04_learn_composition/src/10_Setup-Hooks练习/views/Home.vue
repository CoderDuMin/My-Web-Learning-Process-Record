<template>
  <h2>Home组件</h2>
  <h3>当前计数:{{counter}}</h3>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
  <hr>
  <button @click="title = '热门'">热门</button>
  <button @click="title = '流行'">流行</button>
  <button @click="title = '推荐'">推荐</button>
</template>

<script>
import { ref } from 'vue'
import { useCounter } from '../hooks/useCounter'
import { useTitle } from '../hooks/useTitle'
export default {
  setup(){
    const title = useTitle('热门')
    const {
      counter,
      increment,
      decrement
    } = useCounter()

    return {
      title,
      counter,
      increment,
      decrement
    }
  }
}
</script>