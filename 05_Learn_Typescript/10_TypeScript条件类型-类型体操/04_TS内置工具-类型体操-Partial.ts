interface IKun {
  name: string
  age: number
  slogan?: string
}

type DMPartial<T extends object>= {
  [P in keyof T]?:T[P]
} 
// IKun都变成可选的
type IKunOptional = Partial<IKun>
type IKunOptional2 = DMPartial<IKun>

export {}
