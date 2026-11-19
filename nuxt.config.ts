// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Student Information Website',
      meta: [
        { name: 'description', content: 'A student information scrapbook built with reusable Nuxt components.' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&family=Nunito:wght@400;600;700&family=Playfair+Display:wght@600;700&display=swap'
        }
      ]
    }
  }
})
