import React, { Component,createRef, PureComponent } from 'react'

class Home extends PureComponent {
  test(){
    console.log('home test')
  }
  render(){
    return <h3>Home组件</h3>
  }
}

export class App extends Component {
  constructor(){
    super()
    this.homeRef = createRef()
  }
  getRefs(){
    console.log(this.homeRef.current)
    this.homeRef.current?.test()
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
