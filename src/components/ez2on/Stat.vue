<template>
  <div class="flex items-baseline">
    <span class="key mr-1">{{ title }}</span>
    <div class="flex items-center">
      <span v-for="_ of getDigitToAdd(value.length)" class="value opacity-50">0</span>
      <span v-for="digit of value" class="value">{{ digit }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  value: String
});

const getDigitToAdd = (length) => {
  return 6 - length;
}
</script>

<style scoped>
.value {
  font-size: 18px;
  font-weight: 700;
}

.key {
  color: #00E4FF;
  font-size: 14px;
  font-weight: 500;
}
</style>