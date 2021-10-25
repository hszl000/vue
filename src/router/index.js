import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
        path: '',
        name: 'Home',
        component: Home
    }, {
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../views/About')
    },
    {
        path: '/notice',
        name: 'Notice',
        component: () =>
            import ('../views/Notice.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router