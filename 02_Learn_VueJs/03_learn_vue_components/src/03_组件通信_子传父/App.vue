<template>
  <h2>当前计数:{{counter}}</h2>
  <add-count @add="add" />
  <sub-count @sub="sub" />
</template>

<script>
import AddCount from './AddCount.vue'
import SubCount from './SubCount.vue'
export default {
  components:{
    AddCount,
    SubCount
  },
  data(){
    return {
      counter:0
    }
  },
  methods:{
    add(num){
      this.counter += num
    },
    sub(num){
      this.counter -= num
    }
  }
}
</script>

<style>

</style>