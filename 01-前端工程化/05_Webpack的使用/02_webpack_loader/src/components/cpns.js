import '../css/el1_style.css'
const el1 = document.createElement('div')
el1.textContent = '文本1'
el1.classList.add('el1')
document.body.appendChild(el1)

import '../css/el2_style.less'

const el2 = document.createElement('div')
el2.textContent = '文本2'
el2.classList.add('el2')
document.body.appendChild(el2)