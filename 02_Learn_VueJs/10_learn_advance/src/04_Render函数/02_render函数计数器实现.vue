<script >
import { h } from 'vue';
import Home from './Home.vue'
export default {
  data(){
    return {
      counter:0
    }
  },
  methods:{
    increment(){
      this.counter++
    },
    decrement(){
      this.counter--
    }
  },
  render(){
    return h('div',{className:'par',title:'parTitle'},[
      h('h2',{className:'count'},`当前计数为${this.counter}`),
      h('button',{onClick:this.increment},'+1'),
      h('button',{onClick:this.decrement},'-1'),
      h(Home)
    ])
  }
}
</script>

<style scoped lang="less">
</style>