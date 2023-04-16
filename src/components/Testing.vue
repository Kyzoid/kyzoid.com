<template>
  <div class="body flex flex-col items-center justify-center h-full w-full">
    <MainBackground class="fixed top-0 left-0 overflow-hidden" />

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
            <div class="sdvx mt-0.5 relative flex items-center">
              <img class="sdvx-bg" :src="SDVXCard" alt="SDVX Card" />
              <img class="sdvx-icon" width="28" :src="`/sdvx/volforce/${volforce(stats['SDVX'].rating)}.png`" :alt="`Volforce ${volforce(stats['SDVX'].rating)}`" />
              <img class="sdvx-stars" :src="`/sdvx/volforce/force/rounded/${volforceStars(stats['SDVX'].rating)}.png`" alt="Volforce stars">
              <span class="sdvx-rating font-medium">{{ stats['SDVX'].rating }}</span>
            </div>
          </div>
          <div class="mb-2">
            <h2 class="uppercase text-xs opacity-60">Maimai DX</h2>
            <div class="mt-0.5 flex items-center">
              <MaimaiDeluxeRating class="maimai" :value="stats['maimaiDeluxe'].rating" />
            </div>
          </div>

          <div class="mb-2">
            <h2 class="uppercase text-xs opacity-60">Jubeat</h2>
            <div class="jubeat mt-1 flex justify-between items-center px-2">
              <span class="text-xs font-medium">Jubility</span>
              <span class="jubeat-rating font-medium opacity-90">{{ stats['jubeat'].rating }}</span>
            </div>
          </div>

          <div>
            <h2 class="uppercase text-xs opacity-60">Pop'n Music</h2>
            <div class="popn relative px-2 mt-1">
              <div class="popn-inner h-full flex items-center justify-center">
                <div class="popn-avatar h-6 w-6 rounded-full border-blue-600 border-2">
                  <img :src="PopnMusicClass3" alt="Popn class 3">
                </div>
                <span class="popn-rating ml-2 font-medium text-black">{{ stats['popn'].rating }}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="mb-2">
            <h2 class="uppercase text-xs opacity-60">osu!mania</h2>
            <div class="osu relative mt-1 flex items-center justify-center">
              <img class="osu-bg" :src="OsuCard" alt="osu! Card" />
              <div class="px-2 osu-wrapper relative w-full flex justify-center -ml-2">
                <span class="absolute osu-rating z-20">{{ stats['osu'].rating['mania'].pp }}pp</span>
                <span class="absolute osu-shadow z-10">{{ stats['osu'].rating['mania'].pp }}pp</span>
              </div>
            </div>
          </div>
          <div class="mb-2">
            <h2 class="uppercase text-xs opacity-60">ScoreSaber</h2>
            <div class="scoresaber flex items-center justify-center px-2 mt-1">
              <img class="scoresaber-bg" :src="BeatSaberCard" alt="BeatSaber Card">
              <span class="font-medium scoresaber-rating mr-1">{{ stats['beatsaber'].rating }}</span>
              <span class="font-medium scoresaber-label">pp</span>
            </div>
          </div>
          <div class="mb-2">
            <h2 class="uppercase text-xs opacity-60">EZ2ON Reboot: R</h2>
            <div class="mt-1 ez2on">
                <img class="ez2on-bg" :src="EZ2ONCard" alt="EZ2ON Card">
                <div class="flex items-center h-full justify-between px-2">
                  <span class="z-10 ez2on-label uppercase">AVG</span>
                  <span class="z-10 ez2on-rating -mt-0.5">{{ ez2onAverage() }}</span>
                </div>
            </div>
          </div>
          <div>
            <h2 class="uppercase text-xs opacity-60">vivid/stasis</h2>
            <div class="mt-1 vivid">
              <img class="z-0 vivid-bg" :src="VividStasisCard" alt="vivid/stasis card">
              <div class="flex items-center justify-between h-full px-2">
                <span class="z-10 vivid-label font-medium text-shadow uppercase">Rating</span>
                <span class="z-10 vivid-rating font-medium text-shadow">{{ stats['vivid/stasis'].rating }}</span>
              </div>
            </div>
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
import MaimaiDeluxeRating from './maimai/Rating.vue';
import PopnMusicClass3 from '/popn/class_3.png';
import MainBackground from './MainBackground.vue';
import SDVXCard from '/sdvx/card-small.svg';
import OsuCard from '/osu/card-small.svg';
import BeatSaberCard from '/beatsaber/card-small.svg';
import VividStasisCard from '/vivid_stasis/card-small.svg';
import EZ2ONCard from '/ez2on/card-small.svg';


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
      #ffffff2a,
      #0000000f
   )
  `;
}

const onMouseEnter = () => {
  console.log('enter')
  isMouseOver.value = true;
  bounds = $card.value.getBoundingClientRect();
  // document.addEventListener('mousemove', rotateToMouse);
}

const onMouseLeave = () => {
  console.log('leave')
  isMouseOver.value = false;
  // document.removeEventListener('mousemove', rotateToMouse);
  $card.value.style.transform = '';
  $card.value.style.background = '';
}

const volforce = (rating) => {
  const value = Number(rating);
  if (value <= 17) return 6;
  if (value <= 18) return 7;
  if (value <= 19) return 8;
  if (value <= 20) return 9;
  return 10;
}

const volforceStars = (rating) => {
  const decimals = rating.toString().split('.').reverse()[0];
  if (decimals < 250 ) return 1;
  if (decimals < 500 ) return 2;
  if (decimals < 750 ) return 3;
  return 4;
}

const ez2onAverage = () => {
  const convert = (rating) => Number(rating.replace(',', '.'));
  const all = convert(stats['ez2on'].rating['4S']) + convert(stats['ez2on'].rating['5S']) + convert(stats['ez2on'].rating['6S']) + convert(stats['ez2on'].rating['8S']);
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
  background: #090C15;
}

.maimai {
  filter: drop-shadow(0 0 2px black);
}

.sdvx {
  filter: drop-shadow(0 0 2px black);
}

.sdvx-bg {
  width: 110px;
  height: 32px;
}

.sdvx .sdvx-icon {
  position: absolute;
  filter: drop-shadow(0 0 1px black);
  left: 0.6rem;
  top: 0.25rem;
}

.sdvx .sdvx-rating {
  position: absolute;
  color: rgba(255, 255, 255, 0.95);
  letter-spacing: 0.13em;
  font-size: 14px;
  left: 3.18rem;
  top: 0.3rem;
}

.sdvx .sdvx-stars {
  position: absolute;
  bottom: 0.15rem;
  left: 0.33rem;
  height: 13px;
  filter: drop-shadow(0 0 1px rgba(0,0,0,0.5));
}

.jubeat {
  width: 110px;
  height: 32px;
  color: #eaffff;
  border-radius: 6px;
  border: solid 1px #fff;
  background: linear-gradient(to right, rgba(145,176,185,.5), rgba(83,134,148,.5));
  box-shadow: 0 0 1px #43c2cf, 0 0 2px #43c2cf, 0 0 3px #43c2cf, 0 0 1px #43c2cf inset, 0 0 6px #43c2cf inset, 0 0 6px #43c2cf inset;
}

.jubeat-rating {
  background: linear-gradient(to top, #89ffd4, #5cedff);
  background-clip: text;
  color: transparent;
  font-weight: 700;
  letter-spacing: 0.05em;
  font-size: 14px;
}

.ez2on {
  width: 110px;
  height: 32px;
}

.ez2on-bg {
  position: absolute;
  width: 110px;
  height: 32px;
}

.ez2on-rating {
  color: white;
  font-size: 14px;
  background: linear-gradient(to top, #FCFCFC, #C3C3C3);
  background-clip: text;
  color: transparent;
  font-weight: 800;
}

.ez2on-label {
  color: #0DD983;
  font-weight: 500;
  font-size: 12px;
}

.vivid {
  position: relative;
  width: 110px;
  height: 32px;
}

.vivid-bg {
  position: absolute;
  width: 110px;
  height: 32px;
}

.text-shadow {
  text-shadow: black 1px 1px 0, black -1px -1px 0,
		black -1px 1px 0, black 1px -1px 0,
		black 0px 1px 0, black 0 -1px 0,
		black -1px 0 0, black 1px 0 0;
}

.vivid-label {
  font-size: 12px;
}

.vivid-rating {
  font-size: 14px;
}

.osu {
  width: 110px;
  height: 32px;
  font-size: 14px;
}

.osu-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.9;
}

.osu-rating {
  background: linear-gradient(to top, #FFC736, #FFDF8B);
  background-clip: text;
  color: transparent;
  font-weight: 800;
  font-size: 16px;
  font-family: 'Torus';
}

.osu-wrapper {
  height: 24px;
  width: fit-content
}

.osu-shadow {
  color: black;
  opacity: 0.8;
  font-size: 16px;
  font-family: 'Torus';
  font-weight: 800;
  transform: translate(0px, 1px);
}

.scoresaber {
  width: 110px;
  height: 32px;
}

.scoresaber-bg {
  position: absolute;
  width: 110px;
  height: 32px;
}

.scoresaber-rating {
  color: white;
  font-weight: 800;
  filter: drop-shadow(0 0 2px #E7172B) drop-shadow(0 0 6px #E7172B);
  font-size: 14px;
  text-shadow: -1px 0px 0px #E7172B;
  font-family: 'NeonTubes';
}

.scoresaber-label {
  color: white;
  font-weight: 800;
  filter: drop-shadow(0 0 2px #1494E3) drop-shadow(0 0 6px #1494E3);
  font-size: 14px;
  text-shadow: -1px 0px 0px #1494E3;
  font-family: 'NeonTubes';
}

.popn {
  width: 110px;
  height: 32px;
  outline: 1px solid grey;
  border: 1px solid black;
  border-radius: 6px;
  background-size: 14.14px 14.14px;
  background-image: linear-gradient(135deg, #e9c874 10%, #ffffc7 10%, #ffffc7 50%, #e9c874 50%, #e9c874 60%, #ffffc7 60%, #ffffc7 100%);
}

.popn-inner {
  background-color: #FFFFC7;
}

.popn:before {
  background: url("/popn/pipe.png");
  background-repeat: no-repeat;
  transform: rotate(90deg) translate(-40%, -40%) scale(0.5);
  top: 0;
  right: 0;
}

.popn-rating {
  font-size: 14px;
}

.popn:after {
  background: url("/popn/pipe.png");
  background-repeat: no-repeat;
  transform: rotate(-90deg) translate(-40%, -40%) scale(0.5);
  bottom: 0;
  left: 0;
}

.popn:after, .popn:before {
  content: "";
  position: absolute;
  width: 33px;
  height: 32px;
}

.card { 
  width: 350px;
  box-shadow: 0 1px 10px rgba(0,0,0,0.2);
  border-radius: 12px;
  padding: .5rem .825rem .825rem .825rem;

  /* glassmorphism */
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  /* end glassmorphism */
  
  position: relative;
  
  transition-duration: 300ms;
  transition-property: transform, box-shadow;
  transition-timing-function: ease-out;
  transform: rotate3d(0);

  border: 2px solid rgba(255,255,255, 0.1); 
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
  
  background-image: radial-gradient(circle at 150% 150%, #ffffff2a, #0000000f);
}

.avatar {
  background-image: url("/avatar.png");
  background-position: center center;
  background-size: cover;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.separator {
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgba(255,255,255,0.60) 10%, rgba(255,255,255,0) 100%);
  height: 1px;
  width: 100%;
}

.username {
  font-size: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #D2CED9;
}

.username .signature {
  font-family: 'RetroSignature';
  background: linear-gradient(to top, #FF83E4, #FF832C);
  background-clip: text;
  font-size: 200px;
  color: transparent;
  filter: drop-shadow(0 0 10px #FF654F);
  font-weight: 400;
}
</style>