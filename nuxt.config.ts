
import 'dotenv/config'

export default defineNuxtConfig({
  devtools: { enabled: true },

  build: {
    transpile: ['vuetify'],
  },

  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'dark'
      }
    }
  },

  modules: ["vuetify-nuxt-module", '@sidebase/nuxt-auth'],
  auth: {
    isEnabled: true,
    // disableServerSideAuth: false,
    originEnvKey: 'NUXT_AUTH_ORIGIN',
    // baseURL: 'http://localhost:3000/api/auth',
    provider: {
      type: 'authjs',
      defaultProvider: 'auth0',
    },
    sessionRefresh: {
      enablePeriodically: true,
      enableOnWindowFocus: true,
    }
  }
})