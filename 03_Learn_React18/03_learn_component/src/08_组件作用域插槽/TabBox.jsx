import React, { Component } from 'react'

export default class TabBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentTab:0
    }
  }
  changeTab(index){
    this.setState({
      currentTab:index
    })
    this.props.change(index)
  }
  render() {
    const {currentTab} = this.state
    const { tabs,tabItem } = this.props
    return (
      <div className='tab-box'>
        {
          tabs.map((item,index) => {
            return (
              <div key={index}
                   className={`item ${currentTab === index ? 'active' : ''}`} 
                   onClick={() => this.changeTab(index)}>
                    {tabItem(item)}
              </div>
            )
          })
        }
      </div>
    )
  }
}
