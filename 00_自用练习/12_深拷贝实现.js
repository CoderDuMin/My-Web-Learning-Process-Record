function clone(obj) {
  //1.通过拓展运算符
  // return { ...obj }
  //2.通过OBject.assign
  return Object.assign({}, obj)
}

const stu1 = {
  name: 'dudu',
  age: '16',
  sex: 'male',
  friend: {
    name: 'hhh',
    age: 18
  }
}

const stu2 = clone(stu1)
stu2.friend.name = 'xxxx'
console.log(stu1, stu2);
console.log(stu1 === stu2)