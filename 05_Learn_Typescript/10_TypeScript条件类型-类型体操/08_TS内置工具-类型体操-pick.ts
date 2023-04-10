interface IKun {
  name: string
  age: number
  slogan?: string
}

// 确实keys一定是可以作为key的联合类型
type DMPick<T,K extends keyof T> = {
  [P in K]:T[P]
}

// IKun都变成可选的
type IKuns = Pick<IKun, "slogan"|"name">
type IKuns2 = DMPick<IKun, "slogan"|"name">


export {}
