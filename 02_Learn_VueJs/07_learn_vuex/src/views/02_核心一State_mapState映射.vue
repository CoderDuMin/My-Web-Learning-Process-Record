<template>
  <div class="app">
    <button @click="changeName">改变名称</button>
    <hr>
    <h2>$store获取</h2>
    <p>name:{{ $store.state.name }}</p>
    <p>level:{{ $store.state.level }}</p>
    <p>money:{{ $store.state.money }}</p>
    <hr>

    <!-- <h2>optionsApi 的 mapState(数组写法)</h2>
    <p>name:{{ name }}</p>
    <p>level:{{ level }}</p>
    <p>money:{{ money }}</p>
    <hr> -->

    <h2>optionsApi 的 mapState(对象写法)</h2>
    <p>name:{{ cName }}</p>
    <p>level:{{ cLevel }}</p>
    <p>money:{{ cMoney }}</p>

    <!-- <h2>compositionApi 的 mapState</h2>
    <p>name:{{ ccName }}</p>
    <p>level:{{ ccLevel }}</p> -->

    <h2>compositionApi使用toRefs获取store的state</h2>
    <p>name:{{ ccName }}</p>
    <p>level:{{ ccLevel }}</p> 
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {

  computed:{
    // 数组写法
    // ...mapState(['name','level','money'])

    // 对象写法
    ...mapState({
      cName:state => state.name,
      cLevel:state => state.level,
      cMoney:state => state.money
    })
  }
}
</script>

<script setup>
import { computed, toRefs } from 'vue';
import { mapState,useStore } from 'vuex';

const store = useStore()
//compostionApi中使用mapState不推荐,推荐使用pinia状态管理或者使用toRefs
// const {name,level} = mapState(['name','level'])

// const ccName = computed(name.bind({$store:useStore()}))
// const ccLevel = computed(level.bind({$store:useStore()}))

const { name:ccName,level:ccLevel} = toRefs(store.state)

const changeName = () => {
  store.commit('changeName','yihamin')
}
</script>

<style scoped lang="scss">
</style>