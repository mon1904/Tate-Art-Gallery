import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import artist from '@/components/artist'
import artwork from '@/components/artwork'
import artistname from '@/components/artistname'
import addmore from '@/components/addmore'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/artist',
      name: 'artist',
      component: artist
    },
    {
      path: '/artwork',
      name: 'artwork',
      component: artwork
    },
    {
      path: '/artistname',
      name: 'artistname',
      component: artistname
    },
    {
      path: '/addmore',
      name: 'addmore',
      component: addmore
    },
  ]
})

