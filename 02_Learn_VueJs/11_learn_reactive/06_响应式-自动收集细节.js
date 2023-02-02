/**
  * 1.dep对象数据结构的管理(最难理解)
    * 每一个对象的每一个属性都会对应一个dep对象
    * 同一个对象的多个属性的dep对象是存放一个map对象中
    * 多个对象的map对象, 会被存放到一个objMap的对象中
  * 2.依赖收集: 当执行get函数, 自动的添加fn函数
 */

class Depend{
  constructor(){
    this.reactiveFns = new Set() //[]
  }
  addDepend(fn){
    if(fn){
      this.reactiveFns.add(fn)
    }
  }
  notify(){
    this.reactiveFns.forEach(fn => fn())
  }
}
// 设置一个专门执行响应式函数的一个函数
let reactiveFn = null
function watchFn(fn){
  reactiveFn = fn
  fn()
  reactiveFn = null
}

// 封装一个函数: 负责通过obj的key获取对应的Depend对象
let objMap = new WeakMap()
function getDepend(obj,key){
   // 1.根据对象obj, 找到对应的map对象
  let map = objMap.get(obj)
  if(!map){
    map = new Map()
    objMap.set(obj,map)
  }
  // 2.根据key, 找到对应的depend对象
  let dep = map.get(key)
  if(!dep){
    dep = new Depend()
    map.set(key,dep)
  }

  return dep
}


const user = {
  name:'dumin',
  age:18
}
Object.keys(user).forEach(key => {
  let value = user[key]
  Object.defineProperty(user,key,{
    set(newValue){
      value = newValue
      let dep = getDepend(user,key)
      dep.notify()
    },
    get(){
      // obj -> key
      // 找到对应的obj对象的key对应的dep对象
      const dep = getDepend(user,key)
      dep.addDepend(reactiveFn)
      return value
    }
  })
}) 

watchFn(function foo(){
  console.log('foo name',user.name);
  console.log('foo age',user.age);
})

watchFn(function bar(){
  console.log('bar age',user.age);
})

console.log('name发生变化---------')
user.name = 'yihamin'

// console.log('age发生变化---------')
// user.age = 19
