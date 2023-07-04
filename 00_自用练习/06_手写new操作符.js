function newOperate() {
  //1.创建一个空对象,原型设置fn的prototype
  let fn = [...arguments][0]
  let obj = Object.create(fn.prototype)
  //2.判断fn类型
  if (typeof fn != 'function') {
    throw new Error('constructor must be a function')
  }
  //3.将fn的this指向这个对象
  const result = fn.apply(obj, [...arguments].slice(1))
  return result
}

function Person(name, age) {
  this.name = name
  this.age = age
  return this
}

const p1 = new Person('aaa', 13)
const p2 = newOperate(Person, 'bbb', 18)
console.log(p1, p2);