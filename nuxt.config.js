/* nuxt.config.js */
// `DEPLOY_ENV` が `GH_PAGES` の場合のみ `router.base = '/<repository-name>/'` を追加する
// let routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
//   router: {
//     base: '/wls-site/'
//   }
// } : {}

let routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? '/wls-site/': '/'
// let routerBase = '/'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'ORIGINAL W.L.S | 東大阪社会人バスケットボールクラブチーム %s',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    // title: 'ORIGINAL W.L.S | 東大阪社会人バスケットボールチーム',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: `ORGINAL W.L.Sの公式HP
        大阪府東大阪市を中心に活動している社会人バスケットボールクラブチームです。
        随時新規加入メンバーを募集しております！！お気軽にお問い合わせください。`
      },
      { hid: 'og:site_name', property: 'og:site_name', content: 'ORIGINAL W.L.S ' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { hid:'icon', rel: 'icon', type: 'image/x-icon', href: '/static/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vue-gallery-slideshow'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    'nuxt-gsap-module'
  ],

  gsap: {
    extraPlugins: {
      scrollTrigger: true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    // '@nuxtjs/robots'
  ],

  sitemap: {
    path: '/sitemap.xml',
    // hostname: 'https://original-wls.tk',
    hostname: 'https://original-wls.f5.si',
    exclude: [
      '/game2',
      '/inspire'
    ]
  },

  // robots: {
  //   rules: {
  //     UserAgent: '*',
  //     Disallow: ''
  //   }
  // },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    },
    // icon: {
    //   fileName: '/Users/jeeee/tmp/wls-site/static/icon.png',
    // }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'three'
    ],
  },

  // routerBase,
  router: {
    base: routerBase
  },
  generate: {
    dir: 'docs'
  },
  manifest: {
    name: 'wls-site',
    short_name:"wls-site",
    lang: 'ja',
    display:'standalone',
    background_color:'#FFFFFF',
    icons:[{
      src:`/icon.png`,
      size:"144x144",
      type:"image/png"
    }]
  }
}
