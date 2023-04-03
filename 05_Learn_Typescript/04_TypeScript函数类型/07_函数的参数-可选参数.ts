// y就是一个可选参数
// 可选参数类型是什么? number | undefined 联合类型
function foo(x:number,y?:number):number{
  if(y){
    return y + 5
  }else{
    return x
  }
}
console.log(foo(1))
console.log(foo(1,6))

export {}

