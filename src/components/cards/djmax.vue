<template>
  <div class="relative dj-rating shrink-0">
    <img class="absolute" :src="card" alt="Rating background">
    <div class="h-full flex items-center justify-center -translate-y-[2px]">
      <img class="z-10 mr-2" :src="rating" width="18" alt="Rating icon">
      <div class="z-10 flex items-baseline justify-center text-sm font-medium rating-color">
        <span>{{ value.split('.')[0] }}</span>
        <span>.</span>
        <span class="text-xs opacity-50">{{ value.split('.')[1] }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import card from '/djmax/card.svg';
import rating from '/djmax/rating-high-class-iii.png';

defineProps({
  value: String
});
</script>

<style scoped>
.rating-color {
  color: #FFBE00;
}

.dj-rating {
  width: 110px;
  height: 32px;
}
</style>