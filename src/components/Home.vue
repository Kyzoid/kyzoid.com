<template>
  <div v-if="currentComponent" class="flex justify-center select-none items-center h-full overflow-hidden">
    <div class="carousel-wrapper masked-overflow absolute bottom-10 z-20">
      <Swiper ref="swiper" :breakpoints="breakpoints" :centeredSlides="true" :loop="false" :initial-slide="currentComponent.id"
        :simulateTouch="true" :slideToClickedSlide="true" @swiper="onSwiper" @slideChange="onSlideChange"
        watch-slides-progress>
        <SwiperSlide class="slide" data-name="sdvx"><img :src="sdvx" alt="SDVX Logo" /></SwiperSlide>
        <SwiperSlide class="slide" data-name="maimaiDeluxe"><img :src="maimaiDeluxe" alt="Maimai Deluxe Logo" /></SwiperSlide>
        <!-- <SwiperSlide class="slide" data-name="chunithm"><img :src="chunithm" alt="Chunithm Logo" /></SwiperSlide> -->
        <SwiperSlide class="slide" data-name="ez2on"><img :src="ez2on" alt="Ez2On Logo" /></SwiperSlide>
        <!-- <SwiperSlide class="slide" data-name="popn"><img :src="popn" alt="Pop'N Music Logo" /></SwiperSlide> -->
        <SwiperSlide class="slide" data-name="jubeat"><img :src="jubeat" alt="Jubeat Logo" /></SwiperSlide>
        <SwiperSlide class="slide" data-name="beatsaber"><img :src="beatsaber" alt="Beatsaber Logo" /></SwiperSlide>
        <!-- <SwiperSlide class="slide" data-name="iidx"><img :src="iidx" alt="IIDX Logo" /></SwiperSlide> -->
        <!-- <SwiperSlide class="slide" data-name="maimaiFinale"><img :src="maimaiFinale" alt="Maimai Finale Logo" /></SwiperSlide> -->
        <SwiperSlide class="slide" data-name="osu"><img :src="osu" alt="osu! Logo" /></SwiperSlide>
        <SwiperSlide class="slide" data-name="quaver"><img :src="quaver" alt="Quaver Logo" /></SwiperSlide>
        <SwiperSlide class="slide" data-name="etterna"><img :src="etterna" alt="Etterna Logo" /></SwiperSlide>
      </Swiper>
    </div>
    <div class="card-wrapper mx-4 z-10">
      <Transition :name="slideTransition" mode="out-in" appear>
        <component class="left" :is="currentComponent.card" mode="compact" />
      </Transition>
    </div>

    <div class="fixed z-0 w-full h-full">
      <Transition name="fade" appear>
        <component class="absolute" :is="currentComponent.background" />
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { ref, computed, watch, onMounted } from 'vue';
import router from '../router';

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
// import chunithm from '/chunithm/logo.png';
import etterna from '/etterna/logo.png';
import ez2on from '/ez2on/logo.png';
import jubeat from '/jubeat/logo_sp.png';
import maimaiDeluxe from '/maimai/logo.png';
// import maimaiFinale from '/maimai_finale/logo.png';
import osu from '/osu/logo.png';
import popn from '/popn/logo.webp';
import quaver from '/quaver/logo.png';
import sdvx from '/sdvx/logo.png';
import iidx from "/iidx/logo.png";

const activeGame = ref(null);
const swiper = ref(null);
const slideTransition = ref("slide-left");

const components = [
  { "id": 0, "name": "sdvx", "card": SDVXCard, "background": SDVXBackground },
  { "id": 1, "name": "maimaiDeluxe", "card": MaimaiDeluxeCard, "background": MaimaiDeluxeBackground },
  // { "id": 0, "name": "chunithm", "card": ChunithmCard, "background": ChunithmBackground },
  { "id": 2, "name": "ez2on", "card": Ez2onCard, "background": Ez2onBackground },
  // { "id": 3, "name": "popn", "card": PopnCard, "background": PopnBackground },
  { "id": 3, "name": "jubeat", "card": JubeatCard, "background": JubeatBackground },
  { "id": 4, "name": "beatsaber", "card": BeatSaberCard, "background": BeatSaberBackground },
  // { "id": 0, "name": "maimaiFinale", "card": MaimaiFinaleCard, "background": MaimaiFinaleBackground },
  { "id": 5, "name": "osu", "card": OsuCard, "background": OsuBackground },
  { "id": 6, "name": "quaver", "card": QuaverCard, "background": QuaverBackground },
  { "id": 7, "name": "etterna", "card": EtternaCard, "background": EtternaBackground },
  // { "id": 0, "name": "iidx", "card": IIDXCard, "background": IIDXBackground },
];

onMounted(() => {
  const query = router.currentRoute.value.query;

  if (query.game) {
    const component = components.find(c => c.name === router.currentRoute.value.query.game);
    if (component) {
      activeGame.value = component.name;
      return;
    }
  }

  router.replace({ path: '/', query: { game: "sdvx" } });
});

const currentComponent = computed(() => {
  return components.find(c => c.name === activeGame.value);
});

watch(() => router.currentRoute.value.query, (query) => {
  activeGame.value = query.game;
})

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
}

const onSlideChange = ({ activeIndex, previousIndex, slides }) => {
  const component = components.find(c => c.name === slides[activeIndex]?.dataset?.name);
  slideTransition.value = (activeIndex > previousIndex) ? 'slide-left' : 'slide-right';
  router.replace({ path: '/', query: { game: component.name } });
}
</script>

<style scoped lang="scss">
// SLIDE LEFT ===================================
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all .3s ease;
}

.fit-content {
  width: max-content;
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
  transition: .15s opacity linear;
  align-self: center;
}

.swiper-slide-visible {
  opacity: .30;
  cursor: pointer;
}

.swiper-slide-visible:hover {
  opacity: 1 !important;
}

.swiper-slide-active {
  opacity: 1;
  cursor: default;
}

.swiper-slide-prev,
.swiper-slide-next {
  opacity: .60;
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
  max-width: 450px;
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