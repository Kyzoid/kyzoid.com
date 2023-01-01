<template>
  <div class="relative h-full w-full">
    <SDVXBackground :mode="mode" />

    <RouterLink to="/sdvx" class="logo" :class="[(mode === 'page' ? 'logo-full' : 'logo-compact')]">
      <img :src="logo" alt="SDVX logo" />
    </RouterLink>

    <SDVXCard class="card" />
  </div>
</template>

<script setup>
import logo from '/sdvx/logo.png';
import SDVXBackground from './sdvx/SDVXBackground.vue';
import SDVXCard from './sdvx/SDVXCard.vue';

defineProps({
  mode: String
});
</script>

<style>
.card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.logo:hover {
  opacity: 1;
}

.logo-full {
  top: 1rem;
  right: 1rem;
  width: 200px;
}

.logo-compact {
  top: .5rem;
  right: .5rem;
  width: 100px;
}

.logo {
  position: absolute;
  opacity: 0.7;
}
</style>