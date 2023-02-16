import React, { PureComponent } from 'react'
import Home from './home'
import { AppWrapper,HeadWrapper } from './style'
export class App extends PureComponent {
  constructor(){
    super()
    this.state = {
      color: 'red',
      size: '20px'
    }
  }
  render() {
    const { color,size } = this.state
    return (
      <AppWrapper>
        <HeadWrapper color={color} size={size}>
          <h3 className='title'>App组件的标题</h3>
          <p className='des'>我是app组件的内容</p>
          <button onClick={() => this.setState({color:'yellow'})}>改变颜色</button>
        </HeadWrapper>
        <Home/>
      </AppWrapper>
    )
  }
}

export default App