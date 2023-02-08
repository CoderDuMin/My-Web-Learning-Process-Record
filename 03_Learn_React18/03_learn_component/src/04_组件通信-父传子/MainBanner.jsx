import React, { Component } from 'react'
import propTypes from 'prop-types'
class MainBanner extends Component {
  constructor(props){
    super(props)
    this.state = {
      message:'轮播图'
    }
  }
  render() {
    const { message } = this.state
    const { banner,title } = this.props
    return (
      <div>
        <div>{title}的{message}</div>
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

MainBanner.propTypes = {
  banner:propTypes.array,
  title:propTypes.string
}
MainBanner.defaultProps = {
  banner:[],
  title:'默认'
}

export default MainBanner
