import { createSlice } from '@reduxjs/toolkit'


const counterSlice = createSlice({
  name:'counter',
  initialState:{
    counter:0
  },
  reducers:{
    addCounter(state,{payload}){
      console.log(payload)
      state.counter = state.counter + payload
    },
    subCounter(state,{payload}){
      state.counter -= payload
    }
  }
}) 
export const { addCounter,subCounter } = counterSlice.actions
export default counterSlice.reducer