//创建依赖构造函数
class Dep {
  constructor() {
    this.reactiveFns = new Set()
  }
  addDepend(fn) {
    this.reactiveFns.add(fn)
  }
  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

let objMap = new WeakMap()
const getDep = (obj, key) => {
  let map = objMap.get(obj)
  if (!map) {
    map = new Map()
    objMap.set(obj, map)
  }

  let dep = map.get(key)
  if (!dep) {
    dep = new Dep()
    map.set(key, dep)
  }
  return dep
}

let curAcitveFn = null
const watchFn = (fn) => {
  curAcitveFn = fn
  fn()
  curAcitveFn = null
}

const reactive = (obj) => {
  if (typeof obj !== 'object') return;
  // vue2响应式原理 Object.defineProperty实现
  // Object.keys(obj).forEach(key => {
  //   let value = obj[key]
  //   Object.defineProperty(obj, key, {
  //     set: function (newValue) {
  //       value = newValue
  //       const dep = getDep(obj, key)
  //       dep.notify()
  //     },
  //     get: function () {
  //       const dep = getDep(obj, key)
  //       dep.addDepend(curAcitveFn)
  //       return value
  //     }
  //   })
  // })
  // return obj


  //vue3响应式原理 使用Proxy代理劫持对象
  const objProxy = new Proxy(obj, {
    get(target, key) {
      console.log(target, key);
      const dep = getDep(target, key)
      dep.addDepend(curAcitveFn)
      return target[key]
    },
    set(target, key, newValue) {
      target[key] = newValue
      const dep = getDep(target, key)
      dep.notify()
      return newValue
    }
  })
  return objProxy
}

const obj1 = reactive({
  name: 'dumin',
  age: 16
})

watchFn(() => {
  obj1.name = 'dudu'
  console.log('foo:name', obj1.name)
})

// watchFn(() => {
//   obj1.age = 16
//   console.log('bar:age', obj1.age)
//   console.log('bar:name', obj1.name)
// })
