import React, { Component } from 'react'
import propTypes from 'prop-types'
class MainProduct extends Component {
  static defaultProps = {
    productList:[]
  }
  render() {
    const { productList } = this.props
    return (
      <div>
        <div>MainProduct</div>
        <ul>
          {
            productList&&productList.map(item => {
              return <li key={item.acm}>{item.title}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
MainProduct.propTypes = {
  productList:propTypes.array
}

export default MainProduct
