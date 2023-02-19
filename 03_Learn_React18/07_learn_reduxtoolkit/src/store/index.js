import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './modules/counter'
import homeReducer from './modules/home'
const store = configureStore({
  reducer:{
    counter:counterReducer,
    home:homeReducer
  }
})

export default store