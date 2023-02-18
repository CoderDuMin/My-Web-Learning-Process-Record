import React, { PureComponent } from 'react'
import store from '../store'
import { addCountAction } from '../store/actionCreators'

export class Home extends PureComponent {
  constructor(){
    super()
    this.state = {
      counter:store.getState().counter
    }
  }
  componentDidMount(){
    store.subscribe(() => {
      this.setState({
        counter:store.getState().counter
      })
    })
  }
  addCounter(num){
    store.dispatch(addCountAction(num))
  }
  render() {
    const { counter } = this.state
    return (
      <div>
        <h3>Home组件，counter：{counter}</h3>
        <button onClick={() => this.addCounter(1)}>+1</button>
        <button onClick={() => this.addCounter(5)}>+5</button>
      </div>
    )
  }
}

export default Home