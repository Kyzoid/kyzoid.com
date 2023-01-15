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
      <div class="bg-pipe">
        <div class="pipe i0"></div>
        <div class="pipe i1"></div>
        <div class="pipe i2"></div>
        <div class="pipe i3"></div>
        <div class="pipe i4"></div>
        <div class="pipe i5"></div>
        <div class="pipe i6"></div>
        <div class="pipe i7"></div>
        <div class="pipe i8"></div>
        <div class="pipe i9"></div>
        <div class="pipe i10"></div>
        <div class="pipe i11"></div>
        <div class="pipe i12"></div>
        <div class="pipe i13"></div>
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
  z-index: 10;
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
  z-index: 20;
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

.bg-pipe {
  height: 100%;
  width: 100%;
}

.pipe {
  display: block;
  position: absolute;
  background-color: #fed032;
  transform-origin: top left;
  box-shadow: 0 0 5px 0px #fed032;
  z-index: 0;
}

.pipe.i0 {
  width: 34rem;
  height: 4rem;
  animation: itemsBg-move-sp 60s linear infinite, itemsBg-opacity 60s infinite;
  left: 0%;
  top: -10%;
  animation-delay: -11s;
}

.pipe.i1 {
  width: 12rem;
  height: 3rem;
  animation: itemsBg-move-sp 60s linear infinite reverse, itemsBg-opacity 60s infinite;
  transform-origin: bottom left;
  left: 20%;
  top: -10%;
  animation-delay: -34s;
}

.pipe.i2 {
  width: 33rem;
  height: 2.5rem;
  animation: itemsBg-move-sp 60s linear infinite, itemsBg-opacity 60s infinite;
  left: 40%;
  top: -10%;
  animation-delay: -92s;
}

.pipe.i3 {
  width: 35rem;
  height: 3rem;
  animation: itemsBg-move-sp 60s linear infinite reverse, itemsBg-opacity 60s infinite;
  transform-origin: bottom left;
  left: 60%;
  top: -10%;
  animation-delay: -17s;
}

.pipe.i4 {
  width: 29rem;
  height: 2rem;
  animation: itemsBg-move-sp 60s linear infinite, itemsBg-opacity 60s infinite;
  left: 80%;
  top: -10%;
  animation-delay: -32s;
}

.pipe.i5 {
  width: 25rem;
  height: 3rem;
  animation: itemsBg-move-sp 60s linear infinite reverse, itemsBg-opacity 60s infinite;
  transform-origin: bottom left;
  left: 100%;
  top: -10%;
  animation-delay: -50s;
}

.pipe.i6 {
  width: 30rem;
  height: 3.5rem;
  animation: itemsBg-move-sp 60s linear infinite, itemsBg-opacity 60s infinite;
  left: 120%;
  top: -10%;
  animation-delay: -18s;
}

.pipe.i7 {
  width: 25rem;
  height: 4rem;
  animation: itemsBg-move-sp 60s linear infinite reverse, itemsBg-opacity 60s infinite;
  transform-origin: bottom left;
  left: 140%;
  top: -10%;
  animation-delay: -27s;
}

.pipe.i8 {
  width: 25rem;
  height: 4rem;
  animation: itemsBg-move-sp 60s linear infinite, itemsBg-opacity 60s infinite;
  left: 160%;
  top: -10%;
  animation-delay: -49s;
}

.pipe.i9 {
  width: 31rem;
  height: 4rem;
  animation: itemsBg-move-sp 60s linear infinite reverse, itemsBg-opacity 60s infinite;
  transform-origin: bottom left;
  left: 180%;
  top: -10%;
  animation-delay: -22s;
}

.pipe.i10 {
  width: 17rem;
  height: 3.5rem;
  animation: itemsBg-move-sp 60s linear infinite, itemsBg-opacity 60s infinite;
  left: 200%;
  top: -10%;
  animation-delay: -2s;
}

.pipe.i11 {
  width: 22rem;
  height: 4rem;
  animation: itemsBg-move-sp 60s linear infinite reverse, itemsBg-opacity 60s infinite;
  transform-origin: bottom left;
  left: 220%;
  top: -10%;
  animation-delay: -60s;
}

.pipe.i12 {
  width: 32rem;
  height: 4rem;
  animation: itemsBg-move-sp 60s linear infinite, itemsBg-opacity 60s infinite;
  left: 240%;
  top: -10%;
  animation-delay: -24s;
}

.pipe.i13 {
  width: 26rem;
  height: 3.5rem;
  animation: itemsBg-move-sp 60s linear infinite reverse, itemsBg-opacity 60s infinite;
  box-shadow: 0 0 5px 0px #fed032;
  transform-origin: bottom left;
  left: 260%;
  top: -10%;
  animation-delay: -34s;
}

.pipe.i0:before {
  content: "";
  display: block;
  width: 15rem;
  height: 2.5rem;
  background-color: #ec8e21;
  position: absolute;
  bottom: 65px;
  right: -20px;
  box-shadow: 0 0 5px 0px #ec8e21;
}

.pipe.i0:after {
  content: "";
  display: block;
  width: 17rem;
  height: 2px;
  background-color: #f8e231;
  position: absolute;
  top: 78px;
  left: -20px;
}

.pipe.i1:before {
  content: "";
  display: block;
  width: 19rem;
  height: 2.5rem;
  background-color: #ec8e21;
  position: absolute;
  bottom: 67px;
  right: -20px;
  box-shadow: 0 0 5px 0px #ec8e21;
}

.pipe.i1:after {
  content: "";
  display: block;
  width: 12rem;
  height: 2px;
  background-color: #f8e231;
  position: absolute;
  top: 78px;
  left: -20px;
}

.pipe.i2:before {
  content: "";
  display: block;
  width: 12rem;
  height: 2.5rem;
  background-color: #ec8e21;
  position: absolute;
  bottom: 69px;
  right: -20px;
  box-shadow: 0 0 5px 0px #ec8e21;
}

.pipe.i2:after {
  content: "";
  display: block;
  width: 11rem;
  height: 2px;
  background-color: #f8e231;
  position: absolute;
  top: 78px;
  left: -20px;
}

.pipe.i3:before {
  content: "";
  display: block;
  width: 18rem;
  height: 2.5rem;
  background-color: #ec8e21;
  position: absolute;
  bottom: 68px;
  right: -20px;
  box-shadow: 0 0 5px 0px #ec8e21;
}

.pipe.i3:after {
  content: "";
  display: block;
  width: 12rem;
  height: 2px;
  background-color: #f8e231;
  position: absolute;
  top: 77px;
  left: -20px;
}

.pipe.i4:before {
  content: "";
  display: block;
  width: 12rem;
  height: 2.5rem;
  background-color: #ec8e21;
  position: absolute;
  bottom: 68px;
  right: -20px;
  box-shadow: 0 0 5px 0px #ec8e21;
}

.pipe.i4:after {
  content: "";
  display: block;
  width: 16rem;
  height: 2px;
  background-color: #f8e231;
  position: absolute;
  top: 76px;
  left: -20px;
}

.pipe.i5:before {
  content: "";
  display: block;
  width: 20rem;
  height: 2.5rem;
  background-color: #ec8e21;
  position: absolute;
  bottom: 67px;
  right: -20px;
  box-shadow: 0 0 5px 0px #ec8e21;
}

.pipe.i5:after {
  content: "";
  display: block;
  width: 11rem;
  height: 2px;
  background-color: #f8e231;
  position: absolute;
  top: 77px;
  left: -20px;
}

.pipe.i6:before {
  content: "";
  display: block;
  width: 15rem;
  height: 2.5rem;
  background-color: #ec8e21;
  position: absolute;
  bottom: 67px;
  right: -20px;
  box-shadow: 0 0 5px 0px #ec8e21;
}

.pipe.i6:after {
  content: "";
  display: block;
  width: 17rem;
  height: 2px;
  background-color: #f8e231;
  position: absolute;
  top: 79px;
  left: -20px;
}

.pipe.i7:before {
  content: "";
  display: block;
  width: 18rem;
  height: 2.5rem;
  background-color: #ec8e21;
  position: absolute;
  bottom: 69px;
  right: -20px;
  box-shadow: 0 0 5px 0px #ec8e21;
}

.pipe.i7:after {
  content: "";
  display: block;
  width: 12rem;
  height: 2px;
  background-color: #f8e231;
  position: absolute;
  top: 77px;
  left: -20px;
}

.pipe.i8:before {
  content: "";
  display: block;
  width: 11rem;
  height: 2.5rem;
  background-color: #ec8e21;
  position: absolute;
  bottom: 66px;
  right: -20px;
  box-shadow: 0 0 5px 0px #ec8e21;
}

.pipe.i8:after {
  content: "";
  display: block;
  width: 16rem;
  height: 2px;
  background-color: #f8e231;
  position: absolute;
  top: 77px;
  left: -20px;
}

.pipe.i9:before {
  content: "";
  display: block;
  width: 17rem;
  height: 2.5rem;
  background-color: #ec8e21;
  position: absolute;
  bottom: 68px;
  right: -20px;
  box-shadow: 0 0 5px 0px #ec8e21;
}

.pipe.i9:after {
  content: "";
  display: block;
  width: 15rem;
  height: 2px;
  background-color: #f8e231;
  position: absolute;
  top: 75px;
  left: -20px;
}

.pipe.i10:before {
  content: "";
  display: block;
  width: 16rem;
  height: 2.5rem;
  background-color: #ec8e21;
  position: absolute;
  bottom: 67px;
  right: -20px;
  box-shadow: 0 0 5px 0px #ec8e21;
}

.pipe.i10:after {
  content: "";
  display: block;
  width: 13rem;
  height: 2px;
  background-color: #f8e231;
  position: absolute;
  top: 78px;
  left: -20px;
}

.pipe.i11:before {
  content: "";
  display: block;
  width: 19rem;
  height: 2.5rem;
  background-color: #ec8e21;
  position: absolute;
  bottom: 65px;
  right: -20px;
  box-shadow: 0 0 5px 0px #ec8e21;
}

.pipe.i11:after {
  content: "";
  display: block;
  width: 15rem;
  height: 2px;
  background-color: #f8e231;
  position: absolute;
  top: 75px;
  left: -20px;
}

.pipe.i12:before {
  content: "";
  display: block;
  width: 14rem;
  height: 2.5rem;
  background-color: #ec8e21;
  position: absolute;
  bottom: 69px;
  right: -20px;
  box-shadow: 0 0 5px 0px #ec8e21;
}

.pipe.i12:after {
  content: "";
  display: block;
  width: 11rem;
  height: 2px;
  background-color: #f8e231;
  position: absolute;
  top: 75px;
  left: -20px;
}

.pipe.i13:before {
  content: "";
  display: block;
  width: 15rem;
  height: 2.5rem;
  background-color: #ec8e21;
  position: absolute;
  bottom: 66px;
  right: -20px;
  box-shadow: 0 0 5px 0px #ec8e21;
}

.pipe.i13:after {
  content: "";
  display: block;
  width: 16rem;
  height: 2px;
  background-color: #f8e231;
  position: absolute;
  top: 77px;
  left: -20px;
}

.bg-effect {
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}

  @media only screen and (min-width: 769px) {
  .pipe.i0 {
    animation: itemsBg-move 80s linear infinite, itemsBg-opacity 80s infinite !important;
    animation-delay: -14s !important;
  }

  .pipe.i1 {
    animation: itemsBg-move 80s linear infinite, itemsBg-opacity 80s infinite !important;
    animation-delay: -58s !important;
  }

  .pipe.i2 {
    animation: itemsBg-move 80s linear infinite, itemsBg-opacity 80s infinite !important;
    animation-delay: -81s !important;
  }

  .pipe.i3 {
    animation: itemsBg-move 80s linear infinite, itemsBg-opacity 80s infinite !important;
    animation-delay: -88s !important;
  }

  .pipe.i4 {
    animation: itemsBg-move 80s linear infinite, itemsBg-opacity 80s infinite !important;
    animation-delay: -19s !important;
  }

  .pipe.i5 {
    animation: itemsBg-move 80s linear infinite, itemsBg-opacity 80s infinite !important;
    animation-delay: -70s !important;
  }

  .pipe.i6 {
    animation: itemsBg-move 80s linear infinite, itemsBg-opacity 80s infinite !important;
    animation-delay: -95s !important;
  }

  .pipe.i7 {
    animation: itemsBg-move 80s linear infinite, itemsBg-opacity 80s infinite !important;
    animation-delay: -67s !important;
  }

  .pipe.i8 {
    animation: itemsBg-move 80s linear infinite, itemsBg-opacity 80s infinite !important;
    animation-delay: -17s !important;
  }

  .pipe.i9 {
    animation: itemsBg-move 80s linear infinite, itemsBg-opacity 80s infinite !important;
    animation-delay: -36s !important;
  }

  .pipe.i10 {
    animation: itemsBg-move 80s linear infinite, itemsBg-opacity 80s infinite !important;
    animation-delay: -63s !important;
  }

  .pipe.i11 {
    animation: itemsBg-move 80s linear infinite, itemsBg-opacity 80s infinite !important;
    animation-delay: -45s !important;
  }

  .pipe.i12 {
    animation: itemsBg-move 80s linear infinite, itemsBg-opacity 80s infinite !important;
    animation-delay: -20s !important;
  }

  .pipe.i13 {
    animation: itemsBg-move 80s linear infinite, itemsBg-opacity 80s infinite !important;
    animation-delay: -40s !important;
  }
}

@keyframes itemsBg-opacity {
  0% {
    opacity: 0;
  }

  10% {
    opacity: 1;
  }

  90% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes itemsBg-move {
  0% {
    transform: translateX(500px) translateY(-500px) rotate(135deg) skewX(45deg);
  }

  100% {
    transform: translateX(-3500px) translateY(3500px) rotate(135deg) skewX(45deg);
  }
}

@keyframes itemsBg-move-sp {
  0% {
    transform: translateX(150vw) translateY(-50vh) rotate(135deg) skewX(45deg);
  }

  100% {
    transform: translateX(-300vw) translateY(150vh) rotate(135deg) skewX(45deg);
  }
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