import { defineStore } from 'pinia'

export const useUser = defineStore('user',{
  state:() => ({
    name:'督名',
    age:18,
    level:18,
  })
})