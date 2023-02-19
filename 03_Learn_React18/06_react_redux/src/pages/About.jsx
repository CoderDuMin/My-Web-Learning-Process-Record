import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import store from '../store'
import { addCountAction, fetchHomeMultData, subCountAction } from '../store/actionCreators'

export class About extends PureComponent {
  componentDidMount(){
    store.dispatch(fetchHomeMultData()) 
  }
  render() {
    const { counter,addCount,subCount} = this.props
    return (
      <div>
        <h2>About组件,counter:{counter}</h2>
        <button onClick={() => addCount(1)}>+1</button>
        <button onClick={() => addCount(5)}>+5</button>
        <button onClick={() => subCount(1)}>-1</button>
        <button onClick={() => subCount(5)}>-5</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter:state.counter.counter
})

const mapDispatchToProps = (dispatch) => ({
  addCount(num){
    dispatch(addCountAction(num))
  },
  subCount(num){
    dispatch(subCountAction(num))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(About)