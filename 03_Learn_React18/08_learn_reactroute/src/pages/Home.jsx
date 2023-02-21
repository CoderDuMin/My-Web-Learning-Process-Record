import React, { PureComponent } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export class Home extends PureComponent {
  render() {
    return (
      <div>
        <div className="home-nav">
          <NavLink to={'/home/recommend'} >推荐</NavLink>
          <NavLink to={'/home/rank'} >榜单</NavLink>
          <NavLink to={'/home/store'} >商店</NavLink>
        </div>
        <div className='content'>
          <Outlet />
        </div>
      </div>
    )
  }
}

export default Home