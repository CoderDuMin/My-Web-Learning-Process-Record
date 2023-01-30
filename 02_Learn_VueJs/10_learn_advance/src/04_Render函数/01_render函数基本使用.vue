<script >
import { h } from 'vue';

export default {
  render(){
    return h('div',{className:'par',title:'parTitle'},[
      h('span',null,'我是span'),
      h('h2',{className:'count'},'当前计数为0')
    ])
  }
}
</script>

<style scoped lang="less">
</style>