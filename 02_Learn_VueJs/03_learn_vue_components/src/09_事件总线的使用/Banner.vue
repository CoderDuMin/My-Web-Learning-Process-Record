<template>
  <h3>这里是banner组件,姓名{{ name }},年龄{{age}}</h3>
  <button @click="sendMSg">发出事件</button>
</template>

<script>
import eventBus from './utils/eventBus'
export default {
  inject:['name','age'],
  methods:{
    sendMSg(){
      eventBus.emit('sendMsg','你好啊,信息来自banner')
    }
  }
}
</script>