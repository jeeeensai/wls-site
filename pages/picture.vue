<template>
  <div>
    <h1 class="has-text-centered is-size-4-mobile is-size-2-tablet border_y">
      Team Photo
    </h1>
    <div class="container is-fullwidth is-flex">
      <div class="columns">
        <div v-for="(image, i) in images" :key="i" class="column is-one-quarter" :src="image">
          <img class="image" :src="image" @click="index = i">
          <no-ssr>
            <vue-gallery-slideshow :images="images" :index="index" @close="index = null" />
          </no-ssr>
        </div>
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
  },
  head () {
    return {
      title: '- picture'
    }
  }
}
</script>
<style>
.border_y{
  margin-top: 4vh;
  margin-bottom: 4vh;
  /* border-top: solid;
  border-bottom: solid; */
}
</style>
