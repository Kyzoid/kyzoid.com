<template>
  <div class="chu relative flex items-center">
    <img class="chu-bg" :src="background" alt="Background" />
    <div class="absolute mt-0.5 label uppercase left-2">Rating</div>
    <div class="chu-rating absolute flex items-center">
      <template v-for="(char, index) of valueCharacters">
        <img class="comma mt-2.5" v-if="char === '.'" :src="`/chunithm/rating/rating_${ratingName(value)}_comma.png`">
        <img class="" v-else :src="`/chunithm/rating/rating_${ratingName(value)}_0${char}.png`">
      </template>
    </div>
  </div>
</template>

<script setup>
import background from '/chunithm/card.svg';
import { computed } from 'vue';

const props = defineProps({
  value: String
});

const valueCharacters = computed(() => {
  const i = props.value.split('');
  return i;
});

const ratingName = (rating) => {
  const r = +rating;
  if (r > 15.99) return 'rainbow';
  if (r > 15.24) return 'platinum';
  if (r > 14.49) return 'gold';

  return 'silver';
}
</script>

<style scoped>
.label {
  font-size: 10px;
  font-weight: 700;
  color: #FDE843;
  opacity: 0.7;
  letter-spacing: 0.07em;
  text-shadow: rgba(0, 0, 0, 0.4) 1px 1px 0, rgba(0, 0, 0, 0.4) -1px -1px 0,
    rgba(0, 0, 0, 0.4) -1px 1px 0, rgba(0, 0, 0, 0.4) 1px -1px 0,
    rgba(0, 0, 0, 0.4) 0px 1px 0, rgba(0, 0, 0, 0.4) 0 -1px 0,
    rgba(0, 0, 0, 0.4) -1px 0 0, rgba(0, 0, 0, 0.4) 1px 0 0;
}

.scale {
  transform: scale(0.5);
}

.chu {
  width: 110px;
  height: 32px;
}

.chu-rating {
  right: 0.5rem;
}

.chu-rating img {
  max-height: 14px;
}

.chu-rating .comma {
  max-height: 4px;
}

.rainbow {
  font-weight: bold;
  text-shadow: rgba(0, 0, 0, 0.2) 1px 1px 0, rgba(0, 0, 0, 0.2) -1px -1px 0, rgba(0, 0, 0, 0.2) -1px 1px 0, rgba(0, 0, 0, 0.2) 1px -1px 0, rgba(0, 0, 0, 0.2) 0px 1px 0, rgba(0, 0, 0, 0.2) 0 -1px 0, rgba(0, 0, 0, 0.2) -1px 0 0, rgba(0, 0, 0, 0.2) 1px 0 0;
}
</style>