<template>
  <div>
    <h2>app</h2>
    <ShowInfo/>
    <ShowInfo :area="['广州市','杭州市']" :num="5" :name="'芜湖项目'" intro="这是芜湖项目的介绍" :gmt="'2023-01-10'" />
  </div>
</template>

<script>
import ShowInfo from './ShowInfo.vue'
export default {
  components:{
    ShowInfo
  }
}
</script>

<style>

</style>