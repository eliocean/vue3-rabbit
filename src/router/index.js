import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login/login-index.vue'
import Layout from '@/views/layout/layout-index.vue'
import Home from '@/views/Home/home-index.vue'
import Category from '@/views/Category/category-index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'category',
          component: Category
        }
      ]
    }
  ]
})

export default router
