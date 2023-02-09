import React, { Component } from 'react'
import ThemContext from './context/ThemContext'
import HomeBanner from './HomeBanner'
import HomeItem from './HomeItem'

export default class Home extends Component {
  render() {
    const {color,size} = this.context
    return (
      <div>
        <h2>Home组件:color-{color},size{size}</h2>
        <HomeItem />
        <HomeBanner />
      </div>
    )
  }
}
Home.contextType = ThemContext
