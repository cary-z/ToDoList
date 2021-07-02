import { createApp } from 'vue'
import router from './router/router'
import App from './App.vue'
import NaiveUi from 'naive-ui'
import 'bootstrap/dist/css/bootstrap.css'

createApp(App)
  .use(NaiveUi)
  .use(router)
  .mount('#app')
