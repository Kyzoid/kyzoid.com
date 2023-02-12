<template>
  <div class="bg-osu h-full w-full">
    <div class="triangles"></div>
  </div>
</template>

<script setup>
defineProps({
  mode: String
});
</script>

<style scoped>
.bg-osu { 
  background-color: #1C1719;
}

.triangles {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("/osu/triangles.png");
  background-repeat: repeat-y;
  background-size: 100%;
  opacity: 0.3;
  animation: backgroundMotion 100s linear infinite;
}

@keyframes backgroundMotion {
  from {
    background-position-y: -1200px;
  }

  to {
    background-position-y: 1200px;
  }
}
</style>