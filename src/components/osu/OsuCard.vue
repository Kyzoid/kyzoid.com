<template>
  <div class="osu-card">
    <div class="card-header flex justify-between items-center rounded-t px-3">
      <div class="infos mr-8 w-full h-full flex items-center">
        <span class="menu menu-active">infos</span>
      </div>
      <ul class="flex items-center">
        <li class="menu mr-3" :class="[ mode === 'std' ? 'menu-active' : '']" @click="mode = 'std'">osu!</li>
        <li class="menu mr-3" :class="[ mode === 'taiko' ? 'menu-active' : '']" @click="mode = 'taiko'">osu!taiko</li>
        <li class="menu" :class="[ mode === 'mania' ? 'menu-active' : '']" @click="mode = 'mania'">osu!mania</li>
      </ul>
    </div>
    <div class="background rounded-b flex items-start p-4">
      <img class="rounded-3xl" :src="avatar" alt="Avatar" width="112" />
      <div class="flex flex-col justify-between ml-4 w-full">
        <div class="flex items-center">
          <h2 class="text-lg font-medium flex items-center">
            <img :src="flag" width="22" alt="France flag" />
            <span class="ml-2">{{ data.username }}</span>
          </h2>
          <div v-if="currentMode.pp" class="mx-2 divider"></div>
          <div v-if="currentMode.pp" class="pp text-sm">
            {{ currentMode.pp }}<span class="text-xs text-white">pp</span>
          </div>
        </div>
        <div class="stats px-2 py-2 mt-2 rounded-lg">
          <div class="px-2 flex items-center justify-between">
            <div class="flex flex-col mr-4">
              <span class="text-xs">Classement Global</span>
              <span v-if="currentMode.globalRank" class="text-lg rank -mt-1">#{{ currentMode.globalRank }}</span>
              <span v-else class="text-xl rank font-bold -mt-1">-</span>
            </div>
            <div class="flex flex-col">
              <span class="text-xs">Classement Pays</span>
              <span v-if="currentMode.countryRank" class="text-lg rank -mt-1">#{{ currentMode.countryRank }}</span>
              <span v-else class="text-xl rank font-bold -mt-1">-</span>
            </div>
          </div>
          <div class="stats-divider my-1"></div>
          <div class="text-xs px-2 py-0.5">
            <div class="flex items-center justify-between">
              <span>Accuracy</span>
              <span>{{ currentMode.accuracy }}</span>
            </div>
            <div class="flex items-center justify-between">
              <span>Play count</span>
              <span>{{ currentMode.playCount }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import avatar from '/osu/avatar.jpg';
import flag from '/osu/fr.svg';
import stats from '/src/stats.json';

const mode = ref('mania');
const data = stats['osu'];

const currentMode = computed(() => {
  return data.rating[mode.value];
});
</script>

<style scoped>
.osu-card {
  box-shadow: 0 1px 3px rgb(0 0 0 / 25%);
}

* {
  font-family: 'Torus';
}

.stats {
  background-color: #2A2226;
}

.stats-divider {
  border-top: 2px solid rgb(28, 23, 25);
  height: 1px;
  width: 100%;
}

.infos {
  border-bottom: 1px solid #FF66AB;
  position: relative;
}

.infos:after {
  content: "";
  position: absolute;
  width: 30px;
  height: 5px;
  border-radius: 9999px;
  background-color: #FF66AB;
  bottom: 0;
  left: 0;
  transform: translateY(50%);
}

.menu {
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  text-shadow: 0 1px 3px rgb(0 0 0 / 75%);
  color: #F166AB;
  transition: .05s color linear;
}

.menu:hover {
  color: white;
}

.menu-active {
  color: white;
}

.background {
  background-color: #382E32;
}

.card-header {
  background-color: #3D2932;
  height: 2.5rem;
}

.rank {
  color: #F0DBE4;
}

.divider {
  border-left: 2px solid #54454C;
  height: 21px;
  width: 1px;
}

.pp {
  color: #E9D5DE;
}
</style>