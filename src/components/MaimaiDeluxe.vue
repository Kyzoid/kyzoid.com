<template>
  <div>
    <MaimaiDeluxeBackground :mode="mode" />
    <RouterLink class="logo z-50" :class="(mode === 'page' ? 'logo-full' : 'logo-compact')" to="/maimai-deluxe">
      <img :src="logo" alt="Maimai Deluxe Universe Plus" />
    </RouterLink>
    <MaimaiDeluxeCard class="profile" />
  </div>
</template>

<script setup>
import logo from '/maimai/kv_logo.png';
import MaimaiDeluxeCard from './maimai/MaimaiDeluxeCard.vue';
import MaimaiDeluxeBackground from './maimai/MaimaiDeluxeBackground.vue';

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
