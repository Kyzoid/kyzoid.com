<script setup>
import MaimaiDeluxe from './MaimaiDeluxe.vue';
import MaimaiFinale from './MaimaiFinale.vue';
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

      <div class="flex items-center justify-center h-72">sdvx</div>
      <div class="flex items-center justify-center h-72">pop'n'music</div>
      <div class="flex items-center justify-center h-72">beatsaber</div>
      <!-- <div class="flex items-center justify-center h-72">iidx</div> -->
      <!-- <div class="flex items-center justify-center h-72">chunithm</div> -->
      <!-- <div class="flex items-center justify-center h-72">jubeat</div> -->
      <div class="flex items-center justify-center h-72">ez2on reboot r</div>
      <div class="flex items-center justify-center h-72">osu!mania</div>
      <div class="flex items-center justify-center h-72">quaver</div>
      <div class="flex items-center justify-center h-72">etterna</div>
    </div>
  </div>
</template>

<style scoped>
</style>