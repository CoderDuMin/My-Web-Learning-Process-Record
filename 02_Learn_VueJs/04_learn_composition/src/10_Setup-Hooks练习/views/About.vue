<template>
  <h2>About组件</h2>
  <h3>当前计数:{{counter}}</h3>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
  <br>
  <button @click="title">改变标题</button>
</template>

<script>
import { useCounter } from '../hooks/useCounter';
import { useTitle } from '../hooks/useTitle';
export default {
  setup(){
    useTitle('关于')
    return {
      ...useCounter()
    }
  }
}
</script>