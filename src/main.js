import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import 'aos/dist/aos.css'
import AOS from 'aos'
AOS.init()

createApp(App).use(router).mount('#app')
