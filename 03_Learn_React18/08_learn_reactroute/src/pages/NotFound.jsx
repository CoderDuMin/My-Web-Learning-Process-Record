import React, { PureComponent } from 'react'

export class NotFound extends PureComponent {
  render() {
    return (
      <div>
        <h4 style={{color:'red'}}>404,页面未找到</h4>
        <p>该页面不存在,请联系管理员</p>
      </div>
    )
  }
}

export default NotFound