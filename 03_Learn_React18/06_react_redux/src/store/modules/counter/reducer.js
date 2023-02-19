const { ADD_COUNT, SUB_COUNT} = require("./constants")

const defaultState = {
  counter:0,
}

function reducer(state=defaultState,action){
  switch(action.type){
    case ADD_COUNT:
      return {...state,counter:state.counter + action.num}
    case SUB_COUNT:
      return {...state,counter:state.counter - action.num}
    default:
      return state
  }
}

export {
  reducer
} 