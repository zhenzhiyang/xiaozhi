import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Generator from '@/views/Generator.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        transition: 'slide-left'
      }
    },
    {
      path: '/generator',
      name: 'generator',
      component: Generator,
      meta: {
        transition: 'slide-right'
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router