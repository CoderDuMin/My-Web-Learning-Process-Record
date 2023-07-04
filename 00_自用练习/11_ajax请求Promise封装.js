function ajaxGet(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('get', url)
    xhr.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) {
          resolve(this.response)
        }
      }
    }
    xhr.onerror = function (err) {
      console.log('请求出错')
      reject(err)
    }
    // 设置请求头信息
    xhr.responseType = "json";
    xhr.setRequestHeader("Accept", "application/json");
    xhr.send()
  })
}

ajaxGet('http://1.117.247.44:5502/top/playlist').then(res => {
  console.log('promise 结果', res)
}).catch(err => {
  console.log('promise catch', err)

})

ajaxGet('http://1.117.247.44:5502/top/list').then(res => {
  console.log('promise 结果', res)
}).catch(err => {
  console.log('promise catch', err)

})