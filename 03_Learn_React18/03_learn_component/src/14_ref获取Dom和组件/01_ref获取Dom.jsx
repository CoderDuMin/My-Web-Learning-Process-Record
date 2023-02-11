import React, { Component,createRef } from 'react'

export class App extends Component {
  constructor(){
    super()
    this.boxRef = createRef()
    this.ulRef = null
  }
  getRefs(){
    // 1.方式一: 在React元素上绑定一个ref字符串
    // console.log(this.refs.hhel)

    // 2.方式二: 提前创建好ref对象, createRef(), 将创建出来的对象绑定到元素
    // console.log(this.boxRef.current);

    // 3.方式三: 传入一个回调函数, 在对应的元素被渲染之后, 回调函数被执行, 并且将元素传入
    console.log(this.ulRef)
  }
  render() {
    return (
      <div>
        <h2 ref='hhel'>我是哈哈哈</h2>
        <div ref={this.boxRef}>
          我是box
        </div>
        <ul ref={el => this.ulRef = el}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul> 
        <button onClick={() => this.getRefs()}>获取ref</button>
      </div>
    )
  }
}

export default App
