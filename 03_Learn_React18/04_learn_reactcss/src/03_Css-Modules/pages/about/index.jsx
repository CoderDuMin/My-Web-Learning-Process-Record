import React, { PureComponent } from 'react'

import aboutCss from './index.module.css'
export class About extends PureComponent {
  render() {
    return (
      <div className={aboutCss.title}>
        我是about组件
      </div>
    )
  }
}

export default About