import { createRouter, createWebHistory } from 'vue-router';
import MaimaiDeluxe from '/src/components/MaimaiDeluxe.vue';
import MaimaiFinale from '/src/components/MaimaiFinale.vue';
import Home from '/src/components/Home.vue';
import SDVX from '/src/components/SDVX.vue';
import Popn from '/src/components/Popn.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/maimai-deluxe',
        name: 'MaimaiDeluxe',
        component: MaimaiDeluxe,
        props: { mode: 'page' }
    },
    {
        path: '/maimai-finale',
        name: 'MaimaiFinale',
        component: MaimaiFinale,
        props: { mode: 'page' }
    },
    {
        path: '/sdvx',
        name: 'SDVX',
        component: SDVX,
        props: { mode: 'page' }
    },
    {
        path: '/popn',
        name: 'Popn',
        component: Popn,
        props: { mode: 'page' }
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;