import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    script: [
     { src: 'https://js.stripe.com/v3/'} 
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
  '~assets/styles/app.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  auth: {
    
      strategies: {
        local: {
          endpoints: {
          login:{
            url: '/auth/login',
            method: 'post',
            propertyName: 'meta.token'
          },
          user: {
            url: '/auth/me',
            method: 'get',
            propertyName: 'data'
          }
        }
      }
   }
  },
   axios: {
   baseURL: 'http://snippetsapi.test/api'
  },

  /*
  ** Nuxt.js modules
  */
  //modules: [
  //],

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
