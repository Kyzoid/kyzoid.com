<template>
  <div class="jubeat mt-1 flex justify-between items-center px-2">
    <span class="text-xs font-medium">Jubility</span>
    <span class="jubeat-rating font-medium opacity-90">{{ value }}</span>
  </div>
</template>

<script setup>
defineProps({
  value: String
});
</script>

<style scoped>
.jubeat {
  width: 110px;
  height: 32px;
  color: #eaffff;
  border-radius: 6px;
  border: solid 1px #fff;
  background: linear-gradient(to right, rgba(145,176,185,.5), rgba(83,134,148,.5));
  box-shadow: 0 0 1px #43c2cf, 0 0 2px #43c2cf, 0 0 3px #43c2cf, 0 0 1px #43c2cf inset, 0 0 6px #43c2cf inset, 0 0 6px #43c2cf inset;
}

.jubeat-rating {
  background: linear-gradient(to top, #89ffd4, #5cedff);
  background-clip: text;
  color: transparent;
  font-weight: 700;
  letter-spacing: 0.05em;
  font-size: 14px;
}
</style>