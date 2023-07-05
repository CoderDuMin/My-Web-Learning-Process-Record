function red() {
  console.log('red')
}
function yellow() {
  console.log('yellow');
}
function green() {
  console.log('green')
}

//使用定时器
function step1() {
  setTimeout(() => {
    red()
    setTimeout(() => {
      yellow()
      setTimeout(() => {
        green()
      }, 1000)
    }, 2000)
  }, 3000)
}

//使用promise
function task(time, light) {
  return new Promise((resolve) => {
    if (light == 'red') {
      red()
    }
    if (light == 'yellow') {
      yellow()
    }
    if (light == 'green') {
      green()
    }
    setTimeout(() => {
      resolve()
    }, time)
  })
}

const step2 = () => {
  task(3000, 'red').then(() => task(2000, 'yellow')).then(() => task(1000, 'green')).then(step2)
}

step2()