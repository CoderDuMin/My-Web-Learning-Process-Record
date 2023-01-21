import { defineStore } from 'pinia'

const useCounter = defineStore('counter',{
  state:() => ({
    count:0
  })
})

export {
  useCounter
}