import React, { PureComponent } from 'react'
import withRouter from '../hoc/withRouter'

export class DetailInfo extends PureComponent {
  render() {
    console.log('router',this.props.router)
    const {query} = this.props.router
    return (
      <div>
        <h2>detailInfo组件</h2>
        <p>name:{query.name}-age:{query.age}</p>
      </div>
    )
  }
}

export default withRouter(DetailInfo)