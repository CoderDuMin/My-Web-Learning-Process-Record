import React, { PureComponent } from 'react'
import store from '../store'
import { subCountAction } from '../store/actionCreators'

export class Profile extends PureComponent {
  constructor(){
    super()
    this.state = {
      counter:store.getState().counter.counter
    }
  }
  componentDidMount(){
    store.subscribe(() => {
      this.setState({
        counter:store.getState().counter.counter
      })
    })
  }
  subCounter(num){
    store.dispatch(subCountAction(num))
  }
  render() {
    const { counter } = this.state
    return (
      <div>
        <h3>Profile组件，counter：{counter}</h3>
        <button onClick={() => this.subCounter(1)}>-1</button>
        <button onClick={() => this.subCounter(5)}>-5</button>
      </div>
    )
  }
}

export default Profile