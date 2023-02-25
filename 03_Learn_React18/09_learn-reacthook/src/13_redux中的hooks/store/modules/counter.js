import {createSlice} from '@reduxjs/toolkit'

const reducer  = createSlice({
  name:'counter',
  initialState:{
    counter:0,
    message:'hello world'
  },
  reducers:{
    addCounterAction(state,action){
      state.counter += action.payload
    },
    subCounterAction(state,action){
      state.counter -= action.payload
    },
    changeMessageAction(state,action){
      state.message = action.payload
    }
  }
})

export const { addCounterAction,subCounterAction,changeMessageAction } = reducer.actions

export default reducer.reducer