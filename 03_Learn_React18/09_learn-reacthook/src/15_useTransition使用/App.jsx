import React, { memo } from 'react'
import { useTransition } from 'react';
import { useState } from 'react';
import names from './names'
export default memo(function App() {
  // console.log(names);
  const [nameArr,setNameArr] = useState(names)
  const [pending,startTransition] = useTransition()
  const handleSearch = (e) => {
    // let search = e.target.value
    // let arrs = names.filter(item => item.includes(search))
    // console.log('搜索结果',arrs)
    // setNameArr(arrs)
    startTransition(()=>{
      let search = e.target.value
      let arrs = names.filter(item => item.includes(search))
      console.log('搜索结果',arrs)
      setNameArr(arrs)
    })
  }
  return (
    <div>
      <label htmlFor="seach">
        搜索名字
        <input type="text" onChange={handleSearch} />
      </label>
      <p>{pending && '加载中'}</p>
      <ul>
        { !pending && 
          nameArr.map((item,index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    </div>
  )
})
