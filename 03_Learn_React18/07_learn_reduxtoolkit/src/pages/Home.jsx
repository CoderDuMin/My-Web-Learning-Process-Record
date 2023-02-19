import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addCounter, subCounter } from '../store/modules/counter'

export class Home extends PureComponent {
  render() {
    const { counter,addNum,subNum } = this.props
    return (
      <div>
        <h2>Home组件,counter:{counter}</h2>
        <button onClick={() => addNum(1)}>+1</button>
        <button onClick={() => addNum(5)}>+5</button>
        <button onClick={() => subNum(1)}>-1</button>
        <button onClick={() => subNum(5)}>-5</button>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  counter:state.counter.counter
})
const mapDispatchToProps = (dispatch) => ({
  addNum(num){
    dispatch(addCounter(num))
  },
  subNum(num){
    dispatch(subCounter(num))
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(Home) 