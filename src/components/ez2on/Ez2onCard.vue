<template>
  <div class="ez2on-card shadow rounded-2xl p-4">
    <div>
      <div class="flex items-center">
        <img class="rounded-full mr-4 avatar" :src="avatar" alt="Avatar" width="66">
        <h2 class="text-xl font-medium">{{ data.username }}</h2>
        <div class="separator opacity-50 mx-4"></div>
        <div>
          <span class="uppercase mr-2 text-sm">Lv.</span>
          <span class="text-xl font-bold">{{ data.level }}</span>
        </div>
      </div>

      <div class="mt-2">
        <span class="uppercase font-medium text-sm">Rating</span>
        <div class="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-4">
          <Stat title="4S" :value="data.rating['4S']" />
          <Stat title="5S" :value="data.rating['5S']" />
          <Stat title="6S" :value="data.rating['6S']" />
          <Stat title="8S" :value="data.rating['8S']" />
        </div>
      </div>
      
      <div class="mt-2">
        <span class="uppercase font-medium text-sm">Play Count</span>
        <div class="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-4">
          <Stat title="4S" :value="data.playCount['4S']" />
          <Stat title="5S" :value="data.playCount['5S']" />
          <Stat title="6S" :value="data.playCount['6S']" />
          <Stat title="8S" :value="data.playCount['8S']" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Stat from './Stat.vue';
import avatar from '/ez2on/avatar.jpg';
import stats from '/src/stats.json';

const data = stats['ez2on'];
</script>

<style scoped>
.separator {
  border-left: 2px solid white;
  height: 22px;
}

.avatar {
  border: 3px solid #00E4FF;
  box-shadow: 0 0 6px #00E4FF;
}

.ez2on-card {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>