<template>
  <div class="area-header">
    <h3 class="title">{{ title }}</h3>
    <div class="subtitle">{{ subtitle }}</div>
  </div>
</template>

<script setup>
  defineProps(['title','subtitle'])
</script>

<style scoped lang="scss">
.area-header {
  height: 84px;

  .title {
    font-size: 22px;
  }

  .subtitle {
    margin-top: 12px;
    font-size: 16px;
  }
}
</style>