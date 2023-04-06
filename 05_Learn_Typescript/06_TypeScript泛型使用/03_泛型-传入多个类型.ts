function foo<Key,Value>(key:Key,info:Value){
  console.log(key,info)
}

foo('aa',123)

foo('class',{name:'aaa',age:16})
export {}