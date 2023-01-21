export default {
  state:() => ({
    recommends:[],
    banners:[]
  }),
  mutations:{
    changeBanners(state,payload){
      state.banners = payload
    },
    changeRecommends(state,payload){
      state.recommends = payload
    }
  },
  actions:{
    async getMultidataAciton(context){
      const res = await fetch('http://123.207.32.32:8000/home/multidata')
      const data = (await res.json()).data
      context.commit('changeBanners',data.banner.list)
      context.commit('changeRecommends',data.recommend.list)
     }
  }
}