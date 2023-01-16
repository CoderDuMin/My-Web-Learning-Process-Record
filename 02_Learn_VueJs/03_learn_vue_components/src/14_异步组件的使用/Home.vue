<template>
  <h2>Home组件{{ name }} - {{ age }}</h2>
  <h2>当前计数:{{counter}}</h2>
  <button @click="add">+1</button>
</template>

<script>
export default {
  name:'home',
  props:{
    name:{
      type:String,
      default:'xxhh'
    },
    age:{
      type:Number,
      default:12
    }
  },
  data(){
    return {
      counter:0
    }
  },
  methods:{
    add(){
      this.counter++
    }
  },
  created(){
    console.log("home created")
  },
  unmounted(){
    console.log('home unmounted')
  }
}
</script>