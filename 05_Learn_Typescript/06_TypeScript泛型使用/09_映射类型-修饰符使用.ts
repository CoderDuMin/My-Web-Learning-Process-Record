interface IPerson{
  name:string,
  age:number,
  address:string
}

type MapType<Type> = {
  readonly [property in keyof Type]?:Type[property]
}

type NewPerson = MapType<IPerson>

const p1: NewPerson = {
  name:'aaa',
  age:19,
  address:'asdasdas'
}

// p1.address = 'asdas'//无法分配到 "address" ，因为它是只读属性。
export {}