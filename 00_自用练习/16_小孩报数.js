function childNum(num, count) {
  let childArr = []
  for (let i = 0; i < num; i++) {
    childArr[i] = i + 1
  }
  let curCount = 0
  let curIndex = 0 //当前下标
  let letfCount = 0 //离开人数
  while (letfCount < num - 1) {
    if (childArr[curIndex] !== 0) curCount++
    if (curCount === count) {

      childArr[curIndex] = 0
      letfCount += 1
      curCount = 0
    }
    curIndex++
    if (curIndex == num) {
      curIndex = 0
    }
    if (curCount > count) {
      curCount = 1
    }
  }
  let resultNo = childArr.find((value) => value !== 0)
  return resultNo
}

console.log(childNum(30, 3))
console.log(childNum2(30, 3))