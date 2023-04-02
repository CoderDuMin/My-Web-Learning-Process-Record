// 回顾: 联合类型
type ID = number | string
const id1: ID = "abc"
const id2: ID = 123

// 交叉类型: 两种(多种)类型要同时满足
type TestType = number & string // 没有意义 never

interface  IPerson {
  name:string,
  age:number,
  walk:()=>void
}

interface IWorker {
  money:number,
  work:()=>string
}

type InfoType = IPerson & IWorker

const p:InfoType = {
  name:'aaa',
  age:16,
  money:166,
  walk(){
    
  },
  work(){
    return 'work'
  }
}

