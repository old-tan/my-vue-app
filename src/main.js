import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 引入vue-router
import router from './router'

// pinia 数据持久化：piniaPersist
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
const pinia = createPinia()
pinia.use(piniaPersist)

createApp(App).use(router).use(pinia).mount('#app')
