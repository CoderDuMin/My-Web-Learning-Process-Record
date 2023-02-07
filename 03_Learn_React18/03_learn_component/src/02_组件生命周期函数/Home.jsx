import React, { Component } from 'react'

export default class Home extends Component {
  constructor(){
    super()
    this.state = {
      message:'我是home,hello'
    }
    console.log('home constructor')
  }
  changeText(){
    this.setState({
      message:'我是CC哈哈,你好啊'
    })
  }
  componentDidMount(){
    console.log('home componentDidMount')
  }
  componentDidUpdate(){
    console.log('home componentDidUpdate')
  }
  componentWillUnmount(){
    console.log('home componentWillUnmount')
  }
  render() {
    console.log('home render');
    return (
      <div>
        <h3>Home组件</h3>
        <button onClick={e => this.changeText()}>修改</button>
        <h4 style={{color:'red'}}>{this.state.message}</h4>

      </div>
    )
  }
}
