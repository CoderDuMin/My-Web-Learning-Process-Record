import React, { Component } from 'react'
import MainBanner from './MainBanner'
import MainProduct from './MainProduct'
import axios from 'axios'

export default class Main extends Component {
  constructor(){
    super()
    this.state = {
      banners:[],
      productList:[]
    }
  }
  componentDidMount(){
    axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
      console.log(res.data.data)
      this.setState({
        banners:res.data.data.banner.list,
        productList:res.data.data.recommend.list
      })
    })
  }
  render() {
    return (
      <div>
        <h3>Main组件</h3>
        <MainBanner banner={this.state.banners} />
        <MainProduct productList={this.state.productList} />
        <hr />
      </div>
    )
  }
}
