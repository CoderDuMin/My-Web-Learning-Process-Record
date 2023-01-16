<template>
  <h2>当前计数:{{modelValue}}</h2>
  <button @click="change">改变计数</button>
</template>

<script>
  export default {
    props:['modelValue'],
    emits:['update:modelValue'],
    methods:{
      change(){
        this.$emit('update:modelValue',9999)
      }
    }
  }
</script>