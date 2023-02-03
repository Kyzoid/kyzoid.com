<template>
  <div class="h-full w-full">
    <RouterLink class="logo z-50" :class="[(mode === 'page') ? 'logo-full' : 'logo-compact']" to="/maimai-finale">
      <img :src="logo" alt="Maimai Finale logo">
    </RouterLink>
    <MaimaiFinaleBackground :mode="mode" />
  </div>
</template>

<script setup>
import logo from '/maimai_finale/logo.png';
import MaimaiFinaleBackground from './maimai/MaimaiFinaleBackground.vue';

defineProps({
  mode: String
});
</script>

<style scoped>
.logo {
  transition: .1s opacity linear;
  opacity: 0.7;
  position: absolute;
}

.logo:hover {
  opacity: 1;
}

.logo-full {
  right: 1rem;
  top: 1rem;
  width: 200px;
}

.logo-compact {
  right: .5rem;
  top: .5rem;
  width: 100px;
}
</style>