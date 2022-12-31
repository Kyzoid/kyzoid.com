<template>
  <div class="bg-night h-full w-full">
    <RouterLink class="logo z-50" :class="[(mode === 'page') ? 'logo-full' : 'logo-compact']" to="/maimai-finale">
      <img :src="logo" alt="Maimai Finale logo">
    </RouterLink>
    <div class="balloons">
      <div class="balloon bal0"></div>
      <div class="balloon bal1"></div>
      <div class="balloon bal2"></div>
      <div class="balloon bal3"></div>
      <div class="balloon bal4"></div>
      <div class="balloon bal5"></div>
    </div>
    <div class="profile h-full w-full flex flex-col items-center" :class="[(mode === 'page') ? 'justify-start' : 'justify-center']">
      <div v-if="mode === 'page'" class="title relative">
        <img class="absolute" :src="maiPageTitleBg" alt="Maimai page title background" />
        <h1 class="absolute text-3xl font-bold">プロフィール</h1>
      </div>
      <MaimaiFinaleCard class="z-20" />
    </div>
    <div v-if="mode === 'page'" class="footer"></div>
  </div>
</template>

<script setup>
import maiPageTitleBg from '/maimai_finale/maiPageTitleBg.png';
import MaimaiFinaleCard from './maimai/MaimaiFinaleCard.vue';
import logo from '/maimai_finale/logo.png';

defineProps({
  mode: String
});
</script>

<style scoped>
.logo {
  transition: .1s opacity linear;
  opacity: 0.7;
  position: absolute;
}

.logo:hover {
  opacity: 1;
}

.logo-full {
  right: 1rem;
  top: 1rem;
  width: 200px;
}

.logo-compact {
  right: .5rem;
  top: .5rem;
  width: 100px;
}

.title {
  width: 484px;
  height: 213px;
}

.title img {
  width: 100%;
  height: 100%;
}

.title h1 {
  text-shadow: 0 0 8px #4967d6, 0 0 8px #4967d6;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
}

.bg-night {
  background: url("/maimai_finale/curtain.png"), url("/maimai_finale/stars.png"), url("/maimai_finale/purpleStars.png");
  background-repeat: repeat-x,repeat,repeat;
  background-position: top center;
  background-color: #1D2D66;
  overflow: hidden;
}

.footer {
  position: absolute;
  bottom: -3rem;
  left: 0;
  background: url("/maimai_finale/footerBg.png");
  background-repeat: repeat-x;
  background-position: bottom center;
  width: 100%;
  height: 220px;
}

.balloon {
  position: absolute;
  bottom: -165px;
  animation: balloon 20s linear infinite;
}

.bal0 {
  background-image: url("/maimai_finale/balloonPink.png");
  background-size: contain;
  background-position: 0 0;
  background-repeat: no-repeat;
  right: 2%;
  width: 73px;
  height: 163px;
  animation-delay: 0s;
}

.bal1 {
  background-image: url("/maimai_finale/balloonBlue.png");
  background-size: contain;
  background-position: 0 0;
  background-repeat: no-repeat;
  right: 25%;
  width: 40px;
  height: 110px;
  animation-delay: 1s;
}

.bal2 {
  background-image: url("/maimai_finale/balloonYellow.png");
  background-size: contain;
  background-position: 0 0;
  background-repeat: no-repeat;
  right: 90%;
  width: 73px;
  height: 163px;
  animation-delay: 2.5s;
}

.bal3 {
  background-image: url("/maimai_finale/balloonGreen.png");
  background-size: contain;
  background-position: 0 0;
  background-repeat: no-repeat;
  right: 15%;
  width: 40px;
  height: 110px;
  animation-delay: 3.5s;
}

.bal4 {
  background-image: url("/maimai_finale/balloonBlue.png");
  background-size: contain;
  background-position: 0 0;
  background-repeat: no-repeat;
  right: 75%;
  width: 73px;
  height: 163px;
  animation-delay: 4.5s;
}

.bal5 {
  background-image: url("/maimai_finale/balloonPink.png");
  background-size: contain;
  background-position: 0 0;
  background-repeat: no-repeat;
  right: 92%;
  width: 40px;
  height: 110px;
  animation-delay: 5.5s;
}

@keyframes balloon {
  0% {
    transform: translate(0);
    opacity: 0
  }

  20% {
    transform: translate(-10px, -300px);
    opacity: .75
  }

  40% {
    transform: translate(20px, -600px);
    opacity: .75
  }

  60% {
    transform: translate(-10px, -900px);
    opacity: .75
  }

  80% {
    transform: translate(-10px, -1200px);
    opacity: .75
  }

  to {
    transform: translate(10px, -1500px);
    opacity: 0
  }
}
</style>