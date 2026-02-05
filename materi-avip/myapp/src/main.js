import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import MainButton from './components/MainButton.vue'

//02. kita bisa panggil import di sini (global registration)
const app = createApp(App)
app.mount('#app')
app.component('MainButton',MainButton)

// 01. Bikin aplikasi Vue dari App, lalu tempelin ke elemen #app yang ada di index.html
// createApp(App).mount('#app')
