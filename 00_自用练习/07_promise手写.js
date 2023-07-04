const PENDING = 'pending'
const FULLFILLED = 'fullfilled'
const REJECT = 'reject'
class DmPromise {
  state = PENDING
  value = undefined
  successFns = []
  rejectFns = []
  constructor(fn) {
    this.self = this
    try {
      console.log(this)
      fn(this.resolve, this.reject)
    } catch (error) {
      this.result = error
    }
  }
  resolve = (val) => {
    if (val instanceof DmPromise) {
      return val
    }
    console.log(this)
    setTimeout(() => {
      this.value = val
      this.successFns.forEach(callback => {
        callback(this.value)
      })
    }, 0)
  }
  reject = (val) => {
    setTimeout(() => {
      this.state = REJECT
      this.value = val
      this.rejectFns.forEach(callback => {
        callback(this.value)
      })
    })
  }
  then(onResolve, onReject) {
    onResolve = typeof onResolve === 'function' ?
      onResolve : function (value) {
        return value
      }
    onReject = typeof onReject === 'function' ?
      onReject : function (value) {
        throw new Error(value)
      }

    if (this.state === PENDING) {
      this.successFns.push(onResolve)
      this.rejectFns.push(onReject)
    }
    if (this.state === FULLFILLED) {
      onResolve(this.value)
    }
    if (this.state === REJECT) {
      onReject(this.value)
    }
  }
}

// new Promise((resolve, reject) => {
//   console.log('执行函数')
//   setTimeout(() => {
//     resolve('555')
//   }, 1000)
// }).then(res => {
//   console.log('then回调', res)
// })

new DmPromise((resolve, reject) => {
  console.log('执行函数')
  setTimeout(() => {
    resolve('555')
  }, 1000)
}).then(res => {
  console.log('then回调', res)
})