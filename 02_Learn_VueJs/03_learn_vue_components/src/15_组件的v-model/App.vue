<template>
  <h2>App组件</h2>
  <Counter1 v-model="counter1" />
  <!-- <Counter1 :modelValue="counter1" @update:modelValue="counter1 = $event" /> -->

  <!-- <Counter2 v-model:counter="counter2" /> -->
  <Counter2 :counter="counter2" @update:counter="counter2 = $event" />
</template>

<script>
import Counter1 from './Counter.vue'
import Counter2 from './Counter2.vue';
export default {
  components:{
    Counter1,
    Counter2
  },
  data(){
    return {
      counter1:100,
      counter2:200
    }
  }
}
</script>