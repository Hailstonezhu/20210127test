import Vue from 'vue'
import Router from 'vue-router'

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const Profile = () => import('../components/Profile')

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: '关于'
    },
    component: About
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/user/:id',
    name: 'User',
    meta: {
      title: '用户'
    },
    component: User
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {
      title: '档案'
    },
    component: Profile
  }
]

const router = new Router({
  routes,
  linkActiveClass: 'active',
  mode: 'history'

})
// 导出路由，准备挂载到vue实例上
export default router
