<template>
  <div class="background w-full h-full">
    <div class="bg-effect">
      <div class="bg-flag">
        <div class="flag top-left">
          <span class="triangle ef1"></span>
          <span class="triangle ef2"></span>
        </div>
        <div class="flag top-left2">
          <span class="triangle ef1_r"></span>
          <span class="triangle ef2_r"></span>
        </div>
        <div class="flag bottom-right">
          <span class="triangle ef1"></span>
          <span class="triangle ef2"></span>
        </div>
        <div class="flag bottom-right2">
          <span class="triangle ef1_r"></span>
          <span class="triangle ef2_r"></span>
        </div>
      </div>
      <div class="bg-shape">
        <div class="shape square i1"></div>
        <div class="shape square i2"></div>
        <div class="shape gem i1"></div>
        <div class="shape gem i2"></div>
        <div class="shape gem i3"></div>
        <div class="shape gem i4"></div>
        <div class="shape gem i5"></div>
        <div class="shape gem i6"></div>
        <div class="shape triangle i1"></div>
        <div class="shape triangle i2"></div>
        <div class="shape triangle i3"></div>
        <div class="shape triangle i4"></div>
        <div class="shape triangle i5"></div>
        <div class="shape triangle i6"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  mode: String
});
</script>

<style scoped>
.background {
  background: linear-gradient(180deg, #fffe58 0, #f3a607 calc(100% - 50%));
  position: relative;
  overflow: hidden;
}

.background:before {
  content: "";
  display: block;
  position: absolute;
  background-image: url("/chunithm/bg_top.png");
  background-repeat: no-repeat;
  background-size: 100% auto;
  width: 250px;
  height: 300px;
  top: -150px;
  left: -80px;
}

.background:after {
  content: "";
  display: block;
  position: absolute;
  background-image: url("/chunithm/bg_bottom.png");
  background-repeat: no-repeat;
  background-size: 100% auto;
  width: 250px;
  height: 300px;
  bottom: -7px;
  right: 0px;
}

.flag {
  display: block;
  position: absolute;
}

.flag.top-left {
  top: 0rem;
  left: 10rem;
  width: 1436px;
  height: 20.34px;
  transform-origin: top left;
  transform: rotate(135deg);
}

.flag.top-left2 {
  top: 10rem;
  left: 2rem;
  width: 1436px;
  height: 10.17px;
  transform-origin: top left;
  transform: rotate(135deg);
  filter: brightness(1.5);
}

.flag.bottom-right {
  bottom: 18.55rem;
  right: -10rem;
  width: 1436px;
  transform: rotate(-45deg);
  height: 20.34px;
  transform-origin: bottom right;
}

.flag.bottom-right2 {
  bottom: 63.6rem;
  width: 1436px;
  right: -52rem;
  transform: rotate(-45deg);
  height: 10.17px;
  filter: brightness(1.5);
  transform-origin: bottom right;
}

.flag .triangle {
  display: block;
  position: absolute;
  top: 0;
  width: 1436px;
  height: 20.34px;
  background-image: url("/chunithm/triangle.svg");
  background-size: 100% auto;
  background-repeat: no-repeat;
}

.flag .ef1 {
  animation: flag-move 80s linear infinite;
}

.flag .ef2 {
  animation: flag-move 80s -40s linear infinite;
}

.flag .ef1_r {
  animation: flag-move2 60s linear infinite reverse;
}

.flag .ef2_r {
  animation: flag-move2 60s -30s linear infinite reverse;
}

.shape {
  display: block;
  position: absolute;
  opacity: 0.8;
  transform-origin: center;
}

.shape.square {
  animation: shape-rotate 8s infinite linear reverse;
  background-size: auto auto;
  background-color: transparent;
  background-image: repeating-linear-gradient(45deg, transparent, transparent 5px, #fff 5px, #fff 10px);
}

.shape.square.i1 {
  height: 3rem;
  width: 3rem;
  top: 110px;
  left: -20px;
}

.shape.square.i2 {
  height: 3rem;
  width: 3rem;
  top: 75%;
  left: 90%;
}

.shape.gem {
  background-size: auto auto;
  border-bottom: solid 3px #ffe832;
  border-right: solid 3px #ffe832;
  border-top: solid 3px #f4e331;
  border-left: solid 3px #f4e331;
  box-shadow: 2px 2px 0px #e3a825;
  background-color: transparent;
  opacity: 0.9;
  background-image: repeating-linear-gradient(45deg, #fffce1 13%, #fffce1 13%, #fff025 30%, #fff025 30%, #fffce1 36%, #fffce1 56%, #fff01f 57%, #fff01f 69%, #fffce1 70%, #fffce1 73%, #fcf448 73%, #fcf448 83%, #fcf448 84%, #fcf448 89%, #fffce1 90%, #fffce1 90%, #FFFAA7 100%);
  animation: shape-rotate 14s infinite linear reverse;
}

.shape.gem.i1 {
  width: 5rem;
  height: 5rem;
  top: 350px;
  left: -20px;
}

.shape.gem.i2 {
  display: none;
}

.shape.gem.i3 {
  width: 2rem;
  height: 2rem;
  top: 238px;
  left: 151px;
}

.shape.gem.i4 {
  width: 5rem;
  height: 5rem;
  bottom: 11px;
  left: 95%;
}

.shape.gem.i5 {
  width: 3rem;
  height: 3rem;
  top: 376px;
  left: 91%;
}

.shape.gem.i6 {
  display: none;
}

.shape.triangle {
  clip-path: polygon(0 0, 0% 100%, 100% 50%);
  background-size: auto auto;
  background-image: repeating-linear-gradient(45deg, transparent, transparent 4px, #fffa7a 4px, #fffa7a 8px);
}

.shape.triangle.i1 {
  animation: shape-rotate 14s infinite linear reverse;
  background-color: #7fee37;
  width: 1.8rem;
  height: 2.3rem;
  top: 10px;
  left: 90px;
}

.shape.triangle.i2 {
  display: none;
}

.shape.triangle.i3 {
  display: none;
}

.shape.triangle.i4 {
  animation: shape-rotate 14s infinite linear;
  top: 67%;
  left: 73%;
  background-color: #f796b3;
  width: 2.3rem;
  height: 2.8rem;
}

.shape.triangle.i5 {
  animation: shape-rotate 14s infinite linear reverse;
  top: 78%;
  left: 17%;
  background-color: #02d3ff;
  width: 1.8rem;
  height: 2.3rem;
}

.shape.triangle.i6 {
  animation: shape-rotate 14s infinite linear reverse;
  top: 87px;
  left: 62%;
  background-color: #c5abcd;
  width: 4.2rem;
  height: 4.7rem;
}

.bg-effect {
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}

@keyframes shape-rotate {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes flag-move {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
  }
}

@keyframes flag-move2 {
  0% {
    transform: translateX(0%) scale(0.5);
  }

  100% {
    transform: translateX(-100%) scale(0.5);
  }
}
</style>