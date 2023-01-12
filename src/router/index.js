import { createRouter, createWebHistory } from 'vue-router';
import MaimaiDeluxe from '/src/components/MaimaiDeluxe.vue';
import MaimaiFinale from '/src/components/MaimaiFinale.vue';
import Home from '/src/components/Home.vue';
import SDVX from '/src/components/SDVX.vue';
import Popn from '/src/components/Popn.vue';
import BeatSaber from '/src/components/BeatSaber.vue';
import Ez2on from '/src/components/Ez2on.vue';
import Osu from '/src/components/Osu.vue';
import Quaver from '/src/components/Quaver.vue';
import Etterna from '/src/components/Etterna.vue';
import Jubeat from '/src/components/Jubeat.vue';
import Chunithm from '/src/components/Chunithm.vue';

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
    {
        path: '/beatsaber',
        name: 'BeatSaber',
        component: BeatSaber,
        props: { mode: 'page' }
    },
    {
        path: '/ez2on',
        name: 'Ez2on',
        component: Ez2on,
        props: { mode: 'page' }
    },
    {
        path: '/osu',
        name: 'Osu',
        component: Osu,
        props: { mode: 'page' }
    },
    {
        path: '/quaver',
        name: 'Quaver',
        component: Quaver,
        props: { mode: 'page' }
    },
    {
        path: '/etterna',
        name: 'Etterna',
        component: Etterna,
        props: { mode: 'page' }
    },
    {
        path: '/jubeat',
        name: 'Jubeat',
        component: Jubeat,
        props: { mode: 'page' }
    },
    {
        path: '/chunithm',
        name: 'Chunithm',
        component: Chunithm,
        props: { mode: 'page' }
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;