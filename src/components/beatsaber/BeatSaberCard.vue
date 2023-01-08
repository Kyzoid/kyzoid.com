<template>
  <div class="profile w-96 p-4 rounded-lg flex items-center">
    <img class="rounded-full border-2 border-blue-400" :src="avatar" width="112" alt="Avatar" />
    <div class="flex flex-col ml-3">
      <div class="flex items-center">
        <span class="text-blue-400 text-lg font-bold">Kyzoid</span>
        <div class="divider mx-3"></div>
        <span class="font-bold pp">2,968.90pp</span>
      </div>
      <div class="flex">
        <div class="flex items-center">
          <img :src="earth" alt="Global flag" width="15" />
          <span class="ml-1 rank text-sm">#12309</span>
        </div>
        <div class="divider mx-3"></div>
        <div class="flex items-center">
          <img :src="flag" alt="France flag" width="18" />
          <span class="ml-1 rank text-sm">#689</span>
        </div>
      </div>
      <div class="flex flex-wrap mt-3">
        <Chip label="Play Count" value="91" />
      </div>
    </div>
  </div>
</template>

<script setup>
import avatar from '/beatsaber/avatar.jpg';
import flag from '/beatsaber/fr.svg';
import earth from '/beatsaber/earth.png';
import Chip from './Chip.vue';
</script>

<style scoped>
.profile {
  background-color: rgba(32, 32, 50, 0.8);
  box-shadow: 2px 2px 6px rgba(12, 12, 30, 0.8);
}

.rank {
  color: rgb(230, 230, 255);
}

.pp {
  color: #8790E3;
}

.divider {
  border-left: 1px solid #3E3E3E;
  height: 21px;
  width: 1px;
}
</style>