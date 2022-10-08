import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import GiveUp from '../components/GiveUp.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/hello',
    name: 'hello',
    component: () => import('../components/HelloWorld.vue')
  },
  {
    path: '/giveup',
    name: 'giveup',
    component: () => import('../components/GiveUp.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
