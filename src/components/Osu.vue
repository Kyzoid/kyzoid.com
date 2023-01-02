<template>
  <div class="relative h-full w-full">
    <OsuBackground :mode="mode" />

    <RouterLink to="/osu" class="logo" :class="[(mode === 'page' ? 'logo-full' : 'logo-compact')]">
      <img :src="logo" alt="Osu logo" />
    </RouterLink>

    <OsuCard class="card" />
  </div>
</template>

<script setup>
import logo from '/osu/logo.png';
import OsuCard from './osu/OsuCard.vue';
import OsuBackground from './osu/OsuBackground.vue';

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
  width: 100px;
}

.logo-compact {
  top: .5rem;
  right: .5rem;
  width: 50px;
}

.logo {
  position: absolute;
  opacity: 0.7;
}
</style>