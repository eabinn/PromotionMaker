import './index.scss'
import { createApp } from 'vue'
import App from '@/App.vue'

import * as directives from '@/directives/index'
import { registerDirectives } from './directive'

const app = createApp(App)

registerDirectives(app, directives)

app.mount('#app')
