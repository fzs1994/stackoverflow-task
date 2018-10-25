import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Profile from '@/components/profile'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/profile/:id',
      name: 'Profile',
      component: Profile,
      props: {
      	id: String
      }
    }
  ]
})
