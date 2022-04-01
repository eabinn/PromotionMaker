import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/MakerView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
