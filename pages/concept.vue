<template>
  <div class="hero is-fullheight-with-navbar hero-back-image-concept">
    <div class="is-flex is-align-items-center is-flex-direction-column concept_section">
      <section class="section">
        <h2 class="title has-text-white my-5 is-size-3 is-size-1-desktop">
          Basketball Club Team
        </h2>
        <div class="subtitle is-size-6 is-size-5-desktop mt-5 has-text-weight-bold five_items">
          <ol class="pl-6">
            <li class="fadeLeft">
              基礎を大切にすること
            </li>
            <li class="fadeLeft delay1">
              常に全力投球すること
            </li>
            <li class="fadeLeft delay2">
              一期一会の出会いを大切にすること
            </li>
            <li class="fadeLeft delay3">
              バスケができる環境に感謝すること
            </li>
            <li class="fadeLeft delay4">
              バスケを楽しむこと
            </li>
          </ol>
        </div>
        <p class="has-text-white is-size-6 is-size-5-desktop has-text-weight-bold">
          これらはチーム結成時から心がけているモットーです！<br>
          この気持ちを忘れずに一緒に頑張れるメンバーを募集しています♪
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConceptPage',
  layout () {
    return 'top'
  }
}
</script>
<style>
.hero-back-image-concept {
  background-image: url("../static/baske3.jpg");
  background-size: cover;
  background-repeat: no-repeat;/*画像が繰り返すのを防ぐ*/
  background-position-x: center;
  /* height: 100vh; */
}
.concept_section{
  height: 90vh;
}
.delay1{
  animation-delay: 0.3s;
}
.delay2{
  animation-delay: 0.6s;
}
.delay3{
  animation-delay: 0.9s;
}
.delay4{
  animation-delay: 1.2s;
}

.five_items{
  letter-spacing: 1px;
  color: lightyellow;
}
/* 左から */

.fadeLeft{
animation-name:fadeLeftAnime;
animation-duration:1.0s;
animation-fill-mode:forwards;
opacity:0;
}

@keyframes fadeLeftAnime{
  from {
    opacity: 0;
    transform: translateX(-200px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
