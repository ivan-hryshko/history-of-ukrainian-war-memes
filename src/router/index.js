import { createRouter, createWebHistory } from 'vue-router'
import WarMemes from '@/views/war-memes.vue'
import AboutUs from '@/views/about-us'

const routes = [
  {
    path: '/',
    name: 'war-memes',
    component: WarMemes,
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: AboutUs,
  },
  {
    path: '/life-calendar',
    name: 'life-calendar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/life-calendar.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
