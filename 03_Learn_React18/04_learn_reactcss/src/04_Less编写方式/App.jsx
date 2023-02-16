import React, { PureComponent } from 'react'

import './App.less'
export class App extends PureComponent {
  render() {
    return (
      <div className='main'>
        <h2>我是App组件的标题</h2>
        <p>我是App组件的文本内容</p>
      </div>
    )
  }
}

export default App