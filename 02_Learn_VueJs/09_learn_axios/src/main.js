import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import dmRequest from './service'

createApp(App).mount('#app')

dmRequest.request({
  url: "/lyric?id=500665346"
}).then(res => {
  console.log("res:", res)
})

dmRequest.get({
  url: "/lyric",
  params: {
    id: 500665346
  }
}).then(res => {
  console.log("res:", res)
})
