interface IKun {
  name: string
  age: number
  slogan?: string
}

// 类型体操
type DMRequired<T> = {
  [P in keyof T]-?:T[P]
}

// IKun都变成必选的
type IKun2 = Required<IKun>
type IKun3 = DMRequired<IKun>


export {}
