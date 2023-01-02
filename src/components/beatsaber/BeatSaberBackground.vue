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
}

.bg-main-compact {
  background-size: 100%;
}
</style>