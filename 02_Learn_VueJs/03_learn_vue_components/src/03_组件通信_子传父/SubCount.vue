<template>
  <div>
    <button @click="toSub(1)">-1</button>
    <button @click="toSub(5)">-5</button>
    <button @click="toSub(10)">-10</button>
    <button @click="toSub(100)">-100</button>
  </div>
</template>

<script>
export default {
  emits:['sub'],
  methods:{
    toSub(num){
      this.$emit('sub',num)
    }
  }
}
</script>

<style>

</style>