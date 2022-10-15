<template>
  <div>
    <section class="hero is-fullheight-with-navbar hero-back-image" />
    <div class="mb-2">
      <section class="section has-background-grey-light concept-back-image">
        <h1 class="title has-text-white is-size-4-mobile">
          ORIGINAL W.L.Sとは
        </h1>
        <p class="has-text-white is-size-7-mobile">
          大阪府東大阪市を中心に活動している社会人バスケットボールチームです。<br>
          メンバーは社会人男性13名程度で平均年齢は20代前半~40代半ばと幅広い年代が在籍してます。<br>
          現在、大阪社会人バスケットボール連盟男子2部Aに所属しており、1部昇格を目指して奮闘中です。<br>
          随時新規加入メンバーを募集しております！！<br>
          お気軽にお問い合わせください。<br>
        </p>
      </section>
    </div>
    <div class="columns is-5 mx-2">
      <div class="column">
        <div class="card card-height">
          <div class="card-content">
            <div class="content">
              <div class="columns is-5 mx-2">
                <div class="column">
                  <h2>活動時間/場所</h2>
                  <p>
                    時間：隔週日曜 13:00〜17:00<br>
                    場所：大阪府東大阪市立<ruby>意岐部<rt>おきべ</rt></ruby>中学校
                  </p>
                  <div class="googlemap">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.48226008932!2d135.5929087150541!3d34.66777608044296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000df8edb3594b3%3A0xdde18801b5123fef!2z5p2x5aSn6Ziq5biC56uL5oSP5bKQ6YOo5Lit5a2m5qCh!5e0!3m2!1sja!2sjp!4v1664689627774!5m2!1sja!2sjp"
                      width="600"
                      height="450"
                      style="border:0;"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <br>
                  <p>車でのアクセス：駐車場あり、校内の駐車スペースをご利用下さい。（台数に限りあり）</p>
                  <p>電車でのアクセス：近鉄奈良線八戸ノ里駅より15分程度、地下鉄長田駅より20分程度です。</p>
                  <p>※自転車,バイクでのアクセスも可能です。</p>
                </div>
                <div class="column">
                  <h2 class="is-invisible">
                    活動時間/場所
                  </h2>
                  <p>
                    時間：毎週水曜 19:30～21:30<br>
                    場所：大阪市立<ruby>緑<rt>みどり</rt></ruby>中学校
                  </p>
                  <div class="googlemap">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.8615046052832!2d135.56249631505528!3d34.70867298043239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e05677410a83%3A0x851ea582031f8807!2z5aSn6Ziq5biC56uL57eR5Lit5a2m5qCh!5e0!3m2!1sja!2sjp!4v1665821635017!5m2!1sja!2sjp"
                      width="600"
                      height="450"
                      style="border:0;"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <br>
                  <p>車でのアクセス：近隣のコインパーキングをご利用下さい。</p>
                  <p>電車でのアクセス：地下鉄新森古市、今福鶴見、横堤駅より15分程度です。</p>
                  <p>※自転車,バイクでのアクセスも可能です。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="columns is-5 mx-2">
      <div class="column">
        <div class="card card-height">
          <div class="card-content">
            <div class="content">
              <h2>練習内容</h2>
              <p>
                チーム練習は1時からです。<br>
                ラストに1試合やります。<br>
                ※コロナ対策を遵守して頂きます。<br>
                出来るだけ公式戦と同様の内容でゲームをしています。<br>
                <b-image src="sampleb.jpg" />
                <br>
                チームへの加入希望者は1時からのチーム練習に参加下さい。<br>
                加入条件、詳細については直接伝えますので、お気軽にお問い合わせください。<br>
                ※高校生.大学生不可です。人間性も重視、誠実に応対できる社会人経験者を募集します。<br>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card card-height">
          <div class="card-content">
            <div class="content">
              <h2>募集内容</h2>
              <h5>プレイヤー</h5>
              <ul>
                <li>
                  上級バスケを求める方<br>
                  （センターや経験豊富なガード歓迎）
                </li>
              </ul>
              <h5>マネージャー</h5>
              <ul>
                <li>練習サポートやスコアー記入できる方</li>
              </ul>
              <h5>その他</h5>
              <ul>
                <li>NPO法人のバスケ運営に興味がある方</li>
              </ul>
            </div>
            <div class="is-flex is-justify-content-center my-button">
              <b-button class="button is-link is-outlined is-rounded is-medium is-fullwidth" tag="router-link" :to="{ name: 'inquiry' }">
                体験予約/お問い合わせ
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  layout () {
    return 'top'
  }
}
</script>

<style>
.hero-back-image {
  background-image: url("../static/hero3.svg");
  background-size: cover;
  background-repeat: no-repeat;/*画像が繰り返すのを防ぐ*/
  background-position-y: center;
  /* height: 100vh; */
}
.googlemap {
  position: relative; /* 子要素の基準とする */
  padding-bottom: 60%; /* 表示するパディング領域の縦横比（4：3） */
  height: 0;
  overflow: hidden;
}
.googlemap iframe {
  position: absolute; /* 親要素のパディング領域に配置するために絶対配置を指定 */
  top: 0; /* 垂直方向トップに配置 */
  left: 0; /*  水平方向左に配置 */
  width: 100%; /* 親コンテナの幅いっぱいに表示 */
  height: 100%; /* 親コンテナの高さいっぱいに表示 */
}
.ml-span{
  margin-left: 48px;
}
.concept-back-image{
  background-image: url("../static/sampled.png");
  background-size: cover;
  background-repeat: no-repeat;/*画像が繰り返すのを防ぐ*/
  background-position-y: center;
  min-height: 30vh;
}
.card-height{
  height: 100%;
}
.my-button{
  margin-top: 20%;
  margin-bottom: 20%;
}
@media screen and (max-width: 1440px) {/* 640pxまで*/
  .hero-back-image {
    background-image: url("../static/hero3.svg");
    background-size: contain;
    background-repeat: no-repeat;/*画像が繰り返すのを防ぐ*/
    background-position-y: center;
    /* height: 100vh; */
  }
}

</style>
