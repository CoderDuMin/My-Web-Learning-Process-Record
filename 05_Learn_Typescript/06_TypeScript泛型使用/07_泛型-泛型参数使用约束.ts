interface IKun{
  name:string,
  age:number
}

type IKunKeys = keyof IKun //"name"|"age"

function getObjectKeys<O,K extends keyof O>(obj:O,key:K){
  return obj[key]
}

const kun:IKun = {
  name:'kun1',
  age:14
}

getObjectKeys(kun,'name')
// getObjectKeys(kun,'slogan')//类型“"slogan"”的参数不能赋给类型“keyof IKun”的参数

export {}