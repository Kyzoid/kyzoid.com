<template>
  <div class="popn relative px-2 mt-1">
    <div class="popn-inner h-full flex items-center justify-center">
      <div class="popn-avatar h-6 w-6 rounded-full border-blue-600 border-2">
        <img :src="classThree" alt="Pop'N Music class 6">
      </div>
      <span class="popn-rating ml-2 font-medium text-black">{{ value }}</span>
    </div>
  </div>
</template>

<script setup>
import classThree from '/popn/class_3.png';

defineProps({
  value: String
});
</script>

<style scoped>
.popn {
  width: 110px;
  height: 32px;
  outline: 1px solid grey;
  border: 1px solid black;
  border-radius: 6px;
  background-size: 14.14px 14.14px;
  background-image: linear-gradient(135deg, #e9c874 10%, #ffffc7 10%, #ffffc7 50%, #e9c874 50%, #e9c874 60%, #ffffc7 60%, #ffffc7 100%);
}

.popn-inner {
  background-color: #FFFFC7;
}

.popn:before {
  background: url("/popn/pipe.png");
  background-repeat: no-repeat;
  transform: rotate(90deg) translate(-40%, -40%) scale(0.5);
  top: 0;
  right: 0;
}

.popn-rating {
  font-size: 14px;
}

.popn:after {
  background: url("/popn/pipe.png");
  background-repeat: no-repeat;
  transform: rotate(-90deg) translate(-40%, -40%) scale(0.5);
  bottom: 0;
  left: 0;
}

.popn:after, .popn:before {
  content: "";
  position: absolute;
  width: 33px;
  height: 32px;
}
</style>