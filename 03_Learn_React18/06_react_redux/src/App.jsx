import React, { PureComponent } from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'
import store from './store'

import './App.css'
import About from './pages/About'
import Product from './pages/Product'

export class App extends PureComponent {
  constructor(){
    super()
    this.state = {
      counter:store.getState().counter.counter
    }
  }
  componentDidMount(){
    store.subscribe(() => {
      this.setState({
        counter:store.getState().counter.counter
      })
    })
  }
  render() {
    const { counter } = this.state
    return (
      <div>
        <h2>App组件Counter:{counter}</h2>
        <div className='box'>
          <Home />
          <Profile />
          <About />
          <Product />
        </div>
      </div>
    )
  }
}

export default App