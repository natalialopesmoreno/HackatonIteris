import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CriancaLista from '../views/CriancaLista.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/lista',
    name: 'CriancaLista',
    component:CriancaLista
  },
]

const router = new VueRouter({
  routes
})

export default router
