<template>
 <div class="app">
    <h2>action发送网络请求</h2>
    <h2>轮播</h2>
    <ul>
      <li v-for="item in homeStore.banners">{{ item.title }}</li>
    </ul>
    <hr>
    <h2>推荐列表</h2>
    <ul>
      <li v-for="item in homeStore.recommends">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { toRefs } from 'vue';
import { useHome } from '@/stores/home'

const homeStore = useHome()

homeStore.getMultidataAciton()

</script>

<style scoped lang="scss">
</style>