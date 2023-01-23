<template>
  <div class="sdvx-card relative">
    <img class="card-bg w-full" :src="frame" alt="Card background" />
    <img class="apcard" :src="apcard" width="100" alt="Card background" />
    <img class="dan" width="105" :src="`/sdvx/dan/${data.dan}.png`" alt="Dan" />
    <div class="volforce flex items-end">
      <div class="flex flex-col item-center justify-center -mt-0.5 mr-1">
        <img width="40" :src="`/sdvx/volforce/${volforce()}.png`" :alt="`Volforce ${volforce()}`" />
        <img class="volforce-force" :src="`/sdvx/volforce/force/${force()}.png`" alt="Volforce stars">
      </div>
      <div class="flex flex-col">
        <span class="uppercase volforce-label tracking-widest">Volforce</span>
        <span class="-mt-1 tracking-wider font-medium">{{ data.rating }}</span>
      </div>
    </div>
    
    <span class="title">{{ data.title }}</span>
    <span class="name uppercase font-medium">{{ data.username }}</span>
    <span class="id uppercase">{{ data.id }}</span>
  </div>
  
</template>

<script setup>
import apcard from '/sdvx/apcard.png';
import stats from '/src/stats.json';
import frame from '/sdvx/frame.svg';

const data = stats["SDVX"];
const force = () => {
  const decimals = data.rating.split('.').reverse()[0];
  if (decimals < 250 ) return 1;
  if (decimals < 500 ) return 2;
  if (decimals < 750 ) return 3;
  return 4;
}

const volforce = () => {
  const value = Number(data.rating);
  if (value <= 17) return 6;
  if (value <= 18) return 7;
  if (value <= 19) return 8;
  if (value <= 20) return 9;
  return 10;
}
</script>

<style scoped>
.volforce-label {
  font-size: 10px;
}

.volforce-force {
  height: 10px;
}

.sdvx-card {
  width: 450px;
}
.card-bg {
  opacity: 1;
  filter: drop-shadow(2px 2px 4px black);
}

.apcard {
  position: absolute;
  top: 1.96rem;
  left: 1.75rem;
  transform: scale(0.97);
}

.name {
  position: absolute;
  top: 3.85rem;
  left: 9.5rem;
  letter-spacing: 0.1em;
}

.id {
  position: absolute;
  top: 5.45rem;
  left: 9.55rem;
  letter-spacing: 0.1em;
}

.title {
  position: absolute;
  top: 2.15rem;
  left: 9.4rem;
}

.dan {
  position: absolute;
  bottom: 2.5rem;
  left: 9.4rem;
}

.volforce {
  position: absolute;
  bottom: 2.2rem;
  right: 4.2rem;
}
</style>