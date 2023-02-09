import React, { Component } from 'react'
import ThemContext from './context/ThemContext'
import UserContext from './context/UserContext'
import Home from './Home'
import HomeInfo from './HomeInfo'

export default class App extends Component {
  render() {
    return (
      <div>
        <UserContext.Provider value={{name:'dumin',age:18}}>
          <ThemContext.Provider value={{color:'red',size:'30'}}>
            <Home />
            <HomeInfo />
          </ThemContext.Provider>
        </UserContext.Provider>
        <Home/>

      </div>
    )
  }
}
