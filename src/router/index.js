import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login/index.vue'
import Layout from '@/views/layout/layout-index.vue'
import Home from '@/views/Home/home-index.vue'
import Category from '@/views/Category/category-index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import CartList from '@/views/CartList/index.vue'
import CheckOut from '@/views/Checkout/index.vue'


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
          name: 'layout-home',
          component: Home
        },
        {
          path: 'category/:id',
          name: 'layout-category',
          component: Category
        },
        {
          path: 'category/sub/:id',
          name: 'layout-sub-category',
          component: SubCategory
        },
        {
          path: 'detail/:id',
          name: 'detail',
          component: Detail
        },
        {
          path: 'cartlist',
          name: 'cart-list',
          component: CartList
        },
        {
          path: 'checkout',
          name: 'checkout',
          component: CheckOut
        }
      ]
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
