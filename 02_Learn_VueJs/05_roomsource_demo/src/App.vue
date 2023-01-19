<template>
  <div class="app">
    <RoomArea :area-info="highScroeRooms" />
  </div>
</template>

<script setup>
import RoomArea from './components/room-area.vue';
import { ref,onMounted } from 'vue'

const highScroeRooms = ref({})
onMounted(()=>{
  setTimeout(() => {
    import('./data/high_score.json').then(res => {
      highScroeRooms.value = res.default
      console.log('highScroeRooms',highScroeRooms)
    })
  }, 1000);
})
</script>

<style scoped lang="scss">
  .app{
    width: 1032px;
    margin: 0 auto;
  }
</style>