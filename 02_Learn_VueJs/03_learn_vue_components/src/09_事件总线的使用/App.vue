<template>
  <div class="app">
    <h2>APP</h2>
    <button @click="name = '异乡人'">改变姓名</button>
    <hr>
    <Home />
    <hr>
    <Category />
  </div>
</template>

<script>
  import Home from './Home.vue'
  import Category from './Category.vue'
  import { computed} from 'vue'
  export default {
    components: {
      Home,
      Category
    },
    data() {
      return {
        name:'cc哈哈',
        age:18
      }
    },
    provide(){
      return {
        name:computed(()=>{
          return this.name
        }),
        age:this.age
      }
    }
   
  }
</script>

<style scoped>
</style>

