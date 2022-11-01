module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxtjs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'simpletest' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel:"stylesheet", href:'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css'},
      { rel:'stylesheet', type:'font', href:'https://fonts.google.com/specimen/Montserrat?query=montser'},
      { rel:'stylesheet', type:'font', href:'https://fonts.google.com/specimen/Poppins?query=poppins'},
      { rel: 'icon', type: 'pages', href: '../pages/English.vue' },
    ],
    
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
 /*
 ** Global css
 */
 css:[
    '@/assets/css/bootstrap.min.css'
 ],
 js:[
  '@/assets/css/bootstrap.js'
],
fontawesome:[
  '@/assets/css/solid.min.css'
],

  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    // vendor: ["aos"],
    buildModules: [
    '@nuxtjs/google-fonts'
  ],
  modules: [
    '@nuxtjs/axios',
    ['nuxt-mail', {
      message: {
        to: 'dndiaye389@gmail.com',
      },
      smtp: {
        host:"smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: 'dndiaye389@gmail.com',
          pass: 'password'
        },
      },
    }],
  ],
  googleFonts: {
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },

    }
  }
  },
  // plugins: [{ src: "~/plugins/aos", ssr: false}],
  // css: ["aos/dist/aos.css"]
 
}


