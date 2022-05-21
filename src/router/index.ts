import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/HomePage.vue')
    
  },
  {
    path: '/:type/:query',
    name: 'Filter',
    component: () => import('@/views/FilterPage.vue'),
    props: true
  },
  {
    path: '/recipe/:id',
    name: 'Recipe',
    component: () => import('@/views/RecipePage.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
