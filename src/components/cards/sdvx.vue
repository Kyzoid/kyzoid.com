<template>
  <div class="sdvx mt-0.5 relative flex items-center">
    <img class="sdvx-bg" :src="background" alt="SDVX background" />
    <img class="sdvx-icon" width="28" :src="`/sdvx/volforce/${volforce(value)}.png`" :alt="`Volforce ${volforce(value)}`" />
    <img class="sdvx-stars" :src="`/sdvx/volforce/force/rounded/${volforceStars(value)}.png`" alt="Volforce stars">
    <span class="sdvx-rating font-medium">{{ value }}</span>
  </div>
</template>

<script setup>
import background from '/sdvx/card-small.svg';

defineProps({
  value: String
});

const volforceStars = (rating) => {
  const decimals = rating.toString().split('.').reverse()[0];
  if (decimals < 250 ) return 1;
  if (decimals < 500 ) return 2;
  if (decimals < 750 ) return 3;
  return 4;
}

const volforce = (rating) => {
  const value = Number(rating);
  if (value <= 17) return 6;
  if (value <= 18) return 7;
  if (value <= 19) return 8;
  if (value <= 20) return 9;
  return 10;
}
</script>

<style scoped>
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
</style>