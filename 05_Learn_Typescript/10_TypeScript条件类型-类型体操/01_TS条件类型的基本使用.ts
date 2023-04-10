type IDType = string | number

//判断number 是否extend IDType

type resType<T> = T extends IDType ? true : false

let flag:resType<symbol> = false


function sum<T extends number|string>(arg1:T,arg2:T):T extends number ? number : string
function sum(arg1:any,arg2:any){
  return arg1 + arg2
}

let res = sum(1,3)
let res2 = sum('1','aa')

export {}

