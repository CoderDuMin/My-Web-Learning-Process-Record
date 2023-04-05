// TypeScript对于类型检测的时候使用的鸭子类型
// 鸭子类型: 如果一只鸟, 走起来像鸭子, 游起来像鸭子, 看起来像鸭子, 那么你可以认为它就是一只鸭子
// 鸭子类型, 只关心属性和行为, 不关心你具体是不是对应的类型

interface IPerson{
  name:string,
  age:number
}

const info:IPerson = {name:'111',age:12}

const testInfo = {name:'111',age:12,sex:'0'}
const info2:IPerson = testInfo
// const info3:IPerson = {name:'111',age:12,sex:'0'}

export {}