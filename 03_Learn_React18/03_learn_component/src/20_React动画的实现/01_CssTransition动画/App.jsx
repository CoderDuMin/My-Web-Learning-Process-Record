import React, { PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group'

import './style.css'

export class App extends PureComponent {
  constructor(){
    super()
    this.state={
      isShow : true
    }
  }
  change(){
    this.setState({
      isShow:!this.state.isShow
    })
  }
  render() {
    const { isShow } = this.state
    return (
      <div>
        <button onClick={() => this.change()}>切换</button>
        <CSSTransition in={isShow} 
                       classNames="dumin" 
                       unmountOnExit={true}
                       timeout={1000}
                       appear
                       onEnter={e => console.log("开始进入动画")}
                       onEntering={e => console.log("执行进入动画")}
                       onEntered={e => console.log("执行进入结束")}
                       onExit={e => console.log("开始离开动画")}
                       onExiting={e => console.log("执行离开动画")}
                       onExited={e => console.log("执行离开结束")}>
          <h2>哈哈哈哈</h2>
        </CSSTransition>
      </div>
    )
  }
}

export default App