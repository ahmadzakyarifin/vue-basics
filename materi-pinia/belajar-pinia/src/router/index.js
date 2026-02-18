import { createRouter, createWebHistory } from 'vue-router'
import HomeViews from '../views/HomeViews.vue'
import AboutViews from '../views/AboutViews.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeViews
        },
        {
            path: '/about',
            name: 'About',
            component: AboutViews
        }
    ]
})

export default router