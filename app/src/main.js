import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Flicking from "@egjs/vue3-flicking/dist/flicking.esm";


import '@/assets/css/style.css'


const app = createApp(App)
app.use(router)
// app.component("Flicking", Flicking);
app.mount('#app')
