import { createApp } from 'vue'
import directives from './01_自定义指令/directives'
// import App from './01_自定义指令/App.vue'
// import App from './04_Render函数/App.vue'
// import App from './05_JSX语法/App.vue'
import App from './06_过渡动画/App.vue'

createApp(App).use({
  install(app){
    console.log('自定义插件-对象形式被执行',app)
  }
}).use((app)=>{
  console.log('自定义插件-函数形式被执行',app)
}).use(directives).mount('#app')
