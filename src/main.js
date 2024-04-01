import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'

import axios from 'axios'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import '@/assets/scss/main.scss'

const axiosInstance = axios.create({
    baseURL: process.env.VUE_API_URL
})

const app = createApp(App)
app.use(router)
app.use(BootstrapVue3)
app.config.globalProperties.$axios = { ...axiosInstance }
app.mount('#app')