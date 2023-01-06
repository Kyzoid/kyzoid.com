<template>
  <div class="bg-main relative h-full w-full">
  </div>
</template>

<script setup>
defineProps({
  mode: String
});
</script>

<style scoped>
.bg-main {
  background-image: url("/etterna/bg-pattern.png");
  background-color: #222222;
  background-size: 70px;
}
</style>