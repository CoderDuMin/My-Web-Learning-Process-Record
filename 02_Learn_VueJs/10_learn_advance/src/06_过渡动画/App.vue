<template>
  <div class="app">
    <div>
      <button @click="addNumber">增加数字</button>
      <button @click="delNumber">删除数字</button>
      <button @click="randomNumber">打乱数字</button>
    </div>
    <TransitionGroup name="dumin">
      <template v-for="item in numArr" :key="item" tag="div">
        <span>{{item}}</span>
      </template>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { shuffle } from 'underscore'

const numArr = ref([1,2,3,4,5,6,7,8,9])
const addNumber = () => {
  numArr.value.splice(Math.floor(Math.random() * numArr.value.length),0,Math.floor(Math.random() * 15))
}
const delNumber = () => {
  numArr.value.splice(Math.floor(Math.random() * numArr.value.length),1)
}
const randomNumber = () => {
  numArr.value = shuffle(numArr.value)
}
</script>

<style scoped >
span{
  display: inline-block;
  margin: 0 10px;
  font-size: 16px;
  font-weight: bold;
}

.dumin-enter-from,.dumin-leave-to{
  opacity: 0;
  transform: translateY(20px);
}
.dumin-enter-to,.dumin-leave-from{
  opacity: 1;
  transform: translateY(0);
}
.dumin-enter-active,.dumin-leave-active{
  transition: all 2s ease;
}
.dumin-leave-active{
  position: absolute;
}
.dumin-move{
  transition: all 2s ease;
}
</style>