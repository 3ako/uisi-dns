import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/menu.vue'
import theory from '../components/theory.vue'
import test from '../components/test.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },{
      path: '/theory',
      name: 'theory',
      component: theory
    },{
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})

export default router
