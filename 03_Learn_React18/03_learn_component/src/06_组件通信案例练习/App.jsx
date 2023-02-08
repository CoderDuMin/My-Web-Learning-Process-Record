import React, { Component } from 'react'
import TabBox from './TabBox'
import './style.css'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      tabs:['热门','推荐','销量'],
      tabIndex:0,
      titles:['热门内容','推荐内容','销量内容']
    }
  }
  tabChange(index){
    this.setState({
      tabIndex:index
    })
  }
  render() {
    const { tabs,tabIndex,titles } = this.state
    return (
      <div>
        <TabBox tabs={tabs} change={(i) => this.tabChange(i)} />
        <h2>{titles[tabIndex]}</h2>
      </div>
    )
  }
}
