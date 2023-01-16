<template>
  <div class="tab">
    <template v-for="item in tabs" >
      <button :class="{active: item == currentTab}" @click="tabClick(item)">{{ item }}</button>
    </template>
  </div>
  <keep-alive :include="['home','category']">
    <Component :is="currentTab" name="督名" :age="18" />
  </keep-alive>
</template>

<script>
import Home from './Home.vue';
import About from './About.vue';
import Category from './Category.vue';
export default {
  components:{
    Home,
    About,
    Category
  },
  data(){
    return {
      tabs:['home','about','category'],
      currentTab:'home'
    }
  },
  methods:{
    tabClick(item){
      this.currentTab = item
    }
  }
}
</script>

<style scoped>
  .tab{
    display: flex;
    align-items: center;
    
  }
  .active{
      color:red;
    }
</style>