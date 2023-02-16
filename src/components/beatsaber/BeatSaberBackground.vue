<template>
  <div class="bg-saber h-full w-full">
  </div>
</template>

<script setup>
defineProps({
  mode: String
});
</script>

<style scoped>
.bg-saber {
  background: url("/beatsaber/bg.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
</style>