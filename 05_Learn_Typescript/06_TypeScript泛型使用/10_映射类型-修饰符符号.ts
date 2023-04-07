interface IPerson{
  readonly name:string,
  age?:number,
  readonly address:string
}

type MapType<Type> = {
  -readonly [property in keyof Type]-?:Type[property]
}

type NewPerson = MapType<IPerson>

const p1: NewPerson = {
  name:'aaa',
  age:19,
  address:'asdasdas'
}

p1.address = 'asdas'
export {}