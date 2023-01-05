import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'
import VueGtag from "vue-gtag";
import store from './store'

createApp(App)
  .use(router)
  // .use(VueAnalytics, {
  //   id: 'G-16Z655D45G',
  //   router,
  // })
  .use(VueGtag, {
    config: { id: "G-16Z655D45G" },
  })
  .use(store)
  .mount('#app')
