import { createRouter, createWebHistory } from 'vue-router'


import Home from '../routes/Home.vue'
import Projects from '../routes/Projects.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home},
    { path: '/projects', component: Projects }
  ],
})

export default router
