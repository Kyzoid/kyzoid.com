<template>
  <div class="body flex flex-col items-center justify-center h-full w-full">
    <Background class="fixed top-0 left-0 overflow-hidden" />

    <div class="username-wrapper flex flex-col justify-center align-center mb-8">
      <div class="relative ml-2 username">
        <h1 class="absolute z-20">KYZOID</h1>
        <span class="absolute z-10 signature">Kyzoid</span>
      </div>
      <span class="mt-16 text-sm uppercase subtitle font-bold z-20">Rhythm game player</span>
      <div class="text-xs opacity-50 text-center mb-3 date-sub">last updated: {{ daysAgo(stats.lastUpdated) }}</div>
    </div>

    <div ref="$card" class="z-30 card relative" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" @mousemove="rotateToMouse">
      <div class="grid grid-cols-2 gap-3 sm:gap-6 text-white font-weight-regular p-3 sm:p-6">

        <div v-for="[key, value] in Object.entries(stats.games).filter(([k,v]) => v.show)" :key="key"
          :class="value['active'] ? '' : 'opacity-50'"
        >
          <h2 class="uppercase text-xs opacity-60 mb-1 flex items-center">
            <span>{{ value["name"] }}</span>
            <img v-if="!value['active']" class="ml-1.5" :src="zzzIcon" width="16" />
          </h2>
          <component :is="key" :value="value['rating']"></component>
        </div>

      </div>
      
      <div ref="$glow" class="glow"></div>
      <div ref="$shine" class="shine"></div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import stats from '/src/stats.json';
import Background from './Background.vue';
import zzzIcon from '/zzz.png';

const $card = ref(null);
const $glow = ref(null);
const isMouseOver = ref(false);
let bounds;

// date: string (DD-MM-YYYY)
const daysAgo = (dateString) => {
  const split = dateString.split('-').map(i => Number(i));
  const date = new Date(split[2], split[1] - 1, split[0]);
  const differenceInMilliseconds = Date.now() - date.getTime();
  const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

  if (differenceInDays === 0) {
    return "today";
  } else if (differenceInDays === 1) {
    return "1 day ago";
  } else {
    return `${differenceInDays} days ago`;
  }
}

const rotateToMouse = (e) => {
  if (!isMouseOver.value) return;

  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2
  }
  const distance = Math.sqrt(center.x**2 + center.y**2);
  
  $card.value.style.transform = `
    scale3d(1.07, 1.07, 1.07)
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance)* 2}deg
   )
  `;
  
  $glow.value.style.backgroundImage = `
    radial-gradient(
      circle at
      ${center.x * 2 + bounds.width/2}px
      ${center.y * 2 + bounds.height/2}px,
      #B5BEDF2A,
      #0000000f
   )
  `;
}

const onMouseEnter = () => {
  isMouseOver.value = true;
  bounds = $card.value.getBoundingClientRect();
}

const onMouseLeave = () => {
  isMouseOver.value = false;
  $card.value.style.transform = '';
  $card.value.style.background = '';
}
</script>

<style scoped>
.subtitle {
  color: #9185A6;
  word-break: keep-all;
  letter-spacing: 0.2em;
  word-spacing: 0.4em;
}

.date-sub {
  color: #9185A6;
  letter-spacing: 0.08em;
}

.body {
  perspective: 1500px;
  background: linear-gradient(to bottom, #06090f,#090C15);
}

.card { 
  position: relative;
  box-shadow: 0 1px 10px rgba(0,0,0,0.2);
  border-radius: 12px;
  border: 2px solid rgba(255,255,255, 0.1); 

  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);

  transition-duration: 300ms;
  transition-property: transform, box-shadow;
  transition-timing-function: ease-out;
  transform: rotate3d(0);
}

.card:hover {
  transition-duration: 150ms;
}

.card .glow {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 10px;
  background-image: radial-gradient(circle at 150% 150%, #B5BEDF2A, #0000000f);
}

.username {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.username h1 {
  font-size: 96px;
  background: linear-gradient(to bottom, #ADADDC, 5%, #D7D5F1);
  background-clip: text;
  color: transparent;
}

.username .signature {
  font-family: 'RetroSignature';
  background: linear-gradient(to top,#FF83E4,#FF832C);
  background-clip: text;
  font-size: 200px;
  color: transparent;
  filter: drop-shadow(0 0 10px #FF654F);
  font-weight: 400;
}
</style>