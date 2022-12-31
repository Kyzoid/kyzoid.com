import { createRouter, createWebHistory } from 'vue-router';
import MaimaiDeluxe from '/src/components/MaimaiDeluxe.vue';
import MaimaiFinale from '/src/components/MaimaiFinale.vue';
import Home from '/src/components/Home.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/maimai-deluxe',
        name: 'Maimai Deluxe Universe Plus',
        component: MaimaiDeluxe,
        props: { mode: 'page' }
    },
    {
        path: '/maimai-finale',
        name: 'Maimai Finale',
        component: MaimaiFinale,
        props: { mode: 'page' }
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;