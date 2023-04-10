class Person {}
class Dog {}


// 类型体操


// typeof Person: 构造函数具体的类型
// InstanceType构造函数创建出来的实例对象的类型
type DMInstanceType<T extends new (...arg:any[]) => any> = T extends new (...arg:any[]) => infer R ? R : never

// 构造函数的例子
// 通过的创建实例的工具函数时会用到这个InstanceType
function factory<T extends new (...arg:any[]) => any>(ctor:T):InstanceType<T>{
  return new ctor()
}

function factory2<T extends new (...arg:any[]) => any>(ctor:T):DMInstanceType<T>{
  return new ctor()
}


let dog = factory(Dog)
let person = factory(Person)

let dog2 = factory2(Dog)
let person2 = factory2(Person)

export {}