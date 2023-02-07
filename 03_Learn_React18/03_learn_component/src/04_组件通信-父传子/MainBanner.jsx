import React, { Component } from 'react'

export default class MainBanner extends Component {
  constructor(props){
    super(props)
    this.state = {
      message:'轮播图'
    }
  }
  render() {
    const { message } = this.state
    const { banner } = this.props
    return (
      <div>
        <div>MainBanner,{message}</div>
        <ul>
          {
            banner&&banner.map(item => {
              return <li key={item.acm}>{item.title}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
