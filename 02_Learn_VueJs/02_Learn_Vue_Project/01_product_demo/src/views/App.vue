<template>
  <div>
    <h2>{{message}}</h2>
    <hr>
    <h2>当前计数:{{counter}}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <hr>
    <ProductItem></ProductItem>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue'
export default {
  components:{
    ProductItem
  },
  data(){
    return {
      message:'我是标题',
      counter:0
    }
  },
  methods:{
    increment(){
      this.counter++
    },
    decrement(){
      this.counter--
    }
  }
}
</script>

<style scoped>
h2{
  color:red;
}
</style>