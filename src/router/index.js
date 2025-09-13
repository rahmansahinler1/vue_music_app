import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Manage from '@/views/Manage.vue'
import useUserStore from '@/stores/user'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/manage',
    name: 'manage',
    component: Manage,
    beforeEnter: (to, from, next) => {
      const userStore = useUserStore()
      console.log('Manage Page Guard')
      console.log(from, to)
      if (userStore.userLoggedIn) {
        next()
      } else {
        console.log('Protected from entering')
        next('/')
      }
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routes,
  linkActiveClass: 'text-yellow-500',
})

export default router
