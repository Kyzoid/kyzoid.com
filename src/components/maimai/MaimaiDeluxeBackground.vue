<template>
  <div class="bg-universe">
    <div class="bg-angle bg-angle-left" :class="[(mode === 'page') ? 'bg-angle-full' : 'bg-angle-compact']"></div>

    <div class="bg-dots">
      <div class="dots-top"></div>
      <div class="dots-under"></div>
    </div>

    <div class="bg-angle bg-angle-right" :class="[(mode === 'page') ? 'bg-angle-full' : 'bg-angle-compact']"></div>
  </div>
</template>

<script setup>
defineProps({
  mode: String
});
</script>

<style scoped>
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
  top: 0px;
  left: 0px;
  z-index: -1;
}

.bg-dots {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: contain;
  z-index: 0;
}

.bg-dots>div {
  position: absolute;
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
  position: absolute;
  z-index: 1;
}

.bg-angle-full {
  height: 53.625vw;
  width: 53.625vw;
}

.bg-angle-compact {
  height: 6rem;
  width: 6rem;
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

@media only screen and (min-width: 769px) {
  .bg-angle-full {
    width: 429px;
    height: 429px;
  }

  .bg-angle-small {
    height: 6rem;
    width: 6rem;
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