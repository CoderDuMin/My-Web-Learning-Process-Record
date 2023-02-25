import React, { memo, useId,useState } from 'react'

const App = memo(() => {
  const id = useId()
  const [text, setText] = useState('')
  const changeValue = (e) => {
    setText(e.target.value)
  }
  return (
    <div>
      <label htmlFor={id}>输入框
        <input type="text" id={id} onChange={changeValue} value={text}/>
      </label>
    </div>
  )
})

export default App