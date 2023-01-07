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
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

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
  //   // レンダラー作成
  //   const renderer = new THREE.WebGLRenderer({
  //     canvas: document.querySelector('#myCanvas'),
  //     alpha: true
  //   })
  //   // サイズ
  //   const sizes = {
  //     width: window.innerWidth,
  //     height: window.innerHeight
  //   }
  //   renderer.setSize(sizes.width, sizes.height)
  //   // renderer.setSize(960, 540)
  //   // デバイスのサイズによって解像度を調整
  //   renderer.setPixelRatio(window.devicePixelRatio)
  //   // テクスチャを追加
  //   const texture = new THREE.TextureLoader().load('baske.jpg')

  //   // シーンを作成
  //   const scene = new THREE.Scene()
  //   // カメラを作成(視野角、アスペクト比windows.innerWidth/windows.innerHeight、開始距離、終了距離)
  //   // const camera = new THREE.PerspectiveCamera(45, 960 / 540)
  //   const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height)
  //   camera.position.set(0, 0, +1000)
  //   // 球体を作成
  //   // const geometry = new THREE.SphereGeometry(300, 30, 30)
  //   const geometry = new THREE.SphereGeometry(100, 64, 32)
  //   // const geometry = new THREE.BoxGeometry(500, 500, 500)
  //   // const material = new THREE.MeshNormalMaterial()
  //   // const material = new THREE.MeshStandardMaterial({ color: 0xFF0000 })
  //   // const material = new THREE.MeshStandardMaterial({ color: 0xFF0000 })
  //   // const material = new THREE.MeshPhysicalMaterial({ color: 0xFF0000 })
  //   const material = new THREE.MeshPhysicalMaterial({ map: texture })
  //   // メッシュを作成
  //   // const light = new THREE.PointLight(0xFFFFFF)
  //   // light.position.set(2, 2, 2)// ライトの位置を設定
  //   // scene.add(light)
  //   // 平行光源（色、強さ）
  //   const directionalLight = new THREE.DirectionalLight(0xFFFFFF)
  //   directionalLight.position.set(3, 3, 3)
  //   scene.add(directionalLight)
  //   // ポイント光源
  //   const pointLight = new THREE.PointLight(0xFFFFFF)
  //   pointLight.position.set(-200, -200, -200)
  //   scene.add(pointLight)
  //   // 光源がどこにあるか
  //   // const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 20)
  //   // scene.add(directionalLightHelper)

  //   const pointLightLightHelper = new THREE.PointLightHelper(pointLight, 20, 'black')
  //   scene.add(pointLightLightHelper)

  //   // マウス操作ができるようにする
  //   const controls = new OrbitControls(camera, renderer.domElement)
  //   controls.enableDamping = true
  //   // console.log(controls)
  //   // new THREE.Mesh(ジオメトリ,マテリアル)
  //   const mesh = new THREE.Mesh(geometry, material)
  //   // シーンに追加
  //   scene.add(mesh)

  //   // AnimationFrameの統一
  //   const clock = new THREE.Clock()
  //   const getDeltatime = clock.getDelta()

  //   // 初回実行
  //   tick()
  //   function tick () {
  //     requestAnimationFrame(tick)
  //     // アニメーション処理をここに書く
  //     // ポイント光源を球の周りを巡回させる
  //     pointLight.position.set(
  //       200 * Math.sin(Date.now() / 500),
  //       200 * Math.sin(Date.now() / 1000),
  //       200 * Math.cos(Date.now() / 1000)
  //     )
  //     mesh.rotation.y += 0.01 * getDeltatime
  //     controls.update()
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
