<template>
  <div class="chip text-white text-sm py-1 px-3 rounded-lg flex items-center justify-between">
    <span class="font-bold">{{ label }}</span>
    <span class="divider-white mx-3"></span>
    <span>{{ value }}</span>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  value: String
});
</script>

<style scoped>
.chip {
  background-color: rgb(45, 45, 70);
  color: rgb(230, 230, 255);
}

.divider-white {
  border-left: 1px solid white;
  width: 1px;
  height: 21px;
}
</style>