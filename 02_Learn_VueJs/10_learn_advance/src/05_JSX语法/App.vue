<!-- <script lang="jsx">
import {ref} from 'vue'
import About from './About.vue'
export default {

  setup(){
    const counter = ref(0)
    const increment = () => {
      console.log("++")
      counter.value++
    }
    const decrement = () => {
      counter.value--
    } 

    return () => (<div class={'app'}>
        <h2>当前计数{counter.value}</h2>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <About />
      </div>)
  }
}
</script> -->

<template>
  <jsx />
</template>
<script setup lang="jsx">
  import {ref} from 'vue'
  import About from './About.vue'
  const counter = ref(0)
  const increment = () => {
    console.log("++")
    counter.value++
  }
  const decrement = () => {
    counter.value--
  } 

  const jsx = () => (
      <div class={'app'}>
        <h2>当前计数{counter.value}</h2>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <About />
      </div>
  )
</script>