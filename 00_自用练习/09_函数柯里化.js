function curry(fn, ...args) {
  let length = fn.length
  return function () {
    let subArgs = [...args, ...arguments]

    if (subArgs.length >= length) {
      return fn.apply(this, subArgs)
    } else {
      return curry.call(this, fn, ...subArgs)
    }
  }
}


function sum(num1, num2, num3) {
  return num1 + num2 + num3
}
const sum5 = curry(sum, 5)
console.log(sum5(1, 2));
const sum56 = sum5(6)
console.log(sum56(-1))