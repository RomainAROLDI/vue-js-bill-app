import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/bills',
            name: 'bills',
            props: true,
            component: () => import('../views/BillsView.vue')
        },
        {
            path: '/bill/:id',
            name: 'bill',
            props: true,
            component: () => import('../views/BillView.vue')
        },
        {
            path: '/customers',
            name: 'customers',
            props: true,
            component: () => import('../views/CustomersView.vue')
        },
        {
            path: '/customer/:id',
            name: 'customer',
            props: true,
            component: () => import('../views/CustomerView.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: () => import('../views/NotFoundView.vue')
        }
    ]
})

export default router
