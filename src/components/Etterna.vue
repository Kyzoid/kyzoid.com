<template>
  <div class="relative h-full w-full">
    <EtternaBackground :mode="mode" />

    <RouterLink to="/etterna" class="logo" :class="[(mode === 'page' ? 'logo-full' : 'logo-compact')]">
      <img :src="logo" alt="Etterna logo" />
    </RouterLink>

    <EtternaCard class="card" />
  </div>
</template>

<script setup>
import logo from '/etterna/logo.png';
import EtternaCard from './etterna/EtternaCard.vue';
import EtternaBackground from './etterna/EtternaBackground.vue';

defineProps({
  mode: String
});
</script>

<style scoped>
.card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: max-content;
}

.logo:hover {
  opacity: 1;
}

.logo-full {
  top: 1rem;
  right: 1rem;
  width: 100px;
}

.logo-compact {
  top: .5rem;
  right: .5rem;
  width: 75px;
}

.logo {
  position: absolute;
  opacity: 0.7;
}
</style>