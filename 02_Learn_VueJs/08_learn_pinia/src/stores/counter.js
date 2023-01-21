import { defineStore } from 'pinia'
import { useUser } from './user'

const useCounter = defineStore('counter',{
  state:() => ({
    count:0,
    games:[
      {id:101,name:'黑暗之魂3',price:298},
      {id:102,name:'巫师三:狂猎',price:17},
      {id:103,name:'塞尔达',price:398},
    ]
  }),
  getters:{
    doubleCount(state){
      return state.count * 2
    },
    doubleCountAddOne(state){
      //获取别的getters -> this
      return this.doubleCount + 1
    },
    gameInfoById(state){
      return (id) => {
        return state.games.find(item => item.id === id)
      }
    },
    showMessage(state){
      //获取别的store里的信息
      const userStore = useUser()
      return `${userStore.name}的count:${state.count}`
    }
  }
})

export {
  useCounter
}