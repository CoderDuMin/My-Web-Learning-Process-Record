const { store } = require('./store/index')

console.log(store.getState())

store.dispatch({type:'change_name',name:'嘟嘟'})
console.log(store.getState())

store.dispatch({type:'change_name',name:'异乡人'})
console.log(store.getState())

store.dispatch({type:'add_age'})
console.log(store.getState())