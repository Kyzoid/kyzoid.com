<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-0">
    <div class="relative h-80">
      <MaimaiDeluxe mode="compact" class="h-full w-full" />
    </div>

    <div class="relative h-80 overflow-hidden">
      <MaimaiFinale mode="compact" />
    </div>

    <div class="relative h-80 overflow-hidden">
      <SDVX mode="compact" />
    </div>

    <div class="relative h-80">
      <Popn mode="compact" />
    </div>

    <div class="relative h-80">
      <Jubeat mode="compact" />
    </div>

    <div class="relative h-80">
      <Ez2on mode="compact" />
    </div>

    <div class="relative h-80">
      <BeatSaber mode="compact" />
    </div>

    <div class="relative h-80">
      <Osu mode="compact" />
    </div>

    <div class="relative h-80">
      <Quaver mode="compact" />
    </div>

    <div class="relative h-80">
      <Etterna mode="compact" />
    </div>
  </div>
</template>

<script setup>
import MaimaiDeluxe from './MaimaiDeluxe.vue';
import MaimaiFinale from './MaimaiFinale.vue';
import SDVX from './SDVX.vue';
import Popn from './Popn.vue';
import BeatSaber from './BeatSaber.vue';
import Ez2on from './Ez2on.vue';
import Osu from './Osu.vue';
import Quaver from './Quaver.vue';
import Etterna from './Etterna.vue';
import Jubeat from './Jubeat.vue';
</script>

<style scoped>
</style>