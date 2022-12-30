<script setup>
import rating from '/maimai/rating_base_purple.png';
import avatar from '/maimai/avatar.png';
import trophySilver from '/maimai/trophy_silver.png';
import logo from '/maimai/kv_logo.png';
import courseRank from '/maimai/course_rank_1.png';
import classRank from '/maimai/class_rank_a4.png';
import star from '/maimai/icon_star.png';
</script>

<template>
  <div>
    <div class="bg-universe">
      <div class="bg-angle bg-angle-left"></div>

      <div class="bg-dots">
        <div class="dots-top"></div>
        <div class="dots-under"></div>
      </div>
      <div class="bg-bubble"></div>

      <div class="bg-angle bg-angle-right"></div>
    </div>

    <img :src="logo" width="200" alt="Maimai Deluxe Universe Plus" class="logo" />
    <div class="card p-6 bg-white rounded-3xl text-black">

      <div class="card-wrapper flex items-start">
        <img :src="avatar" alt="Avatar" width="112">

        <div class="w-72 flex flex-col shrink-0 ml-2">
          <div class="relative trophy">
            <img class="absolute" :src="trophySilver" alt="Trophy silver">
            <span class="absolute text-white text-sm">ぱないの！</span>
          </div>

          <div class="flex mt-2 items-start">
            <span class="name bg-white border pl-1 py-0.5 border-gray-300 rounded w-full mr-2">Ｋｙｚｏｉｄ</span>
            <div class="relative rating shrink-0">
              <img class="absolute" :src="rating" alt="Rating purple">
              <span class="absolute font-bold text-sm">10103</span>
            </div>
          </div>

          <div class="border-dotted border-2 border-gray-300 my-2"></div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <img class="mr-2 rank-img" :src="courseRank" alt="Course rank" />
              <img class="rank-img" :src="classRank" alt="Class rank" />
            </div>
            <div class="flex items-center">
              <img class="mr-1" width="24" :src="star" alt="Star" />
              <span>×35</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  position: fixed;
  top: 1rem;
  right: 1rem;
}

.name {
  box-shadow: 1px 3px 0px rgb(0 0 0 / 40%);
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0.75rem 0.75rem 0px 0px rgb(0 0 0 / 20%);
}

.card-wrapper {
  position: relative;
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

@keyframes dotrunning {
  from {
    background-position-x: 800px;
  }

  to {
    background-position-x: -800px;
  }
}

.bg-universe {
  background-color: rgb(87, 192, 255);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 0;
}

.bg-dots {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: contain;
  z-index: -1;
}

.bg-dots>div {
  position: fixed;
  background-repeat: repeat-x;
  animation: 20s linear infinite dotrunning;
  opacity: 0.5;
}

.dots-under {
  bottom: 0px;
  min-width: 100%;
  height: 45%;
  background-repeat: repeat-x;
  background-image: url("/maimai/dot_bottom.png");
  background-position: 0px 0px;
}

.dots-top {
  top: 0px;
  min-width: 99.8%;
  height: 22%;
  background: url("/maimai/dot_top.png") 0px 100%;
}

.bg-angle {
  position: fixed;
  height: 53.625vw;
  width: 53.625vw;
}

.bg-angle-left {
  background: url("/maimai/angle_left.png");
  left: 0;
  top: 0;
  background-repeat: no-repeat;
  background-size: 100%;
}

.bg-angle-right {
  background: url("/maimai/angle_right.png");
  right: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-size: 100%;
}

.bg-bubble {
  position: fixed;
  background: url("/maimai/bubble_center.png");
  top: 50%;
  /* width: 100%; */
  /* height: 80vw; */
  transform: translateY(-50%);
  background-repeat: no-repeat;
}

@media only screen and (min-width: 769px) {
  .bg-angle {
    width: 429px;
    height: 429px;
  }

  .bg-angle-right {
    background: url("/maimai/angle_right_pc.png");
    background-size: 100%;
  }

  .bg-angle-left {
    background: url("/maimai/angle_left_pc.png");
    background-size: 100%;
  }
}
</style>
