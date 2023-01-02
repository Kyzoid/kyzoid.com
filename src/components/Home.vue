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
</script>

<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-0">
      <div class="relative h-72">
        <MaimaiDeluxe mode="compact" class="h-full w-full" />
      </div>

      <div class="relative h-72 overflow-hidden">
        <MaimaiFinale mode="compact" />
      </div>

      <div class="relative h-72 overflow-hidden">
        <SDVX mode="compact" />
      </div>

      <div class="relative h-72">
        <Popn mode="compact" />
      </div>

      <div class="relative h-72">
        <BeatSaber mode="compact" />
      </div>

      <div class="relative h-72">
        <Ez2on mode="compact" />
      </div>

      <div class="relative h-72">
        <Osu mode="compact" />
      </div>

      <div class="relative h-72">
        <Quaver mode="compact" />
      </div>

      <div class="relative h-72">
        <Etterna mode="compact" />
      </div>
      <!-- <div class="flex items-center justify-center h-72">iidx</div> -->
      <!-- <div class="flex items-center justify-center h-72">chunithm</div> -->
      <!-- <div class="flex items-center justify-center h-72">jubeat</div> -->
    </div>
  </div>
</template>

<style scoped>
</style>