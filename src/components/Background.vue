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
        <img class="z-20 line l1" :src="Line" alt="Line">
        <img class="z-20 line l2" :src="Line" alt="Line">
        <img class="z-20 line l3" :src="Line" alt="Line">
      </div>

      <div>
        <img class="z-20 line l4" :src="Line" alt="Line">
        <img class="z-20 line l5" :src="Line" alt="Line">
        <img class="z-20 line l6" :src="Line" alt="Line">
        <img class="z-20 line l7" :src="Line" alt="Line">
      </div>

      <div class="footer">
        <img class="z-10 dark-buildings db1" width="100" :src="DarkBuildings" alt="Dark buildings">
        <img class="z-10 dark-buildings db2" width="80" :src="DarkBuildings" alt="Dark buildings">
        <img class="z-10 dark-buildings db3" width="80" :src="DarkBuildings" alt="Dark buildings">
        <img class="z-10 dark-buildings db4" width="80" :src="DarkBuildings" alt="Dark buildings">

        <img class="z-10 dark-buildings db5" width="80" :src="DarkBuildings" alt="Dark buildings">
        <img class="z-10 dark-buildings db6" width="80" :src="DarkBuildings" alt="Dark buildings">
        <img class="z-10 dark-buildings db7" width="100" :src="DarkBuildings" alt="Dark buildings">
      </div>
    </div>
  </div>
</template>

<script setup>
import Moon from '/moon.svg';
import Star from '/star.svg';
import Line from '/line.svg';
import DarkBuildings from '/dark-buildings.svg';

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

.building {
  position: absolute;
  bottom: -2rem;
  right: 1rem;
  opacity: 1;
}

.dark-buildings {
  position: absolute;
}

.dark-buildings.db1 {
  bottom: -1rem;
  right: 2rem;
  opacity: 0.4;
}

.dark-buildings.db2 {
  bottom: -3rem;
  right: 12rem;
  opacity: 0.3;
}

.dark-buildings.db3 {
  display: none;
  bottom: -4rem;
  right: 22rem;
  opacity: 0.2;
}

.dark-buildings.db4 {
  display: none;
  bottom: -6rem;
  right: 26rem;
  opacity: 0.1;
}


.dark-buildings.db7 {
  bottom: -1rem;
  left: 2rem;
  opacity: 0.4;
  transform: scaleX(-1);
}

.dark-buildings.db6 {
  display: none;
  bottom: -3rem;
  left: 12rem;
  opacity: 0.3;
  transform: scaleX(-1);
}

.dark-buildings.db5 {
  display: none;
  bottom: -4rem;
  left: 22rem;
  opacity: 0.2;
  transform: scaleX(-1);
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
  top: 2rem;
  left: -21rem;
  opacity: 0.5;
}

.line.l2 {
  top: 0rem;
  left: -17rem;
  opacity: 1;
}

.line.l3 {
  top: 0rem;
  left: -12rem;
  opacity: 0.2;
}

.line.l4 {
  bottom: -18rem;
  right: 11rem;
  opacity: 0.15;
}

.line.l5 {
  bottom: 4rem;
  right: -22rem;
  opacity: 0.2;
}

.line.l6 {
  bottom: -16rem;
  right: 0rem;
}

.line.l7 {
  bottom: -12rem;
  right: 0rem;
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

@media (min-width: 768px) {
  .line.l1 {
    top: 8rem;
    left: -18rem;
  }

  .line.l2 {
    top: 0rem;
    left: -7rem;
  }

  .line.l3 {
    top: -1rem;
    left: -1rem;
  }

  .line.l4 {
    bottom: -10rem;
    right: 22rem;
  }

  .line.l5 {
    bottom: 14rem;
    right: -10rem;
  }

  .line.l6 {
    bottom: -2rem;
    right: 0rem;
  }

  .line.l7 {
    bottom: -6rem;
    right: 0rem;
  }

  .dark-buildings.db3 {
    display: block;
  }
  .dark-buildings.db4 {
    display: block;
  }
  .dark-buildings.db6 {
    display: block;
  }
  .dark-buildings.db5 {
    display: block;
  }
  }
</style>