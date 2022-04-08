import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import MakderView from '@/views/MakerView.vue'
import PreviewView from '@/views/PreviewView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: MakderView,
  },
  {
    path: '/preview',
    component: PreviewView,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
