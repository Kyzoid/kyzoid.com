<template>
  <div class="etterna-card flex items-center">
    <div class="flex flex-col items-end mr-2">
      <h2 class="text-lg font-medium">Kyzoid</h2>
      <span class="text-red-600 mb-1">{{ data.rating.global }}</span>
      <div class="flex items-center text-sm">
        <img :src="earth" width="16" alt="Earth icon" />
        <span class="ml-1">#{{ data.globalRank }}</span>
      </div>
      <div class="flex items-center text-sm">
        <img :src="flag" width="16" alt="France flag" />
        <span class="ml-1">#{{ data.countryRank }}</span>
      </div>
    </div>
    <img class="rounded shadow z-10" :src="avatar" width="123" alt="Avatar" />
    <div class="flex flex-col w-full">
      <div class="rating stream w-full mb-0.5" :style="`width: ${getPercent(data.rating.stream)}%`">
        <span class="text-xs font-medium pl-1 pb-0.5">{{ data.rating.stream }}</span>
      </div>
      <div class="rating jumpstream w-full mb-0.5" :style="`width: ${getPercent(data.rating.jumpstream)}%`">
        <span class="text-xs font-medium pl-1 pb-0.5">{{ data.rating.jumpstream }}</span>
      </div>
      <div class="rating handstream w-full mb-0.5" :style="`width: ${getPercent(data.rating.handstream)}%`">
        <span class="text-xs font-medium pl-1 pb-0.5">{{ data.rating.handstream }}</span>
      </div>
      <div class="rating stamina w-full mb-0.5" :style="`width: ${getPercent(data.rating.stamina)}%`">
        <span class="text-xs font-medium pl-1 pb-0.5">{{ data.rating.stamina }}</span>
      </div>
      <div class="rating jacks w-full mb-0.5" :style="`width: ${getPercent(data.rating.jacks)}%`">
        <span class="text-xs font-medium pl-1 pb-0.5">{{ data.rating.jacks }}</span>
      </div>
      <div class="rating chordjacks w-full mb-0.5" :style="`width: ${getPercent(data.rating.chordjacks)}%`">
        <span class="text-xs font-medium pl-1 pb-0.5">{{ data.rating.chordjacks }}</span>
      </div>
      <div class="rating technical w-full" :style="`width: ${getPercent(data.rating.technical)}%`">
        <span class="text-xs font-medium pl-1 pb-0.5">{{ data.rating.technical }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import avatar from "/etterna/avatar.jpg";
import earth from "/etterna/earth.png";
import flag from "/etterna/fr.svg";
import stats from '/src/stats.json';

const data = stats['etterna'];

const getPercent = (rating) => {
  const highestRating = data.rating.handstream;
  return rating/highestRating * 100;
}
</script>

<style scoped>
.rating {
  height: 14px;
  position: relative;
}

.rating > span {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(100%, -50%);
}

.stream {
  background-color: #7D6B91;
}

.jumpstream {
  background-color: #8481DB;
}

.handstream {
  background-color: #995FA3;
}

.stamina {
  background-color: #F2B5FA;
}

.jacks {
  background-color: #6C969D;
}

.chordjacks {
  background-color: #A5F8D3;
}

.technical {
  background-color: #B0CEC2;
}
</style>