import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '../views/Login.vue'
const Login =() =>import(/* webpackChunkName:"login_home"*/ '../views/Login')
// import Home from '../views/Home'
const Home =() =>import(/* webpackChunkName:"login_home"*/ '../views/Home')
// import Pics from '../views/Pics'
const Pics =() =>import(/* webpackChunkName:"pics_pics_detail"*/ '../views/Pics')
// import Pics_detail from '../views/Pics_detail'
const Pics_detail =() =>import(/* webpackChunkName:"pics_pics_detail"*/ '../views/Pics_detail')
// import Weather from '../views/Weather'
const Weather  =() =>import(/* webpackChunkName:"weather_article"*/ '../views/Weather')
// import Article from '../views/Article'
const Article =() =>import(/* webpackChunkName:"weather_article_news"*/ '../views/Article')
// import News from '../views/News'
const News  =() =>import(/* webpackChunkName:"weather_article_news"*/ '../views/News')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    redirect: '/Pics',
    children:[
      {path:'/Pics',
      name:'Pics',
      component:Pics
    },
      {
        path:'/Weather',
        name:'Weather',
        component:Weather
      },
      {
        path:'/News',
        name:'News',
        component:News
      },
      {
        path: '/Article',
        name: 'Article',
        component: Article
      },
      {
        path: '/Pics_detail',
        name: 'Pics_detail',
        component: Pics_detail
      }
    ]
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.path==='/'){
    return next()
  }
  const token=window.sessionStorage.getItem('token')
  if (!token){
    console.log('no')
    return next('/')

  }else {
    next()
  }
})
export default router
