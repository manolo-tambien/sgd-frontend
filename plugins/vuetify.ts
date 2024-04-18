// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import { es } from 'vuetify/locale'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

import VDialog from 'vuetify/components/VDialog'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
     
    locale:{
      locale: 'es',
      messages: {es}
    },
    defaults:{
      VDialog:{
        maxWidth: '600px'
      }
    }
  })
  app.vueApp.use(vuetify)
})
