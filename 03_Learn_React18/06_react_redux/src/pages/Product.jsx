import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

export class Product extends PureComponent {
  render() {
    return (
      <div>
        <h2>PRoduct组件</h2>
        <div>热卖榜单:</div>
        <ul>
          {
            this.props.banners.map(item => {
              return <li key={item.acm}>{item.title}</li>
            })
          }
        </ul>
        <div>每日推荐:</div>
        <ul>
          {
            this.props.recommends.map(item => {
              return <li key={item.acm}>{item.title}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
    banners:state.home.banners,
    recommends:state.home.recommends
  }
)

export default connect(mapStateToProps)(Product) 