
//声明重载
function add(arg1:number,arg2:number):number
function add(arg1:string,arg2:string):string
//通用函数
function add(arg1:any,arg2:any):any{
  console.log(arg1 + arg2)
  return arg1 + arg2
}


add(1,5)
add('hello','world')

export {}