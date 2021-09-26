export default {
  target: 'static',

  head: {
    title: 'Greshilov Slava — About',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '@/scss/base.scss'
  ],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    ['@nuxtjs/fontawesome', {
      imports: [{
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faEnvelope']
          },
          {set: '@fortawesome/free-brands-svg-icons',
          icons: ['faFacebook', 'faGithub', 'faLinkedinIn']
          },
      ]
   }]
  ],
}
