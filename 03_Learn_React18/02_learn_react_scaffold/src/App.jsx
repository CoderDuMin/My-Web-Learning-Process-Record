import React, { Component } from 'react'

import Home from './views/Home'

export default class App extends Component {
  render() {
    return (
      <div>
        <div>Hello Scaffold</div>
        <h2>这里是App根组件</h2>
        <hr />
        <Home />
      </div>
    )
  }
}
