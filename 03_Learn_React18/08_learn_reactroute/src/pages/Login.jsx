import React, { PureComponent } from 'react'
import { Navigate } from 'react-router-dom'

export class Login extends PureComponent {
  constructor(){
    super()
    this.state = {
      isLogin:false
    }
  }
  render() {
    return (
      <div>
        <h2>登录Page</h2>
        {
          !this.state.isLogin ? <button onClick={e => this.setState({isLogin:true})}>登录</button> : <Navigate to={'/home'} />
        }
        
      </div>
    )
  }
}

export default Login