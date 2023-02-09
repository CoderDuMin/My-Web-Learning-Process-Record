import React, { Component } from 'react'
import NavBar from './nav-bar'
import NavBar2 from './nav-bar-2'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar>
          <button>返回</button>
          <h2>我是中间</h2>
          <span>right</span>
        </NavBar>
        <hr />
        <NavBar2 
          leftSlot={<button>左边</button>}
          centerSlot={<h3>中间</h3>}
          rightSlot={<span>you边</span>}
          />
      </div>
    )
  }
}
