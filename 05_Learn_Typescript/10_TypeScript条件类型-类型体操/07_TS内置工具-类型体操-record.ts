interface IKun {
  name: string
  age: number
  slogan?: string
}

// 类型体操
// name | age | slogan
type keys = keyof IKun
type Res = keyof any // => number|string|symbol
type DMRecord<K extends keyof any,T> = {
  [P in K ]:T
} 



type t1 = "上海" | "北京" | "洛杉矶"
type IKuns = Record<t1, IKun>
type IKuns2 = DMRecord<t1, IKun>

const ikuns: IKuns = {
  "上海": {
    name: "xxx",
    age: 10
  },
  "北京": {
    name: "yyy",
    age: 5
  },
  "洛杉矶": {
    name: "zzz",
    age: 3
  }
}

export {}
