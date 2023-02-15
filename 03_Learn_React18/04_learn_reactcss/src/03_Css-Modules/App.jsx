import React, { PureComponent } from 'react'
// import './App.css'
import About from './pages/about'
import Home from './pages/home'

import appCss from './App.module.css'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={appCss.title}>App组件</h2>
        <hr />
        <Home />
        <hr />
        <About/>
      </div>
    )
  }
}

export default App