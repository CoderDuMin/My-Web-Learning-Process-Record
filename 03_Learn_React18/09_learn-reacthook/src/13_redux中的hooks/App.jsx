import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { addCounterAction, changeMessageAction, subCounterAction } from './store/modules/counter'

const Home = memo((props) => {
  console.log('home render')
  const {message} = useSelector((state)=>{
    return {
      message:state.counter.message
    }
  },shallowEqual)
  const dispatch = useDispatch()
  const changeText = () => {
    dispatch(changeMessageAction('你好啊,hook')) 
  }
  return (
    <div>
      <h2>Home:{message}</h2>
      <button onClick={changeText}>改变文本</button>
    </div>
  )
})

const App = memo(() => {
  console.log('app render')
  const {counter} = useSelector((state)=>{
    return {
      counter:state.counter.counter
    }
  },shallowEqual)
  const dispatch = useDispatch()
  const increment = () => {
    dispatch(addCounterAction(1))
  }
  const decrement = () => {
    dispatch(subCounterAction(1))
  }
  return (
    <div>
      <h2>App组件,当前计数:{counter}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <Home />
    </div>
  )
})

export default App