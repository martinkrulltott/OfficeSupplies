export default {
  mode: 'universal',
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },
  loading: { color: '#fff' },
  css: ['@/assets/style/custom.scss'],
  plugins: [],
  modules: ['@nuxtjs/vuetify', '@nuxtjs/eslint-module', '@nuxtjs/font-awesome'],
  vuetify: {
    theme: {
      primary: '#ed2c92',
      accent: '#0FA7BA',
      secondary: '#F0DB44',
      info: '#1591A0',
      warning: '#ffc107',
      error: '#dd2c00',
      success: '#00e676'
    }
  },
  build: {
    extend(config, ctx) {}
  }
}
