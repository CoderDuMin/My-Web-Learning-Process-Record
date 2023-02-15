import React, { PureComponent } from 'react'

import homeCss from './index.module.css'

export class Home extends PureComponent {
  render() {
    return (
      <div className={homeCss.home}>
        <h2 className={homeCss.title}>我是home标题</h2>
        <span>hhh</span>
      </div>
    )
  }
}

export default Home