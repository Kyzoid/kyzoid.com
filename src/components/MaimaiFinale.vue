<script setup>
import maiPageTitleBg from '/maimai_finale/maiPageTitleBg.png';
import avatar from '/maimai_finale/avatar.png';
import star from '/maimai_finale/star.png';
import starSolo from '/maimai_finale/star_solo.png';
// import titleSilver from '/maimai_finale/title_silver.svg';
import titleBlank from '/maimai_finale/title_blank.svg';
</script>

<template>
  <div class="bg-night h-full w-full">
    <div class="balloons">
      <div class="balloon bal0"></div>
      <div class="balloon bal1"></div>
      <div class="balloon bal2"></div>
      <div class="balloon bal3"></div>
      <div class="balloon bal4"></div>
      <div class="balloon bal5"></div>
    </div>
    <div>
      <div class="profile w-full flex flex-col items-center justify-center">
        <div class="title relative">
          <img class="absolute" :src="maiPageTitleBg" alt="Maimai page title background" />
          <h1 class="absolute text-3xl font-bold">プロフィール</h1>
        </div>

        <div class="card p-1.5 rounded-lg mt-4">
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

      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<style scoped>
.bg-night {
  background: url("/maimai_finale/curtain.png"), url("/maimai_finale/stars.png"), url("/maimai_finale/purpleStars.png");
  background-repeat: repeat-x,repeat,repeat;
  background-position: top center;
  background-color: #1D2D66;
}

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

.separator {
  border-bottom: 2px dotted #fff;
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

.title {
  width: 484px;
  height: 213px;
}

.title img {
  width: 100%;
  height: 100%;
}

.title h1 {
  text-shadow: 0 0 8px #4967d6, 0 0 8px #4967d6;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
}

.footer {
  position: fixed;
  bottom: -3rem;
  left: 0;
  background: url("/maimai_finale/footerBg.png");
  background-repeat: repeat-x;
  background-position: bottom center;
  width: 100%;
  height: 220px;
}

.balloon {
  position: fixed;
  bottom: -165px;
  animation: balloon 15s linear infinite;
}

.bal0 {
  background-image: url("/maimai_finale/balloonPink.png");
  background-size: contain;
  background-position: 0 0;
  background-repeat: no-repeat;
  right: 2%;
  width: 73px;
  height: 163px;
  animation-delay: 0s;
}

.bal1 {
  background-image: url("/maimai_finale/balloonBlue.png");
  background-size: contain;
  background-position: 0 0;
  background-repeat: no-repeat;
  right: 25%;
  width: 40px;
  height: 110px;
  animation-delay: 1s;
}

.bal2 {
  background-image: url("/maimai_finale/balloonYellow.png");
  background-size: contain;
  background-position: 0 0;
  background-repeat: no-repeat;
  right: 90%;
  width: 73px;
  height: 163px;
  animation-delay: 2.5s;
}

.bal3 {
  background-image: url("/maimai_finale/balloonGreen.png");
  background-size: contain;
  background-position: 0 0;
  background-repeat: no-repeat;
  right: 15%;
  width: 40px;
  height: 110px;
  animation-delay: 3.5s;
}

.bal4 {
  background-image: url("/maimai_finale/balloonBlue.png");
  background-size: contain;
  background-position: 0 0;
  background-repeat: no-repeat;
  right: 75%;
  width: 73px;
  height: 163px;
  animation-delay: 4.5s;
}

.bal5 {
  background-image: url("/maimai_finale/balloonPink.png");
  background-size: contain;
  background-position: 0 0;
  background-repeat: no-repeat;
  right: 92%;
  width: 40px;
  height: 110px;
  animation-delay: 5.5s;
}

@keyframes balloon {
  0% {
    transform: translate(0);
    opacity: 0
  }

  20% {
    transform: translate(-10px, -300px);
    opacity: .75
  }

  40% {
    transform: translate(20px, -600px);
    opacity: .75
  }

  60% {
    transform: translate(-10px, -900px);
    opacity: .75
  }

  80% {
    transform: translate(-10px, -1200px);
    opacity: .75
  }

  to {
    transform: translate(10px, -1500px);
    opacity: 0
  }
}
</style>