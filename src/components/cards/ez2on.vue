<template>
  <div class="ez2on">
    <img class="ez2on-bg" :src="background" alt="EZ2ON Card">
    <div class="flex items-center h-full justify-between px-2">
      <span class="z-10 ez2on-label uppercase">AVG</span>
      <span class="z-10 ez2on-rating -mt-0.5">{{ value }}</span>
    </div>
  </div>
</template>

<script setup>
import background from '/ez2on/card-small.svg';

defineProps({
  value: String
});
</script>

<style scoped>
.ez2on {
  width: 110px;
  height: 32px;
}

.ez2on-bg {
  position: absolute;
  width: 110px;
  height: 32px;
}

.ez2on-rating {
  color: white;
  font-size: 14px;
  background: linear-gradient(to top, #FCFCFC, #C3C3C3);
  background-clip: text;
  color: transparent;
  font-weight: 800;
}

.ez2on-label {
  color: #0DD983;
  font-weight: 500;
  font-size: 12px;
}
</style>