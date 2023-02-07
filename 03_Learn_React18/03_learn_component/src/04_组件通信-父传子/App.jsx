import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>App跟组件</h2>
        <hr />
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}
