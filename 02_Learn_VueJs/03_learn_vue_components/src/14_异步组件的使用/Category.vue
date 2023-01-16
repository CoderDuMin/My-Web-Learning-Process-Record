<template>
  <h2>Category组件</h2>
</template>

<script>
export default{
  name:'category',
  created(){
    console.log("category created")
    },
    unmounted(){
      console.log('category unmounted')
    }
}
</script>