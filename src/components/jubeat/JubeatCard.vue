<template>
  <div class="profile  font-semibold flex items-center p-4">
    <img class="-ml-4" :src="emblem" width="150" alt="Emblem" />
    <div class="w-44">
      <span class="text-xs">初めまして</span>
      <h2 class="uppercase username font-bold text-xl">{{  data.username  }}</h2>
      <div class="separator mt-4 mb-2"></div>
      <div class="flex justify-between items-center">
        <span class="text-sm">Jubility</span>
        <span class="text-lg">{{ data.rating }}</span>
      </div>
      <div class="flex justify-between items-center">
        <span class="text-sm">Play count</span>
        <span class="text-lg">{{ data.playCount }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import emblem from '/jubeat/emblem.png';

const data = {
  username: 'Kyzoid',
  rating: 2377.1,
  playCount: 83
}
</script>

<style scoped>
.profile {
  color: #eaffff;
  width: max-content;
  border-radius: 40px;
  border: solid 6px #fff;
  background: url('/jubeat/mark.png') no-repeat left 10px bottom 10px , linear-gradient(to right, rgba(145,176,185,.5), rgba(83,134,148,.5));
  box-shadow: 0 0 1px #43c2cf, 0 0 1px #43c2cf, 0 0 1px #43c2cf, 0 0 2px #43c2cf, 0 0 4px #43c2cf, 0 0 6px #43c2cf, 0 0 1px #43c2cf inset, 0 0 5px #43c2cf inset, 0 0 8px #43c2cf inset, 0 0 8px #43c2cf inset, 0 0 10px #2b2e2e inset, 0 0 20px #2b2e2e inset;
}

.separator {
  box-shadow: 0 0 1px #2f6c77, 0 0 2px #2f6c77, 0 0 4px #2f6c77, 0 0 6px #2f6c77, 0 0 8px #2f6c77, 0 0 10px #2f6c77;
  background-color: #6f7576;
  height: 1px;
  width: 100%;
}

.username {
  background: linear-gradient(to top, #89ffd4, #5cedff);
  background-clip: text;
  color: transparent;
  line-height: 1;
  letter-spacing: 2px;
}
</style>