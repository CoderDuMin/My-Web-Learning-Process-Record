/**
 * @description 手写apply
 * @param {*} context 
 * @param {*} args 
 */
Function.prototype.dmApply = function (context, args = []) {
  let fn = this
  if (typeof this !== 'function') {
    throw new Error('must be a fucntion')
  }
  const symbolFn = Symbol('fn')
  context[symbolFn] = fn
  const result = context[symbolFn](...args)
  delete context.symbolFn

  return result
}
Function.prototype.dmCall = function (context, ...args) {
  let fn = this
  if (typeof this !== 'function') {
    throw new Error('must be a fucntion')
  }
  const symbolFn = Symbol('fn')
  context[symbolFn] = fn
  const result = context[symbolFn](...args)
  delete context.symbolFn

  return result
}

Function.prototype.dmBind = function (context) {
  let fn = this
  if (typeof this !== 'function') {
    throw new Error('must be a fucntion')
  }
  const newFn = function (args = []) {
    fn.apply(context, args)
  }

  return newFn
}


function sum(num1, num2) {
  console.log(this, num1, num2);
  return num1 + num2
}

// sum(1, 2)
// sum.dmApply({ name: 'hhhh' }, [1, 2])
// sum.dmCall({ age: 16, name: 'aaa' }, 0b1011, 0b1001)


let fn = sum.dmBind({ age: 16, name: 'aaa' })
fn([0o7562, 0o101])

