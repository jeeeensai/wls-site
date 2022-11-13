<template>
  <div class="is-flex is-justify-content-center">
    <section class="section">
      <canvas id="myCanvas" />
    </section>
  </div>
</template>

<script>
import moment from 'moment'
// import * as THREE from 'three'

export default {
  name: 'GamePage',
  layout () {
    return 'top'
  },
  data () {
    return {
      // 試合結果決まり次第、以下データを追加
      gameDatas: [
        {
          date: moment('2022-10-10'),
          place: '臨海スポーツセンター',
          opponent: 'STAND PLAY',
          opponentPoint: 104,
          originalPoint: 56
        },
        {
          date: moment('2022-09-25'),
          place: '岸和田市総合体育館',
          opponent: 'RAYS',
          opponentPoint: 96,
          originalPoint: 76
        },
        {
          date: moment('2022-07-31'),
          place: '丸善インテックスアリーナ サブ',
          opponent: '新撰組',
          opponentPoint: 51,
          originalPoint: 43
        },
        {
          date: moment('2022-07-18'),
          place: '八尾市立総合体育館',
          opponent: 'ASTERISM',
          opponentPoint: 73,
          originalPoint: 54
        },
        {
          date: moment('2022-06-18'),
          place: '原池公園体育館',
          opponent: 'Golden Age',
          opponentPoint: 79,
          originalPoint: 58
        },
        {
          date: moment('2022-02-13'),
          place: '臨海スポーツセンター',
          opponent: 'Psychopath',
          opponentPoint: 86,
          originalPoint: 61
        },
        {
          date: moment('2022-01-16'),
          place: '臨海スポーツセンター',
          opponent: 'ASTERISM',
          opponentPoint: 65,
          originalPoint: 70
        },
        {
          date: moment('2021-11-14'),
          place: '美原体育館',
          opponent: 'Three Horses',
          opponentPoint: 101,
          originalPoint: 72
        },
        {
          date: moment('2021-11-07'),
          place: '臨海スポーツセンター',
          opponent: '履正社医療スポーツ専門学校',
          opponentPoint: 65,
          originalPoint: 85
        }
      ]
    }
  }
  // mounted () {
  //   // canvas要素を渡す。
  //   const renderer = new THREE.WebGLRenderer({
  //     canvas: document.querySelector('#myCanvas')
  //   })
  //   renderer.setSize(960, 540)
  //   const scene = new THREE.Scene()
  //   const camera = new THREE.PerspectiveCamera(45, 960 / 540)
  //   camera.position.set(0, 0, +1000)
  //   const geometry = new THREE.BoxGeometry(500, 500, 500)
  //   const material = new THREE.MeshNormalMaterial()
  //   const light = new THREE.PointLight(0xFFFFFF)
  //   light.position.set(2, 2, 2)// ライトの位置を設定
  //   scene.add(light)
  //   // new THREE.Mesh(ジオメトリ,マテリアル)
  //   const box = new THREE.Mesh(geometry, material)
  //   // シーンに追加
  //   scene.add(box)
  //   // 初回実行
  //   tick()
  //   function tick () {
  //     requestAnimationFrame(tick)
  //     // アニメーション処理をここに書く
  //     box.rotation.y += 0.01
  //     renderer.render(scene, camera) // レンダリング
  //   }
  // }
}
</script>
<style>
.width_10vw{
  min-width: 10vw;
}
.width_35vw{
  width: 35vw;
}
.winner{
  color: red;
}
.loser{
  color: blue;
}
</style>
