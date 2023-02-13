import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor(){
    super()
    this.state = {
      size:20
    }
  }
  addSize(){
    this.setState({
      size:this.state.size + 2
    })
  }
  render() {
    return (
      <div>
        <button onClick={() => this.addSize()}>增加</button>
        <h2 style={{color:'red',fontSize:`${this.state.size}px`}}>我是App标题</h2>
        <p style={{color:'blue'}}>我是内容</p>
      </div>
    )
  }
}

export default App