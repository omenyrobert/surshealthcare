import Vue from 'vue'
import VueCompositionAPI, { createApp, h } from '@vue/composition-api'
import Flutterwave from  'flutterwave-vue-v3'
import App from './App.vue'
import router from './router'

Vue.use(VueCompositionAPI)
Vue.use(Flutterwave, { publicKey: 'FLWPUBK_TESTXXXXXXXXXX' } )
const app = createApp({
  router,
  render: () => h(App)
})

app.mount('#app')
