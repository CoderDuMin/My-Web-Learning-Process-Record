import React, { Component,createRef, forwardRef } from 'react'

const Home = forwardRef(function(props,ref){
  return (
    <div ref={ref}>
      <h2>Home组件</h2>
      <span>嘿嘿嘿嘿嘿</span>
    </div>
  )
})

export class App extends Component {
  constructor(){
    super()
    this.homeRef = createRef()
  }
  getRefs(){
    console.log(this.homeRef.current)
  }
  render() {
    return (
      <div>
        <h2 ref='hhel'>我是哈哈哈</h2>
        <Home ref={this.homeRef} />
        <button onClick={() => this.getRefs()}>获取ref</button>
      </div>
    )
  }
}

export default App
