<template>
  <div class="relative h-full w-full">
    <Ez2onBackground :mode="mode" />

    <RouterLink to="/ez2on" class="logo" :class="[(mode === 'page' ? 'logo-full' : 'logo-compact')]">
      <img :src="logo" alt="Ez2on logo" />
    </RouterLink>

    <Ez2onCard class="card" />
  </div>
</template>

<script setup>
import logo from '/ez2on/logo.png';
import Ez2onCard from './ez2on/Ez2onCard.vue';
import Ez2onBackground from './ez2on/Ez2onBackground.vue';

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