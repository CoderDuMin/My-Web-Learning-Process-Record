import '../css/el1_style.css';


// 引入图片模块
import zznhImage from "../img/zznh.png"

const el1 = document.createElement('div')
el1.textContent = '文本1'
el1.classList.add('el1')
document.body.appendChild(el1)

import '../css/el2_style.less'

const el2 = document.createElement('div')
el2.textContent = '文本2'
el2.classList.add('el2')
document.body.appendChild(el2)

// 创建img元素
const imgEl = document.createElement("img")
imgEl.src = zznhImage
document.body.append(imgEl)


// 创建div元素, 设置背景
const divBgEl = document.createElement("div")
divBgEl.classList.add("img-bg")
document.body.append(divBgEl)