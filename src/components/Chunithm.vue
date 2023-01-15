<template>
  <div class="h-full">
    <ChunithmBackground :mode="mode" />

    <RouterLink class="logo z-50" :class="(mode === 'page' ? 'logo-full' : 'logo-compact')" to="/chunithm">
      <img :src="logo" alt="Chunithm" />
    </RouterLink>

    <ChunithmCard class="profile" />
  </div>
</template>

<script setup>
import logo from '/chunithm/logo.png';
import ChunithmCard from './chunithm/ChunithmCard.vue';
import ChunithmBackground from './chunithm/ChunithmBackground.vue';

defineProps({
  mode: String
})
</script>

<style scoped>
.profile {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: max-content;
}

.logo {
  transition: .1s opacity linear;
  opacity: 0.7;
  position: absolute;
}

.logo:hover {
  opacity: 1;
}

.logo-full {
  width: 200px;
  top: 1rem;
  right: 1rem;
}

.logo-compact {
  width: 100px;
  top: .5rem;
  right: .5rem;
}
</style>
