import React, { Component } from 'react'
import Home from './Home'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      isShow:true
    }
  }
  changeShow(){
    this.setState({
      isShow:!this.state.isShow
    })
  }
  componentDidMount(){
    console.log('app componentDidMount');
  }
  render() {
    const { isShow } = this.state
    return (
      <div>
        <h2>App组件</h2>
        <button onClick={e => this.changeShow()}>切换</button>
        { isShow && <Home /> }
      </div>
    )
  }
}
