<template>
  <Home />
  <About />
  <Category />
</template>

<script>
import Home from './views/Home.vue'
import About from './views/About.vue'
import Category from './views/Category.vue'
export default{
  components:{
    Home,
    About,
    Category
  },
  data(){
    return {

    }
  }
}
</script>