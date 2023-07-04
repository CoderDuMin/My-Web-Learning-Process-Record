function dmInstanceof(left, right) {
  let proto = Object.getPrototypeOf(left)
  let instance = right.prototype
  while (true) {
    if (!proto) return false
    if (proto === instance) {
      return true
    }
    proto = Object.getPrototypeOf(proto)
  }
}


class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

const p1 = new Person('aaa', 18)

console.log(dmInstanceof(p1, Person))
console.log(dmInstanceof(p1, String))