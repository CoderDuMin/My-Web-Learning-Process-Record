import React, { PureComponent } from 'react'

import { Link, NavLink, Route, Routes, useRoutes } from 'react-router-dom'
import About from './pages/About'
import DetailInfo from './pages/DetailInfo'
import Home from './pages/Home'
import HomeRank from './pages/HomeRank'
import HomeRecommend from './pages/HomeRecommend'
import HomeStore from './pages/HomeStore'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import User from './pages/User'
import { routes } from './router'

import './style.css'

export function App(){
    return (
      <div>
        <div className='header-bar'>
          {/* <Link to={'/home'}>首页</Link>
          <Link to={'/about'}>关于</Link> */}
          <NavLink  to={'/home'}>首页</NavLink>
          <NavLink to={'/about'}>关于</NavLink>
          <NavLink to={'/login'}>登录页</NavLink>
          <NavLink to={'/user/5'}>用户</NavLink>
          <NavLink to={'/detail?name=dumin&age=18'}>详情</NavLink>
        </div>
        {/* <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} >
            <Route path='/home/recommend' element={<HomeRecommend/>} />
            <Route path='/home/rank' element={<HomeRank/>} />
            <Route path='/home/store' element={<HomeStore/>} />
          </Route>
          <Route path='/about' element={<About/>} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/detail" element={<DetailInfo/>} />
          <Route path='/login' element={<Login/>} />
          <Route path="*" element={<NotFound />} />
        </Routes> */}
        {/* 使用配置 */}
        {
          useRoutes(routes)
        }
        <div className="footer">
          <p>这里是header</p>
        </div>
      </div>
    )
}

export default App