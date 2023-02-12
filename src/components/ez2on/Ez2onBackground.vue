<template>
  <div class="bg-ez2on h-full w-full">
    <video :src="video" autoplay loop muted></video>
  </div>
</template>

<script setup>
import video from '/ez2on/Multiplayer_PP.webm';

defineProps({
  mode: String
});
</script>

<style scoped>
video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.bg-ez2on {
  background: url("/ez2on/Background_PP.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>