import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/festival',
      name: 'festival',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/FestivalView.vue')
    },
    {
      path: '/program',
      name: 'program',
      component: () => import('../views/ProgramView.vue')
    },
    {
      path: '/transport',
      name: 'transport',
      component: () => import('../views/TransportView.vue')
    }
  ],
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        // if savedPosition is available, use it
        return savedPosition
      } else {
        // else, scroll to the top of the page
        return { top: 0 }
      }
    }
    })

    
export default router
