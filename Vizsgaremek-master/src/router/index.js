import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '@/views/IndexView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: IndexView,
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterView,
      meta: { hideNavbar: true },
      
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
      meta: { hideNavbar: true },
    },
  ],
})

export default router
