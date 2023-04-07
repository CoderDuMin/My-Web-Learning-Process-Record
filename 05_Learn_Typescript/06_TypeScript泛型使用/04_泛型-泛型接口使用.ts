interface IKun<Type=string>{
  name:Type,
  age:number,
  slogan:Type
}


const ikun1:IKun<string> = {
  name:'kun1',
  age:18,
  slogan:'rap'
}

const ikun2:IKun<any[]> = {
  name:['kun2','kun22'],
  age:18,
  slogan:['rap','sing']
}

export {}