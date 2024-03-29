import { createApp } from 'vue'
// import App from './App.vue'
// import App from './01_组件的嵌套使用/App.vue'
// import App from './02_组件通信_父传子/App.vue'
// import App from './03_组件通信_子传父/App.vue'
// import App from './04_组件通信-案例练习(重要)/App.vue'
// import App from './05_组件插槽-基本使用(掌握)/App.vue'
// import App from './06_组件插槽-具名插槽(掌握)/App.vue'
// import App from './07_组件插槽-作用域插槽(理解)/App.vue'
// import App from './08_Provide和Inject(了解)/App.vue'
// import App from './09_事件总线的使用/App.vue'
// import App from './10_生命周期函数的演练/App.vue'
// import App from './11_ref获取元素组件/App.vue'
// import App from './12_动态组件的使用/App.vue'
// import App from './13_Keep-Alive的使用/App.vue'
// import App from './14_异步组件的使用/App.vue'
// import App from './15_组件的v-model/App.vue'
import App from './16_组件的混入Mixin/App.vue'

createApp(App).mixin({
  created(){
    console.log('allmixin created')
  }
}).mount('#app')

