// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    ['@nuxtjs/tailwindcss', {  viewer: false }],
    '@nuxtjs/color-mode',
    'shadcn-nuxt',
  ],
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  css: [
    '~/assets/styles/main.scss',
    '~/assets/styles/base.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
  app: {
    head: {
      bodyAttrs: {
        class: 'dark',
      }
    }
  }
})