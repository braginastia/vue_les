import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import instance from '@/middlewares'
import AdminPanel from '@/views/AdminPanel.vue'

const routes = [
  { 
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {auth: true}
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/admin-panel',
    name: 'admin-panel',
    component: AdminPanel,
    // meta: { :true }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  try {
    const requireAuth = to.matched.some(record => record?.meta.auth)
    if(requireAuth) {
      const response = await instance.get('api/users')
      if(response.status == 200) {
        return next()
      } else if(response.status == 401) {
        return next('/login')
      }
    }
    return next()
  } catch (error) {
    console.log(error.message)
    return next('/login')
  }
})

export default router
