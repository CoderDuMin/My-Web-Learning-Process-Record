interface IKun{
  name:string,
  age:number,
  slogan:string
}

type MapIKun<Type> = {
  [property in keyof Type]:Type[property]
}

type NewIkun = MapIKun<IKun>

const kun1:NewIkun = {
  name:'kun1',
  age:16,
  slogan:'hhhh '
}

export {}