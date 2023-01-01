<script setup>
  import avatar from '/maimai_finale/avatar.png';
  import star from '/maimai_finale/star.png';
  import starSolo from '/maimai_finale/star_solo.png';
  // import titleSilver from '/maimai_finale/title_silver.svg';
  import titleBlank from '/maimai_finale/title_blank.svg';
</script>

<template>
  <div class="card p-1.5 rounded-lg">
    <div class="card-inner flex p-4 rounded-lg h-full">
      <div class="avatar rounded"><img :src="avatar" alt="Profile picture"></div>
      
      <div class="w-64 ml-4 flex flex-col justify-between">
        <div class="mt-0.5 ml-0.5 flex justify-between">
          <div class="rating rating-blue pr-2 pl-5 flex items-center justify-center rounded relative">
            <img class="absolute img-top" :src="starSolo" alt="Star top">
            <img class="absolute img-bottom" :src="star" alt="Star bottom">
            <span class="label uppercase mr-1">Rating</span>
            <span>2.78</span>
          </div>
          <div class="level flex flex-col items-end font-bold">
            <span class="label">TOTAL Lv.</span>
            <span>12</span>
          </div>
        </div>

        <div class="flex flex-col mb-1">
          <h2 class="text-xl uppercase name mb-1">Kyzoid</h2>
          <div class="relative description">
            <img class="absolute" :src="titleBlank" alt="Title silver" />
            <!-- <span class="absolute ml-4 mt-0.5">ソルトにガチ恋</span> -->
            <span class="absolute ml-4 mt-1">debut</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.name {
  letter-spacing: 0.1em;
  text-shadow: black 1px 1px 0, black -1px -1px 0,
		black -1px 1px 0, black 1px -1px 0,
		black 0px 1px 0, black 0 -1px 0,
		black -1px 0 0, black 1px 0 0;
}

.level span {
  font-size: 10px;
  text-shadow: black 1px 1px 0, black -1px -1px 0,
		black -1px 1px 0, black 1px -1px 0,
		black 0px 1px 0, black 0 -1px 0,
		black -1px 0 0, black 1px 0 0;
}

.description {
  height: 28px;
  /* filter: drop-shadow(0 0 1px lightgrey); */
}

.avatar {
  height: 112px;
  width: 112px;
}

.description > span {
  color: black;
  /* text-shadow: black 0px 1px 0, black 1px 1px 0, black -1px 0px 0; silver */
}

.rating-red {
  background-color: #DC3D3F;
  outline: 2px solid #9C2222;
  border: 2px dotted rgba(255, 191, 191, 0.5);
}

.rating-blue {
  background-color: #7CC1D3;
  outline: 2px solid #56B4D3;
  border: 2px dotted rgba(191, 251, 255, 0.5);
}

.rating .label {
  font-size: 10px;
}

.rating > .img-bottom {
  left: -0.9rem;
  top: -0.25rem;
  transform: rotate(-145deg) scale(0.6);
  opacity: 0.4; 
}

.rating-red > .img-bottom {
  filter: hue-rotate(0deg);
}

.rating-blue > .img-bottom {
  filter: hue-rotate(220deg);
}

.rating > .img-top {
  left: -0.9rem;
  top: -0.55rem;
  transform: rotate(90deg) scale(0.6);
  opacity: 0.4;
}

.rating-red > .img-top {
  filter: hue-rotate(0deg);
}

.rating-blue > .img-top {
  filter: hue-rotate(220deg);
}

.rating > span {
  font-weight: 600;
  letter-spacing: 0.1em;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7), 2px 2px 1px rgba(0, 0, 0, 0.7), 0px 1px 1px rgba(0, 0, 0, 0.7), 0px 0px 1px rgba(0, 0, 0, 0.7);
}

.card {
  background-color: rgba(45, 63, 126, 0.8);
  /* background: linear-gradient(0deg, rgba(255,140,253,0.1) 0%, rgba(140,140,255,0.1) 25%, rgba(140,255,215,0.1) 50%, rgba(255,255,140,0.1) 75%, rgba(246,140,255,0.09567577030812324) 100%); */
  /* background: linear-gradient(0deg, rgba(255,180,254,0.2) 0%, rgba(180,180,255,0.2) 25%, rgba(255,255,180,0.2) 50%, rgba(246,140,255,0.2) 75%); */
  box-shadow: inset 0 0 0 2px #43C3CB, 0 0 8px #000;
}

.card-inner {
  border: 1px dashed #425DA9;
}
</style>