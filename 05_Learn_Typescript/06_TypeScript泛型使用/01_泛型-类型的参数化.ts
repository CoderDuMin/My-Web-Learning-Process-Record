// 理解形参和实例参数化, 但是参数的类型是固定的
function foo(name:string,age:number){

}

foo('dumin',18)


function bar<Type>(name:Type){
  return name
}
//完整写法
const res1 = bar<string>('aa')
const res2 = bar<number>(111)



//省略写法
bar('yihamin')
bar(166)

export {}