import React, { PureComponent } from 'react'

import { Link, NavLink, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import HomeRank from './pages/HomeRank'
import HomeRecommend from './pages/HomeRecommend'
import HomeStore from './pages/HomeStore'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

import './style.css'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <div className='header-bar'>
          {/* <Link to={'/home'}>首页</Link>
          <Link to={'/about'}>关于</Link> */}
          <NavLink  to={'/home'}>首页</NavLink>
          <NavLink to={'/about'}>关于</NavLink>
          <NavLink to={'/login'}>登录页</NavLink>
        </div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} >
            <Route path='/home/recommend' element={<HomeRecommend/>} />
            <Route path='/home/rank' element={<HomeRank/>} />
            <Route path='/home/store' element={<HomeStore/>} />
          </Route>
          <Route path='/about' element={<About/>} />
          <Route path='/login' element={<Login/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <div className="footer">
          <p>这里是header</p>
        </div>
      </div>
    )
  }
}

export default App