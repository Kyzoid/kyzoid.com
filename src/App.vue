<template>
  <div class="body h-full">
    <Home />
  </div>
</template>

<script setup>
import Home from './components/Home.vue';
// import { onMounted, ref } from 'vue';
// import assetsLoader from './helpers/assetsLoader';

// const isLoaded = ref(null);

// onMounted(() => {
//   assetsLoader.waitMinimumTwoSeconds(assetsLoader.loadCSS, '/index.css')
//   .then(() => {
//     isLoaded.value = true;
//   });
// });
</script>

<style scoped>
* {
  user-select: none;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.body {
  background: linear-gradient(to bottom, #06090f,#090C15);
}
</style>
