
function getType(value) {
  // 判断数据是 null 的情况
  if (value === null) {
    return value + "";
  }
  // 判断数据是引用类型的情况
  if (typeof value === "object") {
    let valueClass = Object.prototype.toString.call(value),
      type = valueClass.split(" ")[1].split("");
    type.pop();
    return type.join("").toLowerCase();
  } else {
    // 判断数据是基本数据类型的情况和函数的情况
    return typeof value;
  }
}

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

const p1 = new Person('aaa', 13)
console.log(getType(p1))
console.log(getType(NaN))
// console.log(getType({ 'name': 'aaa' }));