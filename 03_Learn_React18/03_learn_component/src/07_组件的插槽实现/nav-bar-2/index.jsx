import React, { Component } from 'react'
export default class NavBar2 extends Component {
  render() {
    const { leftSlot,rightSlot,centerSlot } = this.props
    return (
      <div className='navbar'>
        <div className="left">{leftSlot}</div>
        <div className="center">{centerSlot}</div>
        <div className="right">{rightSlot}</div>
      </div>
    )
  }
}
