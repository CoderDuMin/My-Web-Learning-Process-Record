function debounce(fn, delay = 0, opts = { leading: true }) {
  let first = true
  let timer = null
  function defn() {
    let context = this
    let args = [...arguments]
    if (opts.leading && first) {
      first = false
      fn()
    } else {
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(context, args)
        timer = null
        first = true
      }, delay)
    }
  }
  return defn
}

function throllte(fn, interval = 1000, opts = {}) {
  let preTime = Date.now()

  return function () {
    let context = this
    let args = [...arguments]
    let nowTime = Date.now()
    if (nowTime - preTime >= interval) {
      fn.apply(context, args)
      preTime = Date.now()
    } else {

    }
  }

}