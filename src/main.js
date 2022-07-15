import { createApp } from 'vue'

import '@/assets/scss/_main.scss'

import App from './App.vue'
import router from './routers'

createApp(App).use(router).mount('#app')