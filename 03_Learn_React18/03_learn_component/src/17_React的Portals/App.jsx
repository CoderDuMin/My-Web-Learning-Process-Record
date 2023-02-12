import React, { PureComponent, } from 'react'
import { createPortal } from 'react-dom'
import Modal from './Modal'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>App组件</h2>
        {
          createPortal(<h2>嘻嘻嘻</h2>,document.querySelector('#other'))
        }
        <Modal >
          <h3>我是modal</h3>
          <span>goodhhhh</span>
        </Modal>
      </div>
    )
  }
}

export default App