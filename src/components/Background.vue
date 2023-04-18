<template>
  <div class="w-full h-full">
    <div class="bg-effect">
      <div class="bg-shape">
        <div class="shape square s1"></div>
      </div>
      <img class="moon" width="50" :src="Moon" alt="Moon">
      <img class="star s1" :src="Star" alt="Star">
      <img class="star s2" :src="Star" alt="Star">
      <img class="star s3" :src="Star" alt="Star">
      <img class="star s4" :src="Star" alt="Star">
      <img class="star s5" :src="Star" alt="Star">
      <img class="star s6" :src="Star" alt="Star">

      <img class="star star-xs sxs1" :src="Star" alt="Star XS">
      <img class="star star-xs sxs2" :src="Star" alt="Star XS">
      <img class="star star-xs sxs3" :src="Star" alt="Star XS">
      <img class="star star-xs sxs4" :src="Star" alt="Star XS">
      <img class="star star-xs sxs5" :src="Star" alt="Star XS">
      <img class="star star-xs sxs6" :src="Star" alt="Star XS">
      <img class="star star-xs sxs7" :src="Star" alt="Star XS">
      <img class="star star-xs sxs8" :src="Star" alt="Star XS">

      <div>
        <img class="line l1" :src="Line" alt="Line">
        <img class="line l2" :src="Line" alt="Line">
        <img class="line l3" :src="Line" alt="Line">
      </div>

      <div>
        <img class="line l4" :src="Line" alt="Line">
        <img class="line l5" :src="Line" alt="Line">
        <img class="line l6" :src="Line" alt="Line">
        <img class="line l7" :src="Line" alt="Line">
      </div>
    </div>
  </div>
</template>

<script setup>
import Moon from '/moon.svg';
import Star from '/star.svg';
import Line from '/line.svg';

defineProps({
  mode: String
});
</script>

<style scoped>
.moon {
  position: absolute;
  top: 3rem;
  right: 10%;
  filter: drop-shadow(0 0 25px #E8EFFA);
}

.star {
  width: 15px;
  height: 15px;
  position: absolute;
  filter: drop-shadow(0 0 10px rgba(232,239,250, 0.8));
}

.line {
  position: absolute;
  filter: drop-shadow(0 0 10px #1A3E7A);
}

.line.l1 {
  top: 10%;
  left: -12%;
  opacity: 0.5;
}

.line.l2 {
  top: 0;
  left: -5%;
  opacity: 1;
}

.line.l3 {
  top: -1%;
  left: -1%;
  opacity: 0.2;
}

.line.l4 {
  bottom: -6%;
  right: 20%;
  opacity: 0.15;
}

.line.l5 {
  bottom: 22%;
  right: -10%;
  opacity: 0.2;
}

.line.l6 {
  bottom: -4%;
  right: 0%;
}

.line.l7 {
  bottom: -10%;
  right: 0%;
  opacity: 0.5;
}

.star.star-xs {
  width: 5px;
  height: 5px;
  opacity: 0.4;
}

.star.s1 {
  top: 6rem;
  right: 25%;
  opacity: 0.7;
  width: 18px;
  height: 18px;
}

.star.s2 {
  top: 50%;
  right: 10%;
  opacity: 0.4;
  width: 10px;
  height: 10px;
}

.star.s3 {
  top: 60%;
  left: 10%;
  opacity: 0.9;
}

.star.s4 {
  top: 30%;
  left: 30%;
  opacity: 0.5;
  width: 8px;
  height: 8px;
}

.star.s5 {
  bottom: 5%;
  left: 38%;
  opacity: 0.5;
  width: 12px;
  height: 12px;
}

.star.s6 {
  top: 70%;
  left: 65%;
  opacity: 0.6;
  width: 11px;
  height: 11px;
}

.star.star-xs.sxs1 {
  top: 2rem;
  left: 4rem;
}

.star.star-xs.sxs2 {
  top: 58%;
  left: 15%;
}

.star.star-xs.sxs3 {
  top: 4rem;
  left: 50%;
}

.star.star-xs.sxs4 {
  bottom: 2rem;
  right: 4rem;
}

.star.star-xs.sxs5 {
  bottom: 3%;
  left: 40%;
}

.star.star-xs.sxs6 {
  top: 29%;
  left: 20%;
}

.star.star-xs.sxs7 {
  bottom: 8%;
  left: 55%;
}

.star.star-xs.sxs8 {
  bottom: 9%;
  left: 58%;
}

.bg-effect {
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  display: block;
  transform-origin: center;
  z-index: 20;
}

.shape.square.s1 {
  background-color: #EEBC87;
}
</style>