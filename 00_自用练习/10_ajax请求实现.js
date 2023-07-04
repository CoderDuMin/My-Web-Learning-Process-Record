function ajaxGet(url) {
  const xhr = new XMLHttpRequest()
  xhr.open('get', url)
  xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        console.log('请求结果', this.response)
        // console.log('请求结果', JSON.parse(this.response))
      }
    }
  }
  // 设置请求头信息
  xhr.responseType = "json";
  xhr.setRequestHeader("Accept", "application/json");
  xhr.send()
}

ajaxGet('http://1.117.247.44:5502/top/playlist')