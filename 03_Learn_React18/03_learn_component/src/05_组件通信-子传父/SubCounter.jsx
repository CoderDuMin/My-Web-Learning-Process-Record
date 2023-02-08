import React, { Component } from 'react'

export default class SubCounter extends Component {
  subCount(count){
    this.props.sub(count)
  }
  render() {
    return (
      <div>
        <button onClick={e => this.subCount(-1)}>-1</button>
        <button onClick={e => this.subCount(-3)}>-3</button>
        <button onClick={e => this.subCount(-5)}>-5</button>
      </div>
    )
  }
}
