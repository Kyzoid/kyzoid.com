<script setup>
import maiPageTitleBg from '/maimai_finale/maiPageTitleBg.png';
import avatar from '/maimai_finale/avatar.jpg';
import star from '/maimai_finale/star.png';
import starSolo from '/maimai_finale/star_solo.png';
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
          <div class="card-inner flex items-start p-4 rounded-lg">
            <div class="avatar rounded h-32 w-32"><img :src="avatar" alt="Profile picture"></div>
            <div class="w-64 ml-4">
              <h2 class="text-2xl uppercase name mb-1">Kyzoid</h2>
              <div class="description mb-2 w-full px-3 py-0.5 text-black rounded-full text-xs">debut</div>
              <div class="separator"></div>
              <div class="flex">
                <div class="mt-3 rating py-1 px-6 flex items-center justify-center rounded relative">
                  <img class="absolute img-top" :src="starSolo" alt="Star top">
                  <img class="absolute img-bottom" :src="star" alt="Star bottom">
                  <span class="uppercase text-xs mr-1.5">Rating</span>
                  <span class="text-lg">11.97</span>
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
  letter-spacing: 0.05em;
  text-shadow: black 1px 1px 0, black -1px -1px 0,
		black -1px 1px 0, black 1px -1px 0,
		black 0px 1px 0, black 0 -1px 0,
		black -1px 0 0, black 1px 0 0;
}

.description {
  background-color: #FFFBF0;
  outline: 2px solid #0A1557;
  /* border: 1px solid #0A1557; */
}

.rating {
  background-color: #DC3D3F;
  outline: 2px solid #9C2222;
  box-shadow: 0 0 2px 4px rgba(255, 180, 180, 0.7);
  border: 2px dotted rgba(255, 191, 191, 0.5);
}

.rating > .img-bottom {
  left: -0.7rem;
  top: 0.15rem;
  transform: rotate(-145deg) scale(0.7);
  opacity: 0.4; 
}

.rating > .img-top {
  left: -0.7rem;
  top: -0.3rem;
  transform: rotate(90deg) scale(0.7);
  opacity: 0.4; 
}

.rating > span {
  font-weight: 600;
  letter-spacing: 0.1em;
  text-shadow: 1px 1px 1px black, 2px 2px 1px black, 0px 1px 1px black, 0px 0px 1px black;
}

.separator {
  border-bottom: 2px dotted #fff;
}

.avatar {
  border: 3px solid #9bbbf7;
}

.card {
  background-color: #2d3f7e;
  box-shadow: inset 0 0 0 2px #43c3cb, 0 0 8px #000;
}

.card-inner {
  border: 1px dashed #425da9;
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