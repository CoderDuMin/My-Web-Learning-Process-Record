import { defineStore } from 'pinia'

export const useHome = defineStore('home',{
  state:() => ({
    recommends:[],
    banners:[]
  }),
  actions:{
    async getMultidataAciton(){
      const res = await fetch('http://123.207.32.32:8000/home/multidata')
      const data = (await res.json()).data
      console.log(data);
      this.banners = data.banner.list
      this.recommends = data.recommend.list
     }
  }
})