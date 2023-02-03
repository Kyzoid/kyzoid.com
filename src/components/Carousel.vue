<template>
  <div class="flex justify-center select-none items-center h-full">
    <div class="carousel-wrapper absolute bottom-10 z-20">
      <Swiper
        :slides-per-view="5"
        :centeredSlides="true"
        :space-between="50"
        :loop="true"
        :initial-slide="5"
        :simulateTouch="true"
        :slideToClickedSlide="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        watch-slides-progress
      >
        <SwiperSlide class="slide"><img :src="beatsaber" alt="Beatsaber Logo" /></SwiperSlide>
        <SwiperSlide class="slide"><img :src="chunithm" alt="Chunithm Logo" /></SwiperSlide>
        <SwiperSlide class="slide"><img :src="etterna" alt="Etterna Logo" /></SwiperSlide>
        <SwiperSlide class="slide"><img :src="ez2on" alt="Ez2On Logo" /></SwiperSlide>
        <SwiperSlide class="slide"><img :src="jubeat" alt="Jubeat Logo" /></SwiperSlide>
        <SwiperSlide class="slide"><img :src="maimaiDeluxe" alt="Maimai Deluxe Logo" /></SwiperSlide>
        <SwiperSlide class="slide"><img :src="maimaiFinale" alt="Maimai Finale Logo" /></SwiperSlide>
        <SwiperSlide class="slide"><img :src="osu" alt="osu! Logo" /></SwiperSlide>
        <SwiperSlide class="slide"><img :src="popn" alt="Pop'N Music Logo" /></SwiperSlide>
        <SwiperSlide class="slide"><img :src="quaver" alt="Quaver Logo" /></SwiperSlide>
        <SwiperSlide class="slide"><img :src="sdvx" alt="SDVX Logo" /></SwiperSlide>
      </Swiper>
    </div>
    <div class="card-wrapper mx-4 z-10">
      <BeatSaberCard :class="activeGame === 0 ? '' : 'hidden'" mode="compact" />
      <ChunithmCard :class="activeGame === 1 ? '' : 'hidden'" mode="compact" />
      <EtternaCard :class="activeGame === 2 ? '' : 'hidden'" mode="compact" />
      <Ez2onCard :class="activeGame === 3 ? '' : 'hidden'" mode="compact" />
      <JubeatCard :class="activeGame === 4 ? '' : 'hidden'" mode="compact" />
      <MaimaiDeluxeCard :class="activeGame === 5 ? '' : 'hidden'" mode="compact" />
      <MaimaiFinaleCard :class="activeGame === 6 ? '' : 'hidden'" mode="compact" />
      <OsuCard :class="activeGame === 7 ? '' : 'hidden'" mode="compact" />
      <PopnCard :class="activeGame === 8 ? '' : 'hidden'" mode="compact" />
      <QuaverCard :class="activeGame === 9 ? '' : 'hidden'" mode="compact" />
      <SDVXCard :class="activeGame === 10 ? '' : 'hidden'" mode="compact" />
    </div>
    <div class="fixed z-0 w-full h-full">
      <BeatSaberBackground :class="activeGame === 0 ? '' : 'hidden'" />
      <ChunithmBackground :class="activeGame === 1 ? '' : 'hidden'" />
      <EtternaBackground :class="activeGame === 2 ? '' : 'hidden'" />
      <Ez2onBackground :class="activeGame === 3 ? '' : 'hidden'" />
      <JubeatBackground :class="activeGame === 4 ? '' : 'hidden'" />
      <MaimaiDeluxeBackground :class="activeGame === 5 ? '' : 'hidden'" />
      <MaimaiFinaleBackground :class="activeGame === 6 ? '' : 'hidden'" />
      <OsuBackground :class="activeGame === 7 ? '' : 'hidden'" />
      <PopnBackground :class="activeGame === 8 ? '' : 'hidden'" />
      <QuaverBackground :class="activeGame === 9 ? '' : 'hidden'" />
      <SDVXBackground :class="activeGame === 10 ? '' : 'hidden'" />
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { nextTick, ref } from 'vue';

// cards
import BeatSaberCard from './beatsaber/BeatSaberCard.vue';
import ChunithmCard from './chunithm/ChunithmCard.vue';
import EtternaCard from './etterna/EtternaCard.vue';
import Ez2onCard from './ez2on/Ez2onCard.vue';
import MaimaiDeluxeCard from './maimai/MaimaiDeluxeCard.vue';
import MaimaiFinaleCard from './maimai/MaimaiFinaleCard.vue';
import OsuCard from './osu/OsuCard.vue';
import JubeatCard from './jubeat/JubeatCard.vue';
import PopnCard from './popn/PopnCard.vue';
import QuaverCard from './quaver/QuaverCard.vue';
import SDVXCard from './sdvx/SDVXCard.vue';

// backgrounds
import BeatSaberBackground from './beatsaber/BeatSaberBackground.vue';
import ChunithmBackground from './chunithm/ChunithmBackground.vue';
import EtternaBackground from './etterna/EtternaBackground.vue';
import Ez2onBackground from './ez2on/Ez2onBackground.vue';
import MaimaiDeluxeBackground from './maimai/MaimaiDeluxeBackground.vue';
import MaimaiFinaleBackground from './maimai/MaimaiFinaleBackground.vue';
import OsuBackground from './osu/OsuBackground.vue';
import JubeatBackground from './jubeat/JubeatBackground.vue';
import PopnBackground from './popn/PopnBackground.vue';
import QuaverBackground from './quaver/QuaverBackground.vue';
import SDVXBackground from './sdvx/SDVXBackground.vue';

// logo
import beatsaber from '/beatsaber/logo.svg';
import chunithm from '/chunithm/logo.png';
import etterna from '/etterna/logo.png';
import ez2on from '/ez2on/logo.png';
import jubeat from '/jubeat/logo_sp.png';
import maimaiDeluxe from '/maimai/logo.png';
import maimaiFinale from '/maimai_finale/logo.png';
import osu from '/osu/logo.png';
import popn from '/popn/logo.webp';
import quaver from '/quaver/logo.png';
import sdvx from '/sdvx/logo.png';

const activeGame = ref(0);
const changeActiveGame = (value) => {
  if (activeGame.value === 0 && value === -1) {
    activeGame.value = 10;
  } else if (activeGame.value === 10 && value === 1) {
    activeGame.value = 0;
  } else {
    activeGame.value += value;
  }
}

const onSwiper = (swiper) => {
  console.log(swiper)
}

const onSlideChange = ({ realIndex }) => {
  activeGame.value = realIndex;
}
</script>

<style scoped>
.carousel-wrapper {
  max-width: 50vw;
}
.swiper-slide {
  opacity: 0;
  transition: .3s opacity linear; 
  align-self: center;
  /* border: 1px solid green; */
}
.swiper-slide-visible {
  opacity: .40;
  cursor: pointer;
}

.swiper-slide-active {
  opacity: 1;
  cursor: default;
}

.swiper-slide-prev, .swiper-slide-next {
  opacity: .60;
}

.swiper-slide img {
  max-height: 70px;
  max-width: 150px;
  transition: .3s transform ease-out; 
}

.swiper {
  /* border: 1px solid red; */
}

.swiper-slide-active {
  transform: scale(1);
}


.slide {
  display: flex;
  justify-content: center;
}

.slide div {
  width: 1px;
  height: 100%;
}

.menu {
  position: absolute;
}
.card-wrapper {
  width: 450px;
}
</style>