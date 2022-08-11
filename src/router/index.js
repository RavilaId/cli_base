import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Index.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () =>
            import ( /* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue')
    },
    {
        path: '/wifi',
        name: 'wifi',
        component: () =>
            import ( /* webpackChunkName: "wifi" */ '@/views/WiFi.vue')
    },
    {
        path: '/cloud',
        name: 'cloud',
        component: () =>
            import ( /* webpackChunkName: "cloud" */ '@/views/Cloud.vue')
    },
    {
        path: '/settings',
        name: 'settings',
        component: () =>
            import ( /* webpackChunkName: "settings" */ '@/views/Settings.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'page404',
        component: () =>
            import ( /* webpackChunkName: "page404" */ '@/views/Page404.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router