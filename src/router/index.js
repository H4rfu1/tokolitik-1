import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import Profil from '../views/Profil.vue'
import ProfilEdit from '../views/ProfilEdit.vue'
import FormProduct from '../views/FormProduct.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/daftar',
    name: 'Register',
    component: Register
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/produk/tambah',
    name: 'FormProduct',
    component: FormProduct
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil
  },
  {
    path: '/profil/edit',
    name: 'ProfilEdit',
    component: ProfilEdit
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import(/* webpackChunkName: "about" */ '../views/404.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      const options = {
        top: document.querySelector(to.hash).offsetTop,
        behavior: 'smooth'
      }
      window.scrollTo(options)
    } else {
      return { top: 0 }
    }
  }
})

export default router
