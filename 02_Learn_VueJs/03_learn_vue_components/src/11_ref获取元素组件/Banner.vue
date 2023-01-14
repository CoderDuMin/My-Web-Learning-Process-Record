<template>
  <div>
    <h3 style="color:skyblue;">banner组件</h3>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      message:'hello banner'
    }
  },
  methods:{
    showMessage(){
      console.log('展示messgae',this.message)
    }
  }
}
</script>