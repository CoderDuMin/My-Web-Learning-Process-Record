import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from 'axios'
export const fetchHomeMutlDataAction = createAsyncThunk('fetch/home',async (extInfo,{dispatch,getState}) => {
   // 1.发送网络请求, 获取数据
   const res = await axios.get("http://123.207.32.32:8000/home/multidata")
   // 2.取出数据, 并且在此处直接dispatch操作(可以不做)
   const banners = res.data.data.banner.list
   const recommends = res.data.data.recommend.list
   dispatch(changeBanners(banners))
   dispatch(changeRecommends(recommends))

   // 3.返回结果, 那么action状态会变成fulfilled状态
   return res.data
})

const homeSlice = createSlice({
  name:'home',
  initialState:{
    banners:[],
    recommends:[]
  },
  reducers:{
    changeBanners(state,{payload}){
      state.banners =  payload
    },
    changeRecommends(state,{payload}){
      console.log('recommends',payload)
      state.recommends = payload
    }
  },
  extraReducers:{
    [fetchHomeMutlDataAction.fulfilled](){
      console.log('fetchHomeMutlDataAction.fulfilled')
    }
  }
}) 
export const { changeBanners,changeRecommends } = homeSlice.actions
export default homeSlice.reducer