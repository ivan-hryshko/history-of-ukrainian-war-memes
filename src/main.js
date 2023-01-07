import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'

createApp(App)
  .use(router)
  .use(VueAnalytics, {
    id: 'G-16Z655D45G',
    router
  })
  .mount('#app')
