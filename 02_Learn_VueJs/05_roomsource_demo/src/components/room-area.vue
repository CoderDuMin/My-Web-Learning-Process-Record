<template>
  <div class="room-area">
    <!-- 1.区域header -->
    <area-header :title="areaInfo.title" :subtitle="areaInfo.subtitle"/>

    <!-- 2.房间列表 -->
    <div class="room-list">
      <template v-for="item in areaInfo.list" :key="item.id">
        <room-item :item-data="item"/>
      </template>
    </div>
  </div>
</template>

<script setup>
import AreaHeader from '@/components/section-head.vue'
import RoomItem from '@/components/room-item.vue'
  const props = defineProps({
    areaInfo:{
      type:Object,
      default:()=>({})
    }
  })
</script>

<style scoped lang="scss">
  .room-list {
    display: flex;
    flex-wrap: wrap;
    margin: 20px -8px;
  }
</style>