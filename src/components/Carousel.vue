<template>
  <div class="flex justify-center select-none items-center h-full overflow-hidden">
    <div class="carousel-wrapper masked-overflow absolute bottom-10 z-20">
      <Swiper :breakpoints="breakpoints" :centeredSlides="true" :loop="false" :initial-slide="0" :simulateTouch="true"
        :slideToClickedSlide="true" @swiper="onSwiper" @slideChange="onSlideChange" watch-slides-progress>
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
      <Transition :name="slideTransition" mode="out-in">
        <component class="left" :is="currentComponent().card" mode="compact" />
      </Transition>
    </div>
    
    <div class="fixed z-0 w-full h-full">
      <Transition name="fade">
        <component class="absolute" :is="currentComponent().background" />
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { ref } from 'vue';

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
import iidx from '/iidx/logo.png';

const activeGame = ref(0);
const slideTransition = ref('slide-left');

const components = [
  { "gameId": 0, "card": BeatSaberCard, "background": BeatSaberBackground },
  { "gameId": 1, "card": ChunithmCard, "background": ChunithmBackground },
  { "gameId": 2, "card": EtternaCard, "background": EtternaBackground },
  { "gameId": 3, "card": Ez2onCard, "background": Ez2onBackground },
  { "gameId": 4, "card": JubeatCard, "background": JubeatBackground },
  { "gameId": 5, "card": MaimaiDeluxeCard, "background": MaimaiDeluxeBackground },
  { "gameId": 6, "card": MaimaiFinaleCard, "background": MaimaiFinaleBackground },
  { "gameId": 7, "card": OsuCard, "background": OsuBackground },
  { "gameId": 8, "card": PopnCard, "background": PopnBackground },
  { "gameId": 9, "card": QuaverCard, "background": QuaverBackground },
  { "gameId": 10, "card": SDVXCard, "background": SDVXBackground },
];

const currentComponent = () => {
  return components.find(c => c.gameId === activeGame.value);
}

const breakpoints = {
  // >= 320px
  320: {
    slidesPerView: 3,
    spaceBetween: 50
  },
  480: {
    slidesPerView: 3,
    spaceBetween: 50
  },
  640: {
    slidesPerView: 5,
    spaceBetween: 50
  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 50
  },
  1280: {
    slidesPerView: 5,
    spaceBetween: 50
  }
}

const onSwiper = (swiper) => {
  console.log('dza')
}

const onSlideChange = ({ realIndex }) => {
  slideTransition.value = (realIndex > activeGame.value) ? 'slide-left' : 'slide-right';
  activeGame.value = realIndex;
}
</script>

<style scoped lang="scss">
// SLIDE LEFT ===================================
.slide-left-enter-active,
.slide-left-leave-active {
    transition: all .3s ease;
}

.slide-left-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-left-enter-to,
.slide-left-leave-from {
  transform: translateX(0);
  opacity: 1;
}

// SLIDE RIGHT ===================================
.slide-right-enter-active,
.slide-right-leave-active {
    transition: all .3s ease;
}

.slide-right-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.slide-right-enter-to,
.slide-left-leave-from {
  transform: translateX(0);
  opacity: 1;
}

// FADE ==========================================

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.carousel-wrapper {
  width: 100%;
  filter: drop-shadow(2px 4px 6px black);
}

.swiper-slide {
  opacity: 0;
  transition: .3s opacity linear;
  align-self: center;
  /* border: 1px solid green; */
}

.swiper-slide-visible {
  opacity: .20;
  cursor: pointer;
}

.swiper-slide-active {
  opacity: 1;
  cursor: default;
}

.swiper-slide-prev,
.swiper-slide-next {
  opacity: .40;
}

.swiper-slide img {
  max-height: 63px;
  max-width: 135px;
  transition: .3s transform ease-out;
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



@media (min-width: 320px) {
  .carousel-wrapper {
    width: 100%;
  }
}

@media (min-width: 480px) {
  .carousel-wrapper {
    width: 90%;
  }
}


@media (min-width: 640px) {
  .carousel-wrapper {
    width: 90%;
  }
}

@media (min-width: 1024px) {
  .carousel-wrapper {
    width: 50rem;
  }
}

@media (min-width: 1280px) {
  .carousel-wrapper {
    width: 50rem;
  }
}
</style>