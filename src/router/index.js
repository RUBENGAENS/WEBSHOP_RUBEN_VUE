import { createRouter, createWebHistory } from 'vue-router'

import homeView from '@/views/homeView.vue'
import shopView from '@/views/shopView.vue'
import cartView from '@/views/cartView.vue'
import loginView from '@/views/loginView.vue'
import contactView from '@/views/contactView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: homeView
        },
        {
            path: '/shop',
            component: shopView
        },
        {
            path: '/cart',
            component: cartView
        },
        {
            path: '/login',
            component: loginView
        },
        {
            path: '/FooterComponent',
            component: contactView
        },
    ]
})

export default router