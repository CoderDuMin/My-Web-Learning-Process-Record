import React, { PureComponent } from 'react'

export class ClassCounter extends PureComponent {
  constructor(){
    super()
    this.state = {
      counter:0
    }
  }
  changeCounter(num){
    this.setState({
      counter:this.state.counter + num
    })
  }
  render() {
    const {counter} = this.state
    return (
      <div>
        <h2>计数器案例(class)</h2>
        <h2>当前计数:{counter}</h2>
        <button onClick={e => this.changeCounter(1)}>+1</button>
        <button onClick={e => this.changeCounter(-1)}>-1</button>
      </div>
    )
  }
}

export default ClassCounter