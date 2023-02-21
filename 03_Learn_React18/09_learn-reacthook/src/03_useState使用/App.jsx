import React, { memo,useState } from 'react'

const App = memo(() => {
  const [message, setMessage] = useState('hello useState')
  return (
    <div>
      <h2>当前文本:{message}</h2>
      <button onClick={() => setMessage('你好啊,hooks')}>修改文本</button>
    </div>
  )
})

export default App