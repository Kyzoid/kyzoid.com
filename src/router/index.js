import { createRouter, createWebHistory } from 'vue-router';
import Monitoring from '/src/components/Monitoring.vue';
import Home from '/src/components/Home.vue';
import Testing from '/src/components/Testing.vue';

const routes = [
    {
        path: '/monitoring',
        name: 'Monitoring',
        component: Monitoring
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/testing',
        name: 'Testing',
        component: Testing
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;