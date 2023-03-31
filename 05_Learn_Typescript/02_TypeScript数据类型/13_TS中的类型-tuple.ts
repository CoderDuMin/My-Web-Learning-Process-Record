// 保存我的个人信息: dumin 18 1.88
// 1.使用数组类型
// 不合适: 数组中最好存放相同的数据类型, 获取值之后不能明确的知道对应的数据类型
const info1: any[] = ["dumin", 18, 1.88]
const value = info1[2]


// 2.使用对象类型(最多)
const info2 = {
  name: "dumin",
  age: 18,
  height: 1.88
}

// 3.使用元组类型
// 元组数据结构中可以存放不同的数据类型, 取出来的item也是有明确的类型
const info3:[string,number,number] = ['dumin',18,1.88]
let v1 = info3[2]


// 在函数中使用元组类型是最多的(函数的返回值)
function useState(initState:number):[number,(num:number) => void]{
  let state = initState
  function setState(num:number):number{
    state = num
    return state
  }
  return [state,setState]
}

const [state,setState] = useState(29)
console.log(state)
console.log(setState(60))