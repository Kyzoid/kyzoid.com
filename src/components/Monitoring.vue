<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-0">
    <div v-for="component in components" class="relative h-80 overflow-hidden">
      <component :is="component.background" />

      <div class="logo">
        <img :src="component.logo" :alt="`${component.name} logo`" />
      </div>

      <component :class="component.class" :is="component.card" />
    </div>
  </div>
</template>

<script setup>
// cards
import BeatSaberCard from './beatsaber/BeatSaberCard.vue';
import EtternaCard from './etterna/EtternaCard.vue';
import Ez2onCard from './ez2on/Ez2onCard.vue';
import MaimaiDeluxeCard from './maimai/MaimaiDeluxeCard.vue';
import OsuCard from './osu/OsuCard.vue';
import JubeatCard from './jubeat/JubeatCard.vue';
import QuaverCard from './quaver/QuaverCard.vue';
import SDVXCard from './sdvx/SDVXCard.vue';

// backgrounds
import BeatSaberBackground from './beatsaber/BeatSaberBackground.vue';
import EtternaBackground from './etterna/EtternaBackground.vue';
import Ez2onBackground from './ez2on/Ez2onBackground.vue';
import MaimaiDeluxeBackground from './maimai/MaimaiDeluxeBackground.vue';
import OsuBackground from './osu/OsuBackground.vue';
import JubeatBackground from './jubeat/JubeatBackground.vue';
import QuaverBackground from './quaver/QuaverBackground.vue';
import SDVXBackground from './sdvx/SDVXBackground.vue';

// logos
import BeatsaberLogo from '/beatsaber/logo.svg';
import EtternaLogo from '/etterna/logo.png';
import SDVXLogo from '/sdvx/logo.png';
import QuaverLogo from '/quaver/logo.png';
import OsuLogo from '/osu/logo.png';
import MaimaiDeluxeLogo from '/maimai/kv_logo.png';
import JubeatLogo from '/jubeat/logo_sp.png';
import Ez2onLogo from '/ez2on/logo.png';

const components = [
  { "id": "sdvx", "name": "SDVX", "card": SDVXCard, "background": SDVXBackground, "logo": SDVXLogo, "class": "card" },
  { "id": "maimaiDeluxe", "name": "Maimai Deluxe", "card": MaimaiDeluxeCard, "background": MaimaiDeluxeBackground, "logo": MaimaiDeluxeLogo, "class": "card max-content" },
  { "id": "ez2on", "name": "EZ2ON", "card": Ez2onCard, "background": Ez2onBackground, "logo": Ez2onLogo, "class": "card max-content" },
  { "id": "jubeat", "name": "Jubeat", "card": JubeatCard, "background": JubeatBackground, "logo": JubeatLogo, "class": "card max-content" },
  { "id": "beatsaber", "name": "Beatsaber", "card": BeatSaberCard, "background": BeatSaberBackground, "logo": BeatsaberLogo, "class": "card max-content" },
  { "id": "osu", "name": "osu!", "card": OsuCard, "background": OsuBackground, "logo": OsuLogo, "class": "card max-content" },
  { "id": "quaver", "name": "Quaver", "card": QuaverCard, "background": QuaverBackground, "logo": QuaverLogo, "class": "card max-content" },
  { "id": "etterna", "name": "Etterna", "card": EtternaCard, "background": EtternaBackground, "logo": EtternaLogo, "class": "card max-content" },
];
</script>

<style scoped>
.logo-beatsaber {
  position: absolute;
  top: .5rem;
  left: .5rem;
  width: 50px;
}

.card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.max-content {
  width: max-content;
}
</style>