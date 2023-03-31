// 1.联合类型的基本使用
let myname:string|number = 'aaa'
myname = 12

// 使用的时候要特别的小心
function printId(id:string|number){
  if(typeof id == 'string'){
    console.log(id.length)
  }else{
    console.log(id)
  }
}

printId(12)
printId('wulabaha')