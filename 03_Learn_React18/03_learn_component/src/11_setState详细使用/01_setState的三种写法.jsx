import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      message:'hello world'
    }
  }
  changeText(){
    //1.setstate传入对象
    // this.setState({
    //   message:'hello setState'
    // })

    //2.传入函数
    // this.setState((state,props) => {
    //   return {message:'你好 setState'}
    // })

    // 3.传入第二个参数callback,在修改state后触发
    this.setState({
      message:'hello setState'
    },() => {
      console.log('callback',this.state)
    })

    console.log(this.state)
  }
  render() {
    console.log('render函数执行');
    return (
      <div>
        <h2>App组件,message:{this.state.message}</h2>
        <button onClick={() => this.changeText()}>修改</button>
      </div>
    )
  }
}
