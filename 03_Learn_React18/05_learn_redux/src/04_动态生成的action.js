const { changeNameAction, changeHeightAction, addAgeAction } = require('./store/actionCreators')
const { store } = require('./store/index')

const subscribe = store.subscribe(() => {
  console.log('store state:',store.getState())
})

// console.log(store.getState())

store.dispatch(changeNameAction('肥嘟嘟左卫门'))

store.dispatch(changeHeightAction('180cm'))

store.dispatch(addAgeAction())

store.dispatch(changeNameAction('褪色者'))
