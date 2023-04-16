<template>
  <div class="maimai-deluxe-card p-6 bg-white rounded-3xl text-black">
    <div class="flex items-start">
      <img class="hidden sm:block" :src="avatar" alt="Avatar" width="112">

      <div class="w-full flex flex-col ml-0 sm:ml-2">
        <div class="flex sm:flex-col">
          <img class="mr-2 block sm:hidden" :src="avatar" alt="Avatar" width="100">
          <div>
            <div class="relative trophy">
              <img class="absolute" :src="trophySilver" alt="Trophy silver">
              <span class="absolute text-white text-sm">{{ data.title }}</span>
            </div>

            <div class="flex mt-2 items-start flex-wrap sm:flex-nowrap">
              <span class="name bg-white border pl-2 py-0.5 pr-0 sm:pr-8 border-gray-300 rounded w-full mr-2">{{ data.username }}</span>
              <Rating :value="data.rating" />
            </div>
          </div>
        </div>

        <div class="border-dotted border-2 border-gray-300 my-2"></div>

        <div class="flex items-center justify-between">
          <img class="mr-2 rank-img" :src="`/maimai/course_rank_${data.courseRank}.png`" alt="Course rank" />
          <img class="rank-img" :src="`/maimai/class_rank_${data.classRank}.png`" alt="Class rank" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import avatar from '/maimai/avatar.png';
import Rating from './Rating.vue';
import trophySilver from '/maimai/trophy_silver.png';
import star from '/maimai/icon_star.png';
import stats from '/src/stats.json';

const data = stats["maimaiDeluxe"];
</script>

<style scoped>

.name {
  box-shadow: 1px 3px 0px rgb(0 0 0 / 40%);
  letter-spacing: 0.5em;
}

.rank-img {
  height: 35px;
}

.trophy {
  height: 24px;
}

.trophy img {
  height: 100%;
  width: 100%;
}

.trophy span {
  word-break: keep-all;
  text-shadow: black 1px 1px 0, black -1px -1px 0,
		black -1px 1px 0, black 1px -1px 0,
		black 0px 1px 0, black 0 -1px 0,
		black -1px 0 0, black 1px 0 0;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.maimai-deluxe-card {
  position: relative;
  box-shadow: 0.75rem 0.75rem 0px 0px rgb(0 0 0 / 20%);
}

.maimai-deluxe-card::before, .maimai-deluxe-card::after {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  height: 6px;
  
}

.maimai-deluxe-card::before {
  background-color: #ff8db0;
  top: 0;
  border-radius: 0 0 1rem 1rem;
}

.maimai-deluxe-card::after {
  background-color: #def447;
  bottom: 0;
  border-radius: 1rem 1rem 0 0;
}
</style>