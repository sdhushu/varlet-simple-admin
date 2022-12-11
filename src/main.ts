import { createApp } from 'vue'
import App from './App.vue'
import Varlet from '@varlet/ui'
import router from "./router";
import '@varlet/ui/es/style'
import './style/reset.css'

createApp(App).use(Varlet).use(router).mount('#app')
