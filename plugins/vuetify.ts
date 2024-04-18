// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import { es } from 'vuetify/locale'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    locale:{
      locale: 'es',
      messages: {es}
    }
  })
  app.vueApp.use(vuetify)
})
