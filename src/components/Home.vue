<template>
  <div class="body flex flex-col items-center justify-center h-full w-full">
    <Background class="fixed top-0 left-0 overflow-hidden" />

    <div class="username-wrapper flex flex-col justify-center align-center mb-8 ">
      <div class="relative ml-2 username">
        <h1 class="absolute z-20">KYZOID</h1>
        <span class="absolute z-10 signature">Kyzoid</span>
      </div>
      <span class="mt-16 text-sm uppercase subtitle font-bold z-20">Rhythm game player</span>
    </div>

    <div ref="$card" class="z-30 card" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" @mousemove="rotateToMouse">
      <div class="grid grid-cols-2 gap-2 text-white font-weight-regular">
        <div>
          <div class="mb-2">
            <h2 class="uppercase text-xs opacity-60">Sound Voltex</h2>
            <SDVXCard :value="stats['SDVX']" />
          </div>
          <div class="mb-2">
            <h2 class="uppercase text-xs opacity-60">Maimai DX</h2>
            <div class="mt-0.5 flex items-center">
              <MaimaiCard class="maimai" :value="stats['maimaiDeluxe']" />
            </div>
          </div>

          <div class="mb-2">
            <h2 class="uppercase text-xs opacity-60">Jubeat</h2>
            <JubeatCard :value="stats['jubeat']" />
          </div>
          
          <div>
            <h2 class="uppercase text-xs opacity-60">Pop'n Music</h2>
            <PopnCard :value="stats['popn']" />
          </div>
        </div>
        <div>
          <div class="mb-2">
            <h2 class="uppercase text-xs opacity-60">osu!mania</h2>
            <OsuCard :value="stats['osu']['mania']" />
          </div>
          <div class="mb-2">
            <h2 class="uppercase text-xs opacity-60">ScoreSaber</h2>
            <ScoreSaberCard :value="stats['scoresaber']" />
          </div>
          <div class="mb-2">
            <h2 class="uppercase text-xs opacity-60">EZ2ON Reboot: R</h2>
            <EZ2ONCard :value="ez2onAverage()" />
          </div>
          <div>
            <h2 class="uppercase text-xs opacity-60">vivid/stasis</h2>
            <VividStasisCard :value="stats['vivid/stasis']" />
          </div>
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
import EZ2ONCard from './cards/ez2on.vue';
import JubeatCard from './cards/jubeat.vue';
import MaimaiCard from './cards/maimai.vue';
import OsuCard from './cards/osu.vue';
import PopnCard from './cards/popn.vue';
import ScoreSaberCard from './cards/scoresaber.vue';
import SDVXCard from './cards/sdvx.vue';
import VividStasisCard from './cards/vividstasis.vue';
import Background from './Background.vue';

const $card = ref(null);
const $glow = ref(null);
const isMouseOver = ref(false);
let bounds;

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

const ez2onAverage = () => {
  const convert = (rating) => Number(rating);
  const all = convert(stats['ez2on']['4S']) + convert(stats['ez2on']['5S']) + convert(stats['ez2on']['6S']) + convert(stats['ez2on']['8S']);
  return (all/4).toFixed(3);
}
</script>

<style scoped>
.subtitle {
  color: #9185A6;
  word-break: keep-all;
  letter-spacing: 0.2em;
  word-spacing: 0.4em;
}

.body {
  perspective: 1500px;
  background: linear-gradient(to bottom, #06090f,#090C15);
}

.card { 
  position: relative;
  width: 350px;
  box-shadow: 0 1px 10px rgba(0,0,0,0.2);
  border-radius: 12px;
  padding: .5rem .825rem .825rem .825rem;
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