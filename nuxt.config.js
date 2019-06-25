const shrinkRay = require('shrink-ray-current')
const pkg = require('./package')

module.exports = {
  mode: 'universal',

  env: {
    NODE_ENV: process.env.NODE_ENV,
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_ACCESS_TOKEN: process.env.CTF_ACCESS_TOKEN
  },

  dev: true,

  /**
   * Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#f16521' },
      { name: 'theme-color', content: '#f16521' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#f16521' },
      { rel: 'preload', as: 'style', href: 'https://use.typekit.net/xmc1zcn.css' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/xmc1zcn.css' }
    ]
  },

  render: {
    compressor: shrinkRay(),
    csp: {
      policies: {
        'default-src':  ["'self'"],
        'manifest-src': ["'self'"],
        'style-src':    ["'self'", "'unsafe-inline'", 'use.typekit.net', 'p.typekit.net'],
        'script-src':   ["'self'", 'use.typekit.net'],
        'img-src':      ["'self'", 'p.typekit.net'],
        'font-src':     ["'self'", 'use.typekit.net'],
        'connect-src':  ["'self'", 'performance.typekit.net', 'cdn.contentful.com', 'raw.githubusercontent.com'],
        'report-uri':   ['https://localhost:3000/violation'],
        'report-to':    ['https://localhost:3000/violation']
      }
    }
  },

  /**
   * Customize the progress-bar color
   */
  loading: { color: '#f16521' },

  /*
   ** Global CSS
   */
  css: [],

  /**
   * Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/prism', mode: 'client' },
    { src: '~/plugins/contentful' },
    { src: '~/plugins/components' },
    { src: '~/plugins/json' }
  ],

  /**
   * Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    ['@nuxtjs/component-cache', { max: 10000, maxAge: 1000 * 60 * 60 }]
  ],

  styleResources: {
    scss: [
      './assets/stylesheets/modules/*.scss',
      './assets/stylesheets/partials/*.scss'
    ]
  },

  /*
   ** Axios module configuration
   */
  /*
  axios: {
    retry: true,
    proxy: true,
    https: process.env.NODE_ENV === 'production',
    debug: true
  },
  */

  /*
   ** Build configuration
   */
  build: {
    analyze: process.env.NODE_ENV === 'development',
    extractCSS: true,
    transpile: [],
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient }) {
      /*
      config.module.rules.forEach(rule => {
        if (/vue/i.test(rule.test.toString())) {
          console.log(rule)
          rule.options.optimizeSSR = false
        }
      })
      */
      // Run ESLint on save
      if (isDev && isClient) {
        /*
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        */
      }
    }
  }
}
