export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  ssr: true,
  app: {
    baseURL: '/',
    head: {
      htmlAttrs: { lang: 'it' },
      title: 'Implantologia Smiledoc - Dott. Piernatale Civero | Monterotondo',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Impianti dentali a Monterotondo e dintorni. Il Dott. Piernatale Civero e il team Smiledoc ti aiutano a tornare a sorridere con impianti fissi, anche in 24 ore. Prenota una visita.' },
        { name: 'theme-color', content: '#1e3a5f' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:locale', content: 'it_IT' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Implantologia Smiledoc' },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap' },
      ],
    },
  },
  routeRules: {
    '/': { prerender: true },
    '/blog': { prerender: true },
    '/blog/**': { prerender: true },
    '/grazie': { prerender: true },
  },
  nitro: {
    prerender: {
      routes: ['/'],
    },
  },
  compatibilityDate: '2024-01-01',
})
