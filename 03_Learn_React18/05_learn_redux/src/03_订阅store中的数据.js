const { store } = require('./store/index')

const subscribe = store.subscribe(() => {
  console.log('store state:',store.getState())
})

// console.log(store.getState())

store.dispatch({type:'change_name',name:'嘟嘟'})
// console.log(store.getState())

store.dispatch({type:'change_name',name:'异乡人'})
// console.log(store.getState())

store.dispatch({type:'add_age'})
// console.log(store.getState())

subscribe() //取消订阅

store.dispatch({type:'add_age'})
