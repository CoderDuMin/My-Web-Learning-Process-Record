import React, { Component } from 'react'
import ThemContext from './context/ThemContext'

export default class HomeItem extends Component {
  render() {
    return (
      <ThemContext.Consumer >
        {
          value => {
            return (
              <h3>homeitem: color{value.color}-size{value.size}</h3>
            )
          }
        }
      </ThemContext.Consumer>
    )
  }
}
