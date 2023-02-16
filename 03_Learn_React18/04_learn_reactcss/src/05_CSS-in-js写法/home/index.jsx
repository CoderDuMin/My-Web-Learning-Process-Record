import React, { PureComponent } from 'react'
import { HomeWrapper, ItemWrapper } from './style'

export class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <ul>
          <li>列表1</li>
          <li>列表2</li>
          <li>列表3</li>
          <li>列表4</li>
        </ul>
        <ItemWrapper>
          哈哈哈哈
        </ItemWrapper>
      </HomeWrapper>
    )
  }
}

export default Home