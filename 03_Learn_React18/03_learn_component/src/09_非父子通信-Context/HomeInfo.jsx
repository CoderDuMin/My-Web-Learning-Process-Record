import React, { Component } from 'react'
import ThemContext from './context/ThemContext'
import UserContext from './context/UserContext'

export default class HomeInfo extends Component {
  render() {
    return (
      <div>
        <h3>HomeInfo,color:{this.context.color},size:{this.context.size}</h3>
        <UserContext.Consumer>
          
          {
            value => {
              return (
                <div>info:name{value.name},age{value.age}</div>
              )
            }
          }
        </UserContext.Consumer>
      </div>
    )
  }
}
HomeInfo.contextType = ThemContext
