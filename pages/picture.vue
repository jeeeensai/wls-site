<template>
  <div class="container is-fullwidth is-flex mt-6">
    <div class="columns">
      <div v-for="(image, i) in images" :key="i" class="column is-one-quarter" :src="image">
        <img class="image" :src="image" @click="index = i">
        <no-ssr>
          <vue-gallery-slideshow :images="images" :index="index" @close="index = null" />
        </no-ssr>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PicturePage',
  layout () {
    return 'top'
  },
  data () {
    return {
      images: [
        'picture/img_1.jpg',
        'picture/img_2.jpg',
        'picture/img_3.jpg',
        'picture/img_4.jpg'
      ],
      index: null
    }
  }
}
</script>
