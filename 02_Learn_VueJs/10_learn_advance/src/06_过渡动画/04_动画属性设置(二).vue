<template>
  <div class="app">
    <div>
      <button @click="isShow = !isShow">切换</button>
    </div>

    <!-- mode属性掌握 -->
    <transition name="dumin" mode="out-in">
      <h2 v-if="isShow">哈哈哈</h2>
      <h2 v-else>呵呵呵</h2>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isShow = ref(true)

</script>

<style scoped>

h2 {
  display: inline-block;
}

/* transition */
.dumin-enter-from,
.dumin-leave-to {
  opacity: 0;
}

.dumin-enter-to,
.dumin-leave-from {
  opacity: 1;
}


.dumin-enter-active {
  animation: duminAnim 2s ease;
  transition: opacity 2s ease;
}

.dumin-leave-active {
  animation: duminAnim 2s ease reverse;
  transition: opacity 2s ease;
}


@keyframes duminAnim {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}

</style>
