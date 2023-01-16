<template>
  <h2>Home组件{{ name }} - {{ age }}</h2>
</template>

<script>
export default {
  props:{
    name:{
      type:String,
      default:'xxhh'
    },
    age:{
      type:Number,
      default:12
    }
  }
}
</script>