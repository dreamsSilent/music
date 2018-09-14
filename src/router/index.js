import Vue from 'vue'
import Router from 'vue-router'
import storeIndex from '@/components/storeIndex'
import Vuemap from '@/components/map'
import search from '@/components/search'
import Video from '@/components/video'
import storePlay from '@/components/storePlay'
import MusicRange from '@/components/musicRange'
import VipPlay from '@/components/vipPlay'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'storeIndex',
      component: storeIndex
    },
    {
      path: '/map',
      name: 'Vuemap',
      component: Vuemap
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/video',
      name: 'video',
      component: Video
    },
    {
      path:'/play',
      name:'storePlay',
      component:storePlay
    },
    {
      path:'/range',
      component:MusicRange
    },
    {
      path:'/vipPlay',
      component:VipPlay
    }
    // {
    //   path:'/play/:musid',
    //   name:'storePlay',
    //   component:storePlay
    // }
  ]
})
