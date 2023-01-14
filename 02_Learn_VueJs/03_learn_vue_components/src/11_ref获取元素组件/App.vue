<template>
  <div class="app">
    <h2>APP</h2>
    <h3 ref="infoRef">name:{{ name }}</h3>
    <button ref="btnRef" @click="getRef">获取ref</button>
    <h3></h3>
    <Banner ref="bannerRef" />
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
        name:'cc哈哈'
      }
    },
    methods:{
      getRef(){
        console.log('infoRef',this.$refs.infoRef)
        console.log('btnRef',this.$refs.btnRef)
        console.log("bannerRef",this.$refs.bannerRef)
        console.log("bannerRef",this.$refs.bannerRef.$el)
      }
    }
  }
</script>

<style scoped>
</style>

