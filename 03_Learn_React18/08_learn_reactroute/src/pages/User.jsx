import React, { PureComponent } from 'react'
import withRouter from '../hoc/withRouter'

export class User extends PureComponent {
  render() {
    return (
      <div>
        <h2>当前user,id:{this.props.router.params.id}</h2>
      </div>
    )
  }
}

export default withRouter(User) 