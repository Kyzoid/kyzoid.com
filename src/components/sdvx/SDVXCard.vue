<template>
  <div class="sdvx-card relative">
    <img class="hidden sm:block card-bg w-full" :src="frame" alt="Card background" />
    <img class="block sm:hidden card-bg w-full" :src="frameMobile" alt="Card background" />
    <img class="apcard hidden sm:block" :src="apcard" alt="Card background" />
    <img class="dan" width="105" :src="`/sdvx/dan/${data.dan}.png`" alt="Dan" />
    <div class="volforce flex items-end">
      <div class="flex flex-col item-center justify-center -mt-0.5 mr-1">
        <img width="40" :src="`/sdvx/volforce/${volforce()}.png`" :alt="`Volforce ${volforce()}`" />
        <img class="volforce-force -mt-1" :src="`/sdvx/volforce/force/${force()}.png`" alt="Volforce stars">
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
import frameMobile from '/sdvx/frame_mobile.svg';

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
  width: 290px;
}
.card-bg {
  opacity: 1;
  filter: drop-shadow(2px 2px 4px black);
}

.apcard {
  position: absolute;
  top: -70%;
  left: 50%;
  width: 112px;
  transform: translateX(-50%);
}

.name {
  position: absolute;
  top: 3.4rem;
  left: 1.8rem;
  letter-spacing: 0.1em;
}

.id {
  position: absolute;
  top: 5rem;
  left: 1.8rem;
  letter-spacing: 0.1em;
}

.title {
  position: absolute;
  top: 1.7rem;
  left: 1.8rem;
}

.dan {
  position: absolute;
  bottom: 1.95rem;
  left: 1.8rem;
}

.volforce {
  position: absolute;
  bottom: 1.7rem;
  right: 2.15rem;
}

@media (min-width: 640px) {
  .sdvx-card {
    width: 450px;
  }

  .name {
    top: 3.85rem;
    left: 9.5rem;
  }

  .id {
    top: 5.45rem;
    left: 9.55rem;
  }

  .title {
    top: 2.15rem;
    left: 9.4rem;
  }
  .dan {
    bottom: 2.5rem;
    left: 9.4rem;
  }
  .volforce {
    bottom: 2.3rem;
    right: 4.2rem;
  }

  .apcard {
    top: 1.96rem;
    left: 4.9rem;
    width: 100px;
  }
}
</style>