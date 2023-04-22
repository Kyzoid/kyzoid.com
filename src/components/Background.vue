<template>
  <div class="w-full h-full">
    <div class="bg-effect">
      <div>
        <div class="square sq1"></div>
        <div class="square sq2"></div>
        <div class="square sq3"></div>
        <div class="square sq4"></div>
        <div class="square sq5"></div>
        <div class="square sq6"></div>
      </div>

      <div>
        <div class="square square-reverse sq7"></div>
        <div class="square square-reverse sq8"></div>
        <div class="square square-reverse sq9"></div>
        <div class="square square-reverse sq10"></div>
        <div class="square square-reverse sq11"></div>
      </div>
      <img class="moon" width="40" :src="Moon" alt="Moon">
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

      <div class="z-20 sun"></div>

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
  right: 8rem;
  filter: drop-shadow(0 0 25px #E8EFFA);
}

.sun {
  position: absolute;
  bottom: 6rem;
  left: 14rem;
  height: 4rem;
  width: 4rem;
  background: linear-gradient(to bottom, #DD5838, #CC772E);
  filter: drop-shadow(0 0 15px rgba(204,119,46, 0.2));
  border-radius: 100rem;
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
  display: none;
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

.square {
  position: absolute;
  z-index: 30;
  transform: rotate3D(1, 1, 0, 45deg) rotate3D(-1, 0, 0, 10deg);
}

.square.square-reverse {
  transform: rotate3D(-1, 1, 0, 45deg) rotate3D(1, 0, 0, 10deg);
}

.square.sq1 {
  background: linear-gradient(to right, #E6D1B8, #E1A48D);
  bottom: 7.9rem;
  left: 11.5rem;
  width: 4rem;
  height: 2.8rem;
}

.square.sq2 {
  background: linear-gradient(to right, #D7474F, #E0103C);
  bottom: 8rem;
  left: 10rem;
  width: 4rem;
  height: 0.7rem;

  filter: drop-shadow(0 0 4px rgba(224,16,60,0.2));
}

.square.sq3 {
  background: linear-gradient(to right, #329E75, #279165);
  bottom: 6rem;
  left: 4rem;
  width: 3rem;
  height: 1.5rem;

  filter: drop-shadow(0 0 4px rgba(50,158,117,0.2));
}

.square.sq4 {
  background: #C5C7C5;
  bottom: 2rem;
  left: 7rem;
  width: 2.3rem;
  height: 1.2rem;

  filter: drop-shadow(0 0 2px rgba(197,199,196,0.1));
}

.square.sq5 {
  background: linear-gradient(-45deg, #F6E6B2, #F2C38A);
  bottom: 16rem;
  left: 3rem;
  width: 1.6rem;
  height: 1rem;

  filter: drop-shadow(0 0 2px rgba(0,0,0,0.1));
}

.square.sq6 {
  background: linear-gradient(to right, #D87A40, #D15330);
  bottom: 4.8rem;
  left: 2.5rem;
  width: 5rem;
  height: 0.6rem;

  filter: drop-shadow(0 0 4px rgba(224,16,60,0.2));
}

.square.sq7 {
  display: none;
  background: linear-gradient(45deg, #C5440F, #D06427);
  top: 6rem;
  right: 18rem;
  width: 4rem;
  height: 3rem;
}

.square.sq8 {
  display: none;
  background: linear-gradient(to right, #FD8F52, #EF6147);
  top: 6.6rem;
  right: 17rem;
  width: 4rem;
  height: 0.6rem;
}

.square.sq9 {
  display: none;
  background: linear-gradient(to right, #FF5050, #FF1448);
  top: 12rem;
  right: 9rem;
  width: 3.5rem;
  height: 0.6rem;

  filter: drop-shadow(0 0 4px rgba(255,20,72,0.2));
}

.square.sq10 {
  display: none;
  background: linear-gradient(to right, #2CB581, #20A778);
  top: 12rem;
  right: 6rem;
  width: 2rem;
  height: 1.2rem;

  filter: drop-shadow(0 0 4px rgba(44,181,60,0.2));
}

.square.sq11 {
  display: none;
  background: linear-gradient(to bottom, #EFBD81, #F6F2B4);
  top: 4rem;
  right: 2rem;
  width: 0.5rem;
  height: 2rem;
}

@media (min-width: 768px) {
  .square.sq7, .square.sq8, .square.sq9, .square.sq10, .square.sq11 {
    display: block;
  }

  .moon {
    right: 10rem;
  }

  .sun {
    left: 14rem;
    bottom: 6rem;
  }

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

  .dark-buildings.db3, .dark-buildings.db4, .dark-buildings.db5, .dark-buildings.db6, .dark-buildings.db7 {
    display: block;
  }
}
</style>