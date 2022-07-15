import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'

import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import '@/assets/scss/main.scss'

createApp(App)
    .use(router)
    .use(BootstrapVue3)
    .mount('#app')