<template>
  <h3 style="color:skyblue;">banner组件</h3>
</template>

<script>
export default {
  beforeCreate(){
    console.log('banner beforeCreate')
  },
  created(){
    console.log("banner created")
  },
  beforeMount(){
    console.log("banner beforemount")
  },
  mounted(){
    console.log("banner mounted")
  },
  beforeUnmount(){
    console.log("banner beforeUnmount")
  },
  unmounted(){
    console.log("banner unmounted")
  }
}
</script>