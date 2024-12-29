import { createApp } from 'vue';
import '../index.css';
import App from './App.vue';

import maimai from './components/cards/maimai.vue';
import jubeat from './components/cards/jubeat.vue';
import osumania from './components/cards/osumania.vue';
import popn from './components/cards/popn.vue';
import scoresaber from './components/cards/scoresaber.vue';
import sdvx from './components/cards/sdvx.vue';
import djmax from './components/cards/djmax.vue';
import vividstasis from './components/cards/vividstasis.vue';
import chunithm from './components/cards/chunithm.vue';
import ez2on from './components/cards/ez2on.vue';

const app = createApp(App);

app
.component('maimai', maimai)
.component('jubeat', jubeat)
.component('osumania', osumania)
.component('popn', popn)
.component('scoresaber', scoresaber)
.component('sdvx', sdvx)
.component('djmax', djmax)
.component('vividstasis', vividstasis)
.component('ez2on', ez2on)
.component('chunithm', chunithm);

app.mount('#app');
