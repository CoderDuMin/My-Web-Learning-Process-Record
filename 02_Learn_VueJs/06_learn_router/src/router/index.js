import { createRouter,createWebHashHistory } from 'vue-router'

const router = createRouter({
  routes:[
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      name:'home',
      component:() => (import('@/views/Home.vue')),
      children:[
        {
          path:'',
          redirect:'/home/recommend'
        },
        {
          path:'recommend',
          component:() => (import('@/views/HomeRecommend.vue')),
        },
        {
          path:'rank',
          component:() => (import('@/views/HomeRanking.vue')),
        }
      ]
    },
    {
      path:'/about',
      name:'about',
      component:() => (import(/* webpackChunkName:'about' */'@/views/About.vue'))
    },
    {
      path:'/user/:id',
      name:'user',
      component:() => (import(/* webpackChunkName:'user' */'@/views/User.vue'))
    },
    {
      path:'/:pathMatch(.*)',
      name:'notFound',
      component:() => (import(/* webpackChunkName:'notfound' */'@/views/NotFound.vue'))
    },
  ],
  history:createWebHashHistory()
})
export default router