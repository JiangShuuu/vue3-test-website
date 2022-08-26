import { createApp } from 'vue'
import './index.css'
import App from './App.vue'

// router
import router from './router'

createApp(App)
  .use(router)
  .mount('#app')
