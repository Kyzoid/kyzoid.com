import { createRouter, createWebHistory } from 'vue-router';
import Maimai from '/src/components/Maimai.vue';
import MaimaiFinale from '/src/components/MaimaiFinale.vue';

const routes = [
    {
        path: '/maimai',
        name: 'Maimai Deluxe Universe Plus',
        component: Maimai,
    },
    {
        path: '/maimai-finale',
        name: 'Maimai Finale',
        component: MaimaiFinale,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;