import React, { Component } from 'react'

export default class MainProduct extends Component {
  render() {
    const { productList } = this.props
    return (
      <div>
        <div>MainProduct</div>
        <ul>
          {
            productList&&productList.map(item => {
              return <li key={item.acm}>{item.title}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
