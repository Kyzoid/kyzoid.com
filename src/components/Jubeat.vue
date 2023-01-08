<template>
  <div class="relative h-full w-full">
    <JubeatBackground :mode="mode" />

    <RouterLink to="/ez2on" class="logo" :class="[(mode === 'page' ? 'logo-full' : 'logo-compact')]">
      <img :src="logo" alt="Jubeat logo" />
    </RouterLink>

    <JubeatCard class="card" />
  </div>
</template>

<script setup>
import logo from '/jubeat/logo_sp.png';
import JubeatCard from './jubeat/JubeatCard.vue';
import JubeatBackground from './jubeat/JubeatBackground.vue';

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