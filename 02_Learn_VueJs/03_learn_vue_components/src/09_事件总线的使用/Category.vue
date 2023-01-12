<template>
  <h2>Category组件</h2>
  <span>{{ message }}</span>
</template>

<script>
import eventBus from './utils/eventBus'
export default {
  data(){
    return {
      message:'hhhh'
    }
  },
  methods:{
    sendMsg(msg){
      console.log('sendmsg')
      this.message = msg
    }
  },
  created(){
    eventBus.on('sendMsg',this.sendMsg)
  },
  unmounted(){
    eventBus.off('sendMsg',this.sendMsg)
  }
}
</script>
