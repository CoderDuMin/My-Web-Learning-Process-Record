type calcType = (num1:number,num2:number)=>number

function foo(){
  return 'aaa'
}

type type1 = ReturnType<calcType>
type type2 = ReturnType<typeof foo>

type MyReturnType<T extends (...arg:any[]) => any > = T extends (...arg:any[]) => infer R ? R : never   


type type3 = MyReturnType<calcType>
type type4 = MyReturnType<typeof foo>

export {}
