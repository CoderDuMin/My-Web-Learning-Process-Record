export default {
  namespaced:true,
  state:()=> ({
    counter:20
  }),
  getters:{
    allCounter(state,getters,rootState){
      console.log(rootState)
      return state.counter + rootState.counter
    }
  },
  mutations:{
    addCounter(state){
      state.counter++
    }
  },
  actions:{
    addCounterAction(context){
      context.commit('addCounter')
    }
  }
}