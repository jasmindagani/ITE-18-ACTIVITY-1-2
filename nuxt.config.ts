import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Load Tailwind CSS on every page
  css: ['~/assets/css/main.css'],

  // Enable the Tailwind CSS Vite plugin
  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      title: 'My Personal Profile',
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/avatar.svg' }],
    },
  },
})
