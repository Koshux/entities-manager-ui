import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    name: 'home',
    component: DashboardView
  }, {
    path: '/customers',
    name: 'customers',
    component: () => import('@/views/ProfileView.vue')
  }, {
    path: '/sites',
    name: 'sites',
    component: () => import('@/views/SitesView.vue')
  }, {
    path: '/meters',
    name: 'meters',
    component: () => import('@/views/MetersView.vue')
  }, {
    path: '/circuits',
    name: 'circuits',
    component: () => import('@/views/CircuitsView.vue')
  }, {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }]
})

export default router
