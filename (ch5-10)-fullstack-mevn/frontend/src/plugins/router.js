import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/Contact.vue')
    },
    {
        path: '/movies/add',
        name: 'addMovie',
        component: () => import('@/views/AddMovie.vue')
    },
    {
        path: '/movies/:id',
        name: 'movie',
        component: () => import('@/views/Movie.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router