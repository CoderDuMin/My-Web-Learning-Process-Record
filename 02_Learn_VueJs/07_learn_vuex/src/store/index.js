import { createStore } from 'vuex'
import Counter from './modules/counter'
import Home from './modules/home'

const store = createStore({
  state:() => ({
    counter:100,
    name:'dumin',
    level:12,
    money:9999,
    games:[
      {id:101,name:'黑暗之魂',price:268},
      {id:102,name:'动物派对',price:68},
      {id:103,name:'荒野大嫖客2',price:128}
    ],
    banners:[],
    recommends:[]
  }),
  getters:{
    totalPrice:(state) => {
      return state.games.reduce((pre,item)=> pre + item.price,0)
    },
    userInfo:(state,getters) => {
      return `name:${state.name},level:${state.level},has gameWorth:${getters.totalPrice}`
    },
    getGameInfo101:(state)=>{
      return state.games.find(item => item.id === 101)
    },
    getGameInfoById:(state) => {
      return (id)=>{
        return state.games.find(item => item.id === id)
      }
    }
  },
  mutations:{
    addCounter(state){
      state.counter++
    },
    changeName(state,payload){
      state.name = payload
    },
    changeInfo(state,payload){
      state.name = payload.name
      state.level = payload.level
    },

  },
  actions:{
    addCounterAction(context){
      setTimeout(() => {
        context.commit('addCounter')
      }, 1000);
    },
    changeInfoAction(context,payload){
      context.commit('changeInfo',payload)
    },
    
  },
  modules:{
    home:Home,
    mcounter:Counter
  }
})
export default store