const { CHANGE_NAME, ADD_AGE, CHANGE_HEIGHT } = require("./constants")

const defaultState = {
  name:'aaa',
  age:18,
  height:1.88
}

function reducer(state=defaultState,action){
  switch(action.type){
    case CHANGE_NAME:
      return {...state,name:action.name}
    case ADD_AGE:
      return {...state,age:state.age + 1}
    case CHANGE_HEIGHT:
      return {...state,height:action.height}
    default:
      return state
  }
}

module.exports = {
  reducer
}