<script lang="jsx">
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
    return (
      <div class={'app'}>
        <h2>当前计数{this.counter}</h2>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
      </div>
    )
  }
}
</script>