<template>
  <div class="rating">
    <span class="font-medium">{{ value }}</span>
    <div class="pixel"></div>
  </div>
</template>

<script setup>
defineProps({
  classValue: String,
  value: String
});
</script>

<style scoped>
</style>