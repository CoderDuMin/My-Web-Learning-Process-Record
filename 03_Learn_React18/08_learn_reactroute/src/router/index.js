import React from "react";
import { Navigate } from "react-router-dom";
import About from "../pages/About";
import DetailInfo from "../pages/DetailInfo";
import Home from "../pages/Home";
import HomeRank from "../pages/HomeRank";
import HomeRecommend from "../pages/HomeRecommend";
import HomeStore from "../pages/HomeStore";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import User from "../pages/User";

// const About = React.lazy(() => import('../pages/About'))

export  const routes = [
  {
    path:'/',
    element:<Navigate to='/home' />
  },
  { 
    path:'/home',
    element:<Home />,
    children:[
      {
        path:'/home',
        element:<Navigate to='/home/recommend' />
      },
      {
        path:'/home/recommend',
        element:<HomeRecommend />
      },
      {
        path:'/home/rank',
        element:<HomeRank />
      },
      {
        path:'/home/store',
        element:<HomeStore />
      }
    ]
  },
  {
    path:'/about',
    element:<About />
  },
  {
    path:'/user/:id',
    element:<User />
  },
  {
    path:'/detail',
    element:<DetailInfo />
  },
  {
    path:'/login',
    element:<Login />
  },
  {
    path:'*',
    element:<NotFound />
  }
]