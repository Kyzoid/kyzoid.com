<template>
  <div class="card">
    <img class="crew" :src="crew" alt="Crew" />
    <img class="card-bg w-full" :src="card" alt="Card background" />
    <img class="apcard" :src="apcard" alt="Card background" />
    <img class="dan" width="105" :src="dan" alt="Dan" />
    <div class="volforce flex items-end">
      <div class="flex flex-col item-center justify-center">
        <img width="44" :src="volforce" alt="Volforce" />
        <img class="volforce-force -mt-2" :src="`/sdvx/volforce/force/${force()}.png`" alt="Volforce stars">
      </div>
      <div class="flex flex-col">
        <span class="uppercase volforce-label tracking-wider">Volforce</span>
        <span class="-mt-1 tracking-wider">{{ data.rating }}</span>
      </div>
    </div>
    <span class="title">{{ data.title }}</span>
    <span class="name uppercase">{{ data.username }}</span>
  </div>
</template>

<script setup>
import crew from '/sdvx/crew.png';
import card from '/sdvx/card.png';
import apcard from '/sdvx/apcard.png';
import volforce from '/sdvx/volforce/6.png';
import dan from '/sdvx/dan/none.png';
import stats from '/src/stats.json';

const data = stats["SDVX"];
const force = () => {
  const decimals = data.rating.split('.').reverse()[0];
  if (decimals < 250 ) return 1;
  if (decimals < 500 ) return 2;
  if (decimals < 750 ) return 3;
  return 4;
}
</script>

<style scoped>
.volforce-label {
  font-size: 10px;
}

.volforce-force {
  height: 10px;
}

.crew {
  position: absolute;
  top: -5.5rem;
  right: -1rem;
}

.card {
  width: 388px;
}
.card-bg {
  opacity: 1;
  filter: drop-shadow(2px 2px 4px black);
}

.apcard {
  position: absolute;
  top: 1.9rem;
  left: 0.55rem;
  transform: scale(0.97);
}

.name {
  position: absolute;
  top: 5.55rem;
  left: 10rem;
  letter-spacing: 0.1em;
}

.title {
  position: absolute;
  top: 3.75rem;
  left: 10rem;
}

.dan {
  position: absolute;
  bottom: 2.1rem;
  left: 8.8rem;
}

.volforce {
  position: absolute;
  bottom: 1.75rem;
  right: 1.6rem;
}
</style>