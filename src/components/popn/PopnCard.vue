<template>
  <div>
    <div class="popn-card rounded-2xl text-black px-3">
      <div class="card-inner flex flex-col py-2">
        <div class="relative title flex justify-center items-center mx-2 mb-1" style="width: 143px">
          <h2 class="font-bold z-30 ml-3">{{ data.username }}</h2>
          <img class="absolute z-30 left-4" width="28" :src="character" alt="Character">
          <img class="z-20" :src="bgTitle" alt="Background">
        </div>
        <div class="flex flex-col w-full bg-white px-3 py-0.5">
          <span class="id-label">ポプともID</span>
          <span class="id-value text-lg">{{ data.id }}</span>
        </div>
        <div class="flex items-center">
          <div class="h-10 w-10 rounded-full border-blue-600 border-2 ml-1">
            <img :src="class3" alt="Popn class 3">
          </div>
          <div class="class flex flex-col pt-1 ml-1">
            <span class="class-label">ポップンクラス</span>
            <div class="class-rating flex justify-center"><span class="rating text-lg">{{ data.rating }}</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import bgTitle from '/popn/bg_title.svg';
import character from '/popn/img_binary.png';
import class3 from '/popn/class_3.png';
import stats from '/src/stats.json';

const data = stats["popn"];
</script>

<style scoped>
.title {
  position: relative;
  margin-top: -1.5rem;
}

.title h2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  letter-spacing: 0.05em;
}

.popn-card {
  font-weight: 600;
  border: 3px solid black;
  background-image: linear-gradient(135deg, #e9c874 10%, #ffffc7 10%, #ffffc7 50%, #e9c874 50%, #e9c874 60%, #ffffc7 60%, #ffffc7 100%);
  background-size: 14.14px 14.14px;
  position: relative;
  outline: 3px solid #858585;
}

.class-label {
  color: #4E3E1D;
  font-size: 10px;
}

.id-label {
  font-size: 10px;
}

.class .class-rating,
.id-value {
  margin-top: -0.3rem;
}

.card-inner {
  background-color: #FFFFC7;
}

.popn-card:before,
.popn-card:after {
  content: "";
  position: absolute;
  width: 33px;
  height: 32px;
}

.popn-card:before {
  background: url("/popn/pipe.png");
  background-repeat: no-repeat;
  transform: rotate(90deg) translate(-25%, -25%);
  top: 0;
  right: 0;
}

.popn-card:after {
  background: url("/popn/pipe.png");
  background-repeat: no-repeat;
  transform: rotate(-90deg) translate(-25%, -25%);
  bottom: 0;
  left: 0;
}
</style>