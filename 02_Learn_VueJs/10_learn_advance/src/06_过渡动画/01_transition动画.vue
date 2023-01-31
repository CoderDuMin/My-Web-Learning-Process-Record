<template>
  <div class="app">
    <div>
      <button @click="isShow = !isShow">切换</button>
    </div>

    <transition name="dumin">
      <h2 v-if="isShow">哈哈哈哈</h2>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isShow = ref(false)

</script>

<style scoped>

h2 {
  display: inline-block;
}

.dumin-enter-from,
.dumin-leave-to {
  opacity: 0;
  transform: scale(0.6);
}

.dumin-enter-to,
.dumin-leave-from {
  opacity: 1;
  transform: scale(1);
}

.dumin-enter-active,
.dumin-leave-active {
  transition: all 2s ease;
}

</style>
