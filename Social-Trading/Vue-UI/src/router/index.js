import { createRouter, createWebHistory } from 'vue-router'

import SocialTradingView from '../views/SocialTradingView.vue'



const routes = [
     {
    path: '/howe',
    name: 'Home',
    component: SocialTradingView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
