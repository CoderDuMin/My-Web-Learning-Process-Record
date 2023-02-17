import React, { PureComponent } from 'react'
import classnames from 'classnames'

export class App extends PureComponent {
  constructor(){
    super()
    this.state = {
      isActive:true
    }
  }
  render() {
    return (
      <div>
        <h2 className={classnames('aa','bb')}>App的标题1</h2>
        <h2 className={classnames('aa',{'ccc':true},{'mmm':this.state.isActive})}>App的标题2</h2>
        <h3 className={classnames(['ccc','xxxx'],'fff',{'ggg':true})}>good</h3>
        <h3 className={classnames(null,undefined,0,1)}>good</h3>
      </div>
    )
  }
}

export default App