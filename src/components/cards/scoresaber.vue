<template>
  <div class="scoresaber flex items-center justify-center px-2 mt-1">
    <img class="scoresaber-bg" :src="background" alt="ScoreSaber Card">
    <span class="font-medium scoresaber-rating mr-1">{{ value }}</span>
    <span class="font-medium scoresaber-label">pp</span>
  </div>
</template>

<script setup>
import background from '/scoresaber/card-small.svg';

defineProps({
  value: String
});
</script>

<style scoped>
.scoresaber {
  width: 110px;
  height: 32px;
}

.scoresaber-bg {
  position: absolute;
  width: 110px;
  height: 32px;
}

.scoresaber-rating {
  color: white;
  font-weight: 800;
  filter: drop-shadow(0 0 2px #E7172B) drop-shadow(0 0 6px #E7172B);
  font-size: 14px;
  text-shadow: -1px 0px 0px #E7172B;
  font-family: 'NeonTubes';
}

.scoresaber-label {
  color: white;
  font-weight: 800;
  filter: drop-shadow(0 0 2px #1494E3) drop-shadow(0 0 6px #1494E3);
  font-size: 14px;
  text-shadow: -1px 0px 0px #1494E3;
  font-family: 'NeonTubes';
}
</style>