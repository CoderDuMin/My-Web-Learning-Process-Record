import React, { memo,useState } from 'react'
import { useCallback } from 'react';

const Home = memo((props) => {
  console.log('home组件渲染');
  return <button onClick={props.increment}>increment</button>
})

const App = memo(() => {
  console.log('app组件渲染');
  const [counter, setCounter] = useState(0)
  const [message, setMessage] = useState('哈哈哈')
  // function increment(){
  //   // console.log('定义increment')
  //   setCounter(counter+1)
  // }
  const increment = useCallback(() => {
    setCounter(counter+1)
  },[counter])

  const changeText = () => {
    setMessage('你好哇')
  }
  return (
    <div>
      <h2>App组件:counter{counter}</h2>
      <button onClick={increment}>+1</button>
      <Home increment={increment}></Home>
      <h2>message:{message}</h2>
      <button onClick={changeText}>修改文本</button>
    </div>
  )
})

export default App