<template>
  <div class="signature" ref="signature">
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const signature = ref(null);

onMounted(() => {
  setTimeout(() => {
    signature.value.classList.add('signature-end');
  }, 250);
})
</script>

<style scoped>
</style>