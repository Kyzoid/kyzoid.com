<template>
  <div class="mt-1 vivid">
    <img class="z-0 vivid-bg" :src="background" alt="vivid/stasis card">
    <div class="flex items-center justify-between h-full px-2">
      <span class="z-10 vivid-label font-medium text-shadow uppercase">Rating</span>
      <span class="z-10 vivid-rating font-medium text-shadow">{{ value }}</span>
    </div>
  </div>
</template>

<script setup>
import background from '/vivid_stasis/card-small.svg';

defineProps({
  value: String
});
</script>

<style scoped>
.vivid {
  position: relative;
  width: 110px;
  height: 32px;
}

.vivid-bg {
  position: absolute;
  width: 110px;
  height: 32px;
}

.vivid-label {
  font-size: 12px;
}

.vivid-rating {
  font-size: 14px;
}
</style>