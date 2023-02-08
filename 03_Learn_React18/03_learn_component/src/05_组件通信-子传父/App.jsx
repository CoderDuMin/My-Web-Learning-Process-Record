import React, { Component } from 'react'
import AddCounter from './AddCounter'
import SubCounter from './SubCounter'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      counter:0
    }
  }
  changeCounter(count){
    this.setState({
      counter:this.state.counter + count
    })
  }
  render() {
    return (
      <div>
        <h2>当前计数:{this.state.counter}</h2>
        <AddCounter add={(count) => this.changeCounter(count)} />
        <SubCounter sub={(count) => this.changeCounter(count)} />
      </div>
    )
  }
}
