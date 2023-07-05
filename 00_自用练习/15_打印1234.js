function printNum(num, time) {
  let out = 1
  setInterval(() => {
    if (out > num) out = 1
    console.log(out)
    out++
  }, time)
}
printNum(4, 1000)