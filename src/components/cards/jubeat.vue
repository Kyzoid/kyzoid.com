<template>
  <div class="jubeat flex justify-between items-center px-2">
    <span class="jubeat-label font-medium">Jubility</span>
    <span class="jubeat-rating font-medium opacity-90">{{ value }}</span>
  </div>
</template>

<script setup>
defineProps({
  value: String
});
</script>

<style scoped>
.jubeat-label {
  font-size: 10px;
  margin-left: 0.4rem;
}

.jubeat {
  position: relative;
  width: 110px;
  height: 32px;
  color: #dda4f3;
  border-radius: 6px;
  border: solid 1px #fff;
  background: linear-gradient(to right, rgba(226, 158, 230, 0.2), rgba(197, 111, 194, 0.2));
  /* box-shadow: 0 0 1px #43c2cf, 0 0 2px #43c2cf, 0 0 3px #43c2cf, 0 0 1px #43c2cf inset, 0 0 6px #43c2cf inset, 0 0 6px #43c2cf inset; */
  box-shadow: 0 0 1px #dda4f3, 0 0 2px #dda4f3, 0 0 3px #dda4f3, 0 0 1px #dda4f3 inset, 0 0 6px #dda4f3 inset, 0 0 6px #dda4f3 inset;
}

.jubeat:after {
  position: absolute;
  top: -8px;
  right: -4px;
  content: "";
  background: url("/jubeat/drink.svg");
  width: 15px;
  height: 26px;
  transform: scale(0.8) rotate(-4deg);
  filter: drop-shadow(0 0 2px rgba(0,0,0,0.3)) drop-shadow(2px 0px 2px black);
}

.jubeat-rating {
  /* background: linear-gradient(to top, #89ffd4, #5cedff); */
  background: linear-gradient(to bottom, #dda4f3, #e1bdf0);
  background-clip: text;
  color: transparent;
  font-weight: 700;
  letter-spacing: 0.05em;
  font-size: 14px;
  margin-right: 0.3rem;
}
</style>