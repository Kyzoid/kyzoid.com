<template>
  <div class="quaver-card">
    <div class="flex justify-end">
      <div class="mode-switch mb-2" :class="[ (mode === '4K') ? 'mode-active-4' : 'mode-active-7']">
        <div class="thumb"></div>
        <div class="mode mode-4" @click="mode = '4K'">4K</div>
        <div class="mode mode-7" @click="mode = '7K'">7K</div>
      </div>
    </div>
    <div class="flex items-start profile-card p-4 rounded">
      <img class="hidden sm:block rounded-lg avatar" width="112" :src="avatar" alt="Avatar" />
      <div class="flex flex-col justify-between text-sm ml-0 sm:ml-4 w-full">
        <div class="flex justify-between items-start">
          <div class="flex items-center">
            <img class="mr-2 block sm:hidden rounded-lg avatar" width="65" :src="avatar" alt="Avatar" />
            <div>
              <div class="text-lg flex items-center">
                <img class="hidden sm:block mr-2" :src="flag" width="24" alt="France flag" />
                <span>Kyzoid</span>
              </div>
              <div class="sm:hidden flex items-center">
                <img class="mr-2" :src="flag" width="21" alt="France flag" />
                <span>France</span>
              </div>
            </div>
          </div>
          
          <img width="60" :src="alphaTester" alt="Alpha tester badge" />
        </div>

        <div class="stats text-xs p-2 rounded-lg mt-2 sm:mt-4">
          <div class="px-2 text-sm flex justify-between items-center">
            <span class="mr-20 sm:mr-12">Overall Rating</span>
            <span class="text-right">{{ currentMode.rating }}</span>
          </div>
          <div class="stats-divider my-1" data-v-f0db6588=""></div>
          <div class="px-2">
            <div class="flex justify-between items-center">
              <span>Country Rank</span>
              <span class="text-right">#{{ currentMode.countryRank }}</span>
            </div>
            <div class="flex justify-between items-center">
              <span>Global Rank</span>
              <span class="text-right">#{{ currentMode.globalRank }}</span>
            </div>
            <div class="flex justify-between items-center">
              <span>Play Count</span>
              <span class="text-right">{{ currentMode.playCount }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import avatar from '/quaver/avatar.jpg';
import flag from '/quaver/fr.svg';
import alphaTester from '/quaver/alpha_tester.png';
import stats from '/src/stats.json';

const mode = ref('7K');
const data = stats['quaver'];

const currentMode = computed(() => {
  return data.rating[mode.value];
});
</script>

<style scoped>
.mode-switch {
  position: relative;
  width: 92px;
  height: 19px;
  border-radius: 9.5px;
  z-index: 1;
  transition: .3s ease-in-out;
}

.thumb {
  z-index: 2;
  position: absolute;
  top: 50%;
  border-radius: 9.5px;
  width: 48px;
  height: 20px;
  transition: .3s ease-in-out;
  left: 0;
  opacity: 1;
}

.mode-active-4 .thumb {
  background-color: #0587e5;
  transform: translate(-2px, -10.5px);
}

.mode-active-7 .thumb {
  background-color: #9b51e0;
  transform: translate(43px, -10.5px);
}

.mode-active-4.mode-switch {
  border: 2px solid #9b51e0;
}

.mode-active-7.mode-switch {
  border: 2px solid #0587e5;
}

.mode {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9.5px;
  width: 48px;
  height: 19px;
  color: #808080;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  z-index: 3;
}

.mode-4 {
  top: 50%;
  padding-right: 5px;
  transform: translate(0, -50%);
  left: 0;
}

.mode-7 {
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  padding-left: 5px;
}

.mode-active-4 .mode-4 {
  color: white;
}

.mode-active-7 .mode-7 {
  color: white;
}

.avatar {
  border: 4px solid #181818; 
}
.stats {
  background-color: #181818;
}

.stats-divider {
  border-top: 2px solid #101010;
  height: 1px;
  width: 100%;
}

.profile-card {
  background-color: #242424;
  box-shadow: 0 4px 6px rgb(0 0 0 / 15%);
}
</style>