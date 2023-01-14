<template>
  <div class="app">
    <h2>APP</h2>
    <h3>name:{{ name }}</h3>
    <button @click="name = '异乡人'">改变姓名</button>
    <button @click="isShow = !isShow">{{ !isShow ? '展示' : '隐藏'}}Banner组件</button>
    <Banner v-if="isShow" />
  </div>
</template>

<script>
  import Banner from './Banner.vue'
  export default {
    components:{
      Banner
    },
    data() {
      return {
        isShow:true,
        name:'cc哈哈'
      }
    },
    beforeCreate(){
      console.log('app beforeCreate')
    },
    created(){
      console.log("app create")
      console.log("发送网络请求")
    },
    beforeMount(){
      console.log("app beforeMount")
    },
    mounted(){
      console.log("app mounted")
    },
    beforeUpdate(){
      console.log("app beforeUpdate")
    },
    updated(){
      console.log("app updated")
    },
  
  }
</script>

<style scoped>
</style>

