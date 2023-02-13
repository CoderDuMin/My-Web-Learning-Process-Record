import React, { PureComponent } from 'react'
import './App.css'
import About from './pages/about'
import Home from './pages/home'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2 className='title'>App组件</h2>
        <hr />
        <Home />
        <hr />
        <About/>
      </div>
    )
  }
}

export default App