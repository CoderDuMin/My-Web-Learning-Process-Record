function deepClone(target) {
  //方式1:通过JSON.stringfy
  //缺点:对于函数或者symbol类型的值,会转换失败
  // return JSON.parse(JSON.stringify(target))

  //方式二:可以使用lodash中的deppclone函数

  //方式三:自己写一个
  if (typeof target === 'object') {
    let result = {}
    for (let key in target) {
      if (typeof target[key] === 'object') {
        result[key] = deepClone(target[key])
      } else {
        result[key] = target[key]
      }
    }
    return result
  } else {
    return target
  }
}




const obj = {
  name: 'coder',
  age: 24,
  hobby: ['game', 'eat', 'run'],
  wife: {
    name: 'mm',
    age: 21
  },
  say: () => {
    console.log('hello');
  }
}

const copyobj = deepClone(obj)
console.log(copyobj)
copyobj.wife.name = 'mmm1'
console.log(obj, copyobj);