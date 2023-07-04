function objCreate(obj) {
  function F() { }
  F.prototype = obj
  return new F()
}

const obj1 = objCreate({ name: 'aaa', age: 11 })
console.log(obj1, typeof obj1, obj1.name);
const obj2 = Object.create({ name: 'bbb', age: 19 })
console.log(obj2, typeof obj2, obj2.name);