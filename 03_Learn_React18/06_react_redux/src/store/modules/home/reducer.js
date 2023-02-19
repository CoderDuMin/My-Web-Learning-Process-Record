const { CHANGE_BANNERS, CHANGE_RECOMMENDS } = require("./constants")

const defaultState = {
  banners:[],
  recommends:[]
}

function reducer(state=defaultState,action){
  switch(action.type){
    case CHANGE_BANNERS:
      return {...state,banners:action.banners}
    case CHANGE_RECOMMENDS:
      return {...state,recommends:action.recommends}
    default:
      return state
  }
}

export {
  reducer
} 