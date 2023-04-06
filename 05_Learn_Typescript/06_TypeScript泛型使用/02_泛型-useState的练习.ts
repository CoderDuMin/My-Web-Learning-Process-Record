
//没有使用泛型
// function useState(initState:number):[number,(state:number)=>void]{
//   let state = initState
//   function setState(cState:number):void{
//     state = cState
//   }

//   return [state,setState]
// }

// const [state1,setState1] = useState(200)
// console.log(state1)
// setState1(666)

function useState<Type>(initState:Type):[Type,(state:Type)=>void]{
  let state = initState
  function setState(cState:Type):void{
    state = cState
  }

  return [state,setState]
}

const [state1,setState1] = useState(200)
console.log(state1)
setState1(666)


const [state2,setState2] = useState('yihamin')
console.log(state2)
setState2('dumin')


export {}
