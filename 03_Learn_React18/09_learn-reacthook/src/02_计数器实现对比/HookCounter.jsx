import React, { memo } from 'react'
import { useState } from 'react'

const HookCounter = memo(() => {
  const [counter,setCounter] = useState(0)
  const changeCounter = (num) => {
    setCounter(counter + num)
  }
  return (
    <div>
      <h2>计数器案例(Hook)</h2>
      <h2>当前计数:{counter}</h2>
      <button onClick={e => changeCounter(1)}>+1</button>
      <button onClick={e => changeCounter(-1)}>-1</button>
    </div>
  )
})

export default HookCounter