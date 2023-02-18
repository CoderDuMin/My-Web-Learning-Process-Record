import { ADD_COUNT, SUB_COUNT } from "./constants"

export const addCountAction = (num) => {
  return {
    type:ADD_COUNT,
    num: num
  }
}

export const subCountAction = (num) => {
  return {
    type:SUB_COUNT,
    num: num
  }
}