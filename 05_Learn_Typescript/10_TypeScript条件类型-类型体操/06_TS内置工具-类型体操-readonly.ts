interface IKun {
  name: string
  age: number
  slogan?: string
}

// 类型体操
type DMReadonly<T> = {
  readonly [P in keyof T]:T[P]
} 


// IKun都变成只读的
type IKun2 = Readonly<IKun>
type IKun3 = DMReadonly<IKun>

export {}
