const { createStore } = require('redux')

const defaultState = {
  name:'aaa',
  age:18,
  height:1.88
}

function reducer(){
  return defaultState
}


const store = createStore(reducer)

module.exports = {
  store
}
