import './index.scss'
import { createApp } from 'vue'
import App from '@/App.vue'

import * as directives from '@/directives/index'
import { registerDirectives } from './directive'
import router from '@/router/index'

const app = createApp(App)

registerDirectives(app, directives)

app.use(router)

app.mount('#app')
