<template>
  <div class="bg-main relative h-full w-full" :class="[(mode === 'page' ? '' : 'bg-main-compact')]">
    <div class="sdvx-icon-wrapper">
      <img class="sdvx-icon z-10" :src="bgSdvx" alt="Background SDVX">
    </div>
  </div>
</template>

<script setup>
import bgSdvx from '/sdvx/bg_sdvx.png';

defineProps({
  mode: String
});
</script>

<style scoped>
.sdvx-icon-wrapper {
  max-width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.6;
}

.sdvx-icon {
  animation: rotateAnimation 10s linear infinite;
}

.bg-main {
  background-image: url("/sdvx/bg_grd_left.png"), url("/sdvx/bg_grd_right.png"), url("/sdvx/bg_main02.png"), url("/sdvx/bg_main01.png");
  background-repeat: repeat-y, repeat-y, repeat, repeat-x;
  background-position: left, right, top left, bottom;
  background-size: auto, auto, auto, auto;
}

.bg-main:before,
.bg-main:after {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 33px;
}

.bg-main:before {
  top: 0;
  background-image: url("/sdvx/frame_top_left.png"), url("/sdvx/frame_top_right.png"), url("/sdvx/frame_top_bar.png"), url("/sdvx/frame_top_title.png");
  background-repeat: no-repeat, no-repeat, repeat-x, no-repeat;
  background-size: auto 20px, auto 20px, auto 20px, auto 20px;
  background-position: top left -150px, top right -150px, top center, top center;
}

.bg-main:after {
  bottom: 0;
  background-image: url("/sdvx/frame_btm_left.png"), url("/sdvx/frame_btm_right.png"), url("/sdvx/frame_btm_bar.png"), url("/sdvx/frame_btm_title.png");
  background-repeat: no-repeat, no-repeat, repeat-x, no-repeat;
  background-size: auto 20px, auto 20px, auto 20px, auto 20px;
  background-position: bottom left -150px, bottom right -150px, bottom center, bottom center;
}

.bg-main-compact {
  background-size: 100px auto, 100px auto, auto, auto !important;
}

.bg-main-compact:before {
  background-position: top left -100px, top right -100px, top center, top center !important;
  background-size: auto 20px, auto 20px, auto 20px !important;
}

.bg-main-compact:after {
  background-position: bottom left -100px, bottom right -100px, bottom center, bottom center !important;
  background-size: auto 20px, auto 20px, auto 20px !important;
}

@media only screen and (min-width: 640px) {
  .bg-main {
    background-size: 100px auto, 100px auto, auto, auto;
  }

  .bg-main:before {
    background-position: top left -100px, top right -100px, top center, top center;
  }

  .bg-main:after {
    background-position: bottom left -100px, bottom right -100px, bottom center, bottom center;
  }
}

@media only screen and (min-width: 900px) {
  .bg-main:before {
    background-size: auto 33px, auto 33px, auto 33px, auto 33px;
  }

  .bg-main:after {
    background-size: auto 33px, auto 33px, auto 33px, auto 33px;
  }
}

@keyframes rotateAnimation {
  from {
    transform: rotateY(0deg);
  }

  to {
    transform: rotateY(360deg);
  }
}
</style>