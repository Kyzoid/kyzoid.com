<template>
  <div class="wrapper">
    <div class="profile-header flex justify-between items-center rounded-t px-3">
      <div class="infos mr-8 w-full h-full flex items-center">
        <span class="menu menu-active">infos</span>
      </div>
      <ul class="flex items-center">
        <li class="menu mr-3" :class="[ mode === 0 ? 'menu-active' : '']" @click="mode = 0">osu!</li>
        <li class="menu mr-3" :class="[ mode === 1 ? 'menu-active' : '']" @click="mode = 1">osu!taiko</li>
        <li class="menu" :class="[ mode === 2 ? 'menu-active' : '']" @click="mode = 2">osu!mania</li>
      </ul>
    </div>
    <div class="profile w-96 rounded-b flex p-4">
      <img class="rounded-3xl" :src="avatar" alt="Avatar" width="112" />
      <div class="flex flex-col justify-between ml-4">
        <div>
          <div class="flex items-center">
            <h2 class="text-lg font-medium">Kyzoid</h2>
            <div class="mx-2 divider"></div>
            <div class="pp">8093<span class="text-xs text-white">pp</span></div>
          </div>
          <div class="flex items-center">
            <img :src="flag" width="22" alt="France flag" />
            <span class="ml-1 text-sm">France</span>
          </div>
        </div>
        <div class="flex items-center">
          <div class="flex flex-col mr-4">
            <span class="text-xs">Classement Global</span>
            <span class="text-xl rank">#2 924</span>
          </div>
          <div class="flex flex-col">
            <span class="text-xs">Classement Pays</span>
            <span class="text-xl rank">#41</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import avatar from '/osu/avatar.jpg';
import flag from '/osu/fr.svg';

const mode = ref(0);
</script>

<style scoped>
.wrapper {
  box-shadow: 0 1px 3px rgb(0 0 0 / 25%);
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

.profile {
  background-color: #382E32;
}

.profile-header {
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