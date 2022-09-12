import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import 'bootstrap-icons/font/bootstrap-icons';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Vue from 'vue'
import VueCompositionAPI, { createApp, h } from '@vue/composition-api'
import Flutterwave from  'flutterwave-vue-v3'
import App from './App.vue'
import router from './router'

Vue.use(VueCompositionAPI)
Vue.use(Flutterwave, { publicKey: 'FLWPUBK_TEST-8bbf151f0a00f25b000c67a6a6befb2a-X' } )
const app = createApp({
  router,
  render: () => h(App)
})

app.mount('#app')
