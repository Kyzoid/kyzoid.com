<template>
  <div class="card">
    <img class="card-bg w-full" :src="card" alt="Card background" />
    <img class="apcard" :src="apcard" alt="Card background" />
    <img class="dan" width="105" :src="dan" alt="Dan" />
    <div class="volforce flex items-center">
      <img  width="50" :src="volforce" alt="Volforce" />
      <div class="flex flex-col">
        <span class="uppercase text-xs">Volforce</span>
        <span class="">16.016</span>
      </div>
    </div>
    <span class="name uppercase">Kyzoid</span>
  </div>
</template>

<script setup>
import card from '/sdvx/card.png';
import apcard from '/sdvx/apcard.png';
import volforce from '/sdvx/volforce/6.png';
import dan from '/sdvx/dan/none.png';
</script>

<style scoped>
.card {
  width: 388px;
}
.card-bg {
  opacity: 0.8;
  filter: drop-shadow(1px 1px 4px black);
}

.apcard {
  position: absolute;
  top: 1.9rem;
  left: 0.55rem;
  transform: scale(0.97);
}

.name {
  position: absolute;
  top: 3.8rem;
  left: 10rem;
  letter-spacing: 0.1em;
}

.dan {
  position: absolute;
  bottom: 2.1rem;
  left: 8.8rem;
}

.volforce {
  position: absolute;
  bottom: 1.45rem;
  right: 1.3rem;
}
</style>