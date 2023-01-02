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
  background: url("/beatsaber/bg.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;
}
</style>