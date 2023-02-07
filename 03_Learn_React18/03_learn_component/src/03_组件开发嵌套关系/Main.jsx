import React, { Component } from 'react'
import MainBanner from './MainBanner'
import MainProduct from './MainProduct'

export default class Main extends Component {
  render() {
    return (
      <div>
        <h3>Main组件</h3>
        <MainBanner />
        <MainProduct />
        <hr />
      </div>
    )
  }
}
