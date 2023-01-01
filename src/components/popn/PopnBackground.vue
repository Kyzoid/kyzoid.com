<template>
  <div class="bg-main relative h-full w-full" :class="[(mode === 'page' ? '' : 'bg-main-compact')]">
  </div>
</template>

<script setup>
defineProps({
  mode: String
});
</script>

<style scoped>
.bg-main {
  background-image: url("/popn/bg.jpg"), url("/popn/schall_1P.webp");
  background-position: center center;
  background-repeat: repeat, no-repeat;
}

.bg-main-compact {
  background-size: 100%;
}
</style>