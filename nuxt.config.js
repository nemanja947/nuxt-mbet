


import {i18n} from './config/mozzart_sr'
//TODO: osmisliti ucitavanje configa dinamicki po vrednosti iz .env fajla

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Mozzartbet',
    titleTemplate: 'Mozzartbet %s',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Mozzart bet sajt za kladjenje' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: {
    color: 'blue',
    height: '5px'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    // '@nuxtjs/localtunnel',
    '@nuxtjs/toast',
    'nuxt-mq'
  ],

  /*
  ** Server Middleware
  */
  serverMiddleware: {
    '/api': '~/api'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.APP_BASE_URL
  },
  i18n: i18n,
  mq: {
    defaultBreakpoint: "desktop",
    breakpoints: {
      mobile: 768,
      tablet: 1024,
      desktop: 1400,
      desktopWide: 2000,
      desktopUltraWide: Infinity
    }
  },
  toast: {
    position: "top-center",
    duration: 3000,
    register: [
      // Register custom toasts
      {
        name: "my-error",
        message: "Oops...Something went wrong",
        options: {
          type: "error"
        }
      }
    ]
  },
  sitemap: {
    hostname: "https://example.com",
    gzip: true
  },
  publicRuntimeConfig: {
    myPublicVariable: process.env.PUBLIC_VARIABLE,
  },
  privateRuntimeConfig: {
    myPrivateToken: process.env.PRIVATE_TOKEN
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
