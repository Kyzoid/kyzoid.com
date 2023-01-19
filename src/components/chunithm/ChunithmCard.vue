<template>
  <div class="card shadow flex items-start z-50 p-4">
    <div class="avatar mr-4">
      <img :src="avatar" width="87" alt="Avatar">
    </div>
    <div>
      <div class="honor shadow flex justify-center">
        <span class="uppercase">{{ data.honor }}</span>
      </div>
      <div class="user flex items-baseline justify-between mt-2">
        <div class="flex items-baseline">
          <span class="mr-1">Lv.</span>
          <span class="text-lg font-medium">{{ data.level }}</span>
        </div>
        <span class="username font-medium uppercase text-xl">{{ data.username }}</span>
      </div>
      <div class="info flex items-start mt-4">
        <span class="info-label uppercase">Rating</span>
        <div class="info-value flex items-baseline -mt-0.5">
          <template v-for="digit of data.rating">
            <img v-if="digit === '.'" width="5" src="/chunithm/rating/orange_comma.png" alt="Rating comma" />
            <img v-else class="rating" :src="`/chunithm/rating/orange_0${digit}.png`" :alt="`Rating ${digit}`">
          </template>
        </div>
      </div>

      <div class="info flex items-start mt-2">
        <span class="info-label uppercase">Play Count</span>
        <span class="info-value -mt-0.5">{{ data.playCount }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import avatar from '/chunithm/avatar.png';
import stats from '/src/stats.json';

const data = stats["chunithm"];
</script>

<style scoped>
.rating {
  max-height: 17px;
}

.avatar {
  background-color: #C17126;
  border: 5px solid #F18E30;
}

.user,
.info {
  position: relative;
}

.user:after,
.info:after {
  display: block;
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  width: 100%;
  border-bottom: 1px solid #F0F0F0;
  background-color: #F0F0F0;
}

.username {
  letter-spacing: 0.2em;
  width: 10rem;
}

.info-label {
  height: 18px;
  background-color: #F0F0F0;
  color: #4C463B;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 800;
  width: 5.5rem;
  text-align: center;
  position: relative;
  margin-right: 13px;
}

.honor {
  color: black;
  font-weight: 700;
  border: 1px solid #DEDEDE;
  border-radius: 0.25rem;
  background: rgb(249, 249, 249);
  background: linear-gradient(180deg, rgba(249, 249, 249, 1) 0%, rgba(234, 234, 234, 1) 45%, rgba(210, 210, 212, 1) 55%, rgba(196, 193, 191, 1) 100%);
}

.info-label:after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 100%;
  margin-left: 0px;
  border-right: 18px solid transparent;
  border-bottom: 18px solid #F0F0F0;
}

.info-value {
  font-size: 12px;
  color: #F0F0F0;
  font-weight: 500;
  margin-left: 1rem;
  width: 8rem;
}

.card {
  background: #151c39;
  background: linear-gradient(180deg, rgba(21, 28, 57, 0.9) 0%, rgba(28, 37, 75, 0.9) 100%);
}
</style>