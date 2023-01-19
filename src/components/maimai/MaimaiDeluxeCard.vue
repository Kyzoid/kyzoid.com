<template>
  <div class="card p-6 bg-white rounded-3xl text-black flex items-start">
    <img :src="avatar" alt="Avatar" width="112">

    <div class="w-72 flex flex-col shrink-0 ml-2">
      <div class="relative trophy">
        <img class="absolute" :src="trophySilver" alt="Trophy silver">
        <span class="absolute text-white text-sm">{{ data.title }}</span>
      </div>

      <div class="flex mt-2 items-start">
        <span class="name bg-white border pl-2 py-0.5 border-gray-300 rounded w-full mr-2">{{ data.username }}</span>
        <div class="relative rating shrink-0">
          <img class="absolute" :src="rating" alt="Rating purple">
          <span class="absolute font-bold text-sm">{{ data.rating }}</span>
        </div>
      </div>

      <div class="border-dotted border-2 border-gray-300 my-2"></div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <img class="mr-2 rank-img" :src="`/maimai/course_rank_${data.courseRank}.png`" alt="Course rank" />
          <img class="rank-img" :src="`/maimai/class_rank_${data.classRank}.png`" alt="Class rank" />
        </div>
        <div class="flex items-center">
          <img class="mr-1" width="24" :src="star" alt="Star" />
          <span>×35</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import rating from '/maimai/rating_base_purple.png';
import avatar from '/maimai/avatar.png';
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

.rating {
  width: 110px;
  height: 32px;
}

.rating img {
  height: 100%;
  width: 100%;
}

.rating span {
  top: 50%;
  transform: translateY(-50%);
  right: 0.25rem;
  letter-spacing: 0.25em;
  color: #FFDA01;
  text-shadow: rgba(0, 0, 0, 0.2) 1px 1px 0, rgba(0, 0, 0, 0.2) -1px -1px 0,
  rgba(0, 0, 0, 0.2) -1px 1px 0, rgba(0, 0, 0, 0.2) 1px -1px 0,
		rgba(0, 0, 0, 0.2) 0px 1px 0, rgba(0, 0, 0, 0.2) 0 -1px 0,
		rgba(0, 0, 0, 0.2) -1px 0 0, rgba(0, 0, 0, 0.2) 1px 0 0;
}

.trophy {
  width: 100%;
  height: 24px;
}

.trophy img {
  height: 100%;
  width: 100%;
}

.trophy span {
  text-shadow: black 1px 1px 0, black -1px -1px 0,
		black -1px 1px 0, black 1px -1px 0,
		black 0px 1px 0, black 0 -1px 0,
		black -1px 0 0, black 1px 0 0;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card {
  position: relative;
  box-shadow: 0.75rem 0.75rem 0px 0px rgb(0 0 0 / 20%);
}

.card::before, .card::after {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  height: 6px;
  
}

.card::before {
  background-color: #ff8db0;
  top: 0;
  border-radius: 0 0 1rem 1rem;
}

.card::after {
  background-color: #def447;
  bottom: 0;
  border-radius: 1rem 1rem 0 0;
}
</style>