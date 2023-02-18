const { CHANGE_NAME, ADD_AGE, CHANGE_HEIGHT } = require("./constants")

const changeNameAction = (name) => {
  return {
    type:CHANGE_NAME,
    name:name
  }
}

const addAgeAction = () => {
  return {
    type:ADD_AGE,
  }
}

const changeHeightAction = (height) => {
  return {
    type:CHANGE_HEIGHT,
    height:height
  }
}
module.exports = {
  changeNameAction,
  changeHeightAction,
  addAgeAction
}