<template>
  <div class="osu relative mt-1 flex items-center justify-center">
    <img class="osu-bg" :src="background" alt="osu! Card" />
    <div class="px-2 osu-wrapper relative w-full flex justify-center -ml-2">
      <span class="absolute osu-rating z-20">{{ value }}pp</span>
      <span class="absolute osu-shadow z-10">{{ value }}pp</span>
    </div>
  </div>
</template>

<script setup>
import background from '/osu/card-small.svg';

defineProps({
  value: String
});
</script>

<style scoped>

.osu {
  width: 110px;
  height: 32px;
  font-size: 14px;
}

.osu-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.8;
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
</style>