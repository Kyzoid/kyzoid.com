<template>
  <div class="relative rating shrink-0">
    <img class="absolute" :src="rating" alt="Rating silver">
    <span class="absolute font-bold text-sm">{{ value }}</span>
  </div>
</template>

<script setup>
import rating from '/maimai/rating_base_silver.png';
defineProps({
  value: String
});
</script>

<style scoped>
.maimai {
  filter: drop-shadow(0 0 2px black);
}

.rating {
  width: 110px;
  height: 32px;
}

.rating img {
  height: 100%;
  width: 100%;
}

.rating span {
  top: 50%;
  transform: translateY(-50%);
  right: 0.25rem;
  letter-spacing: 0.25em;
  color: #FFDA01;
  text-shadow: rgba(0, 0, 0, 0.2) 1px 1px 0, rgba(0, 0, 0, 0.2) -1px -1px 0,
    rgba(0, 0, 0, 0.2) -1px 1px 0, rgba(0, 0, 0, 0.2) 1px -1px 0,
    rgba(0, 0, 0, 0.2) 0px 1px 0, rgba(0, 0, 0, 0.2) 0 -1px 0,
    rgba(0, 0, 0, 0.2) -1px 0 0, rgba(0, 0, 0, 0.2) 1px 0 0;
}
</style>