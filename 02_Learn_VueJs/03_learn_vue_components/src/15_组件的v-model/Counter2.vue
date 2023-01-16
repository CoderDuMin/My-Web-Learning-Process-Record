<template>
  <h2>当前计数:{{counter}}</h2>
  <button @click="change">改变计数</button>
</template>

<script>
  export default {
    props:['counter'],
    emits:['update:counter'],
    methods:{
      change(){
        this.$emit('update:counter',8899)
      }
    }
  }
</script>