<template>
  <div>
    <button @click="toAdd(1)">+1</button>
    <button @click="toAdd(5)">+5</button>
    <button @click="toAdd(10)">+10</button>
    <button @click="toAdd(100)">+100</button>
  </div>
</template>

<script>
export default {
  emits:['add'],
  methods:{
    toAdd(num){
      this.$emit('add',num)
    }
  }
}
</script>

<style>

</style>