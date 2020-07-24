// const isDev = process.env.NODE_ENV === 'development'
// const target = isDev ? 'http://192.168.1.4:81' : 'http://haofang.wkan.cn'
const target = 'http://fuli.wkan.cn'
// admin.azhfang.com
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
      { name: 'baidu-site-verification', content: 'CwKheW3kK9' },
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
    { src: '@/plugins/iview', ssr: true },
    '@/plugins/axios',
    '@/plugins/vue-swiper',
    '@/plugins/rem',
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
  router: {
    middleware: ['device']
  },
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
    '/api/upload': {
      target: 'http://admin.azhfang.com',
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
    postcss: [
      require('postcss-px2rem-exclude')({
        remUnit: 100,
        exclude: /node_modules/i
      })
    ]
  }
}
