import React, { Component } from 'react'

export default class Home extends Component {
  constructor(){
    super()
    this.state = {
      counter:0
    }
  }
  changeCount(count){
    this.setState({
      counter:this.state.counter + count
    })
  }
  render() {
    return (
      <div>
        <h3>Home组件,当前计数{this.state.counter}</h3>
        <button onClick={() => this.changeCount(1)}>+1</button>
        <button onClick={() => this.changeCount(-1)}>-1</button>
      </div>
    )
  }
}
