<template>
  <h2>Home组件</h2>
</template>

<script>
import messageMinin from '../mixins/message-minin';
export default{
  name:'home',
  mixins:[messageMinin],
  data(){
    return {
      message:'good home'
    }
  }
  
}
</script>