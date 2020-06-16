const isDev = process.env.NODE_ENV === 'development'
const target = isDev ? 'http://192.168.1.4:81' : 'http://azhfang.com'

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: '澳洲好房',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1s' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'iview/dist/styles/iview.css',
    '@/styles/index.scss',
    'swiper/css/swiper.min.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/iview',
    '@/plugins/axios',
    '@/plugins/vue-swiper',
    '@/plugins/i-viewer',
    '@/plugins/v-clipboard'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true // 表示开启代理
  },
  proxy: {
    '/flaz': {
      target,
      // ws: true,
      changOrigin: true // 接口跨域
    },
    '/api': {
      target,
      // ws: true,
      changOrigin: true, // 接口跨域
      pathRewrite: {
        '^/api': '/api' // 路径重写
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
