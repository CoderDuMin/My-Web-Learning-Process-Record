import React, { PureComponent } from 'react'
import ClassCounter from './ClassCounter'
import HookCounter from './HookCounter'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <ClassCounter />
        <hr />
        <HookCounter />
      </div>
    )
  }
}

export default App