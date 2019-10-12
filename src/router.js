import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Coin from './views/Coin.vue'
import WebGL from './views/WebGL.vue'
import Algorithm from './views/Algorithm.vue'




Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      component: About
    },
    {
      path: '/coin',
      name: 'coin',
      //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      component: Coin
    },
    {
      path: '/webGL',
      name: 'webGL',
      //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      component: WebGL
    },
    {
      path: '/algorithm',
      name: 'algorithm',
      //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      component: Algorithm
    }
  ]
})
