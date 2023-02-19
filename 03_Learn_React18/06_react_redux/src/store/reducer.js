import { combineReducers } from 'redux'

import { reducer as homeReducer } from './modules/home/reducer'
import {reducer as counterReducer } from './modules/counter/reducer'


const reducer = combineReducers({
  home:homeReducer,
  counter:counterReducer
})

export default reducer