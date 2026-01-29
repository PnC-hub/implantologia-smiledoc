export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  ssr: false,
  app: {
    baseURL: '/',
    head: {
      title: 'Implantologia Smiledoc - Dott. Piernatale Civero | Monterotondo',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Impianti dentali a Monterotondo. Scopri come tornare a sorridere con il protocollo implantologico del Dott. Piernatale Civero presso Smiledoc.' },
        { name: 'theme-color', content: '#1e3a5f' },
        { property: 'og:title', content: 'Implantologia Smiledoc - Monterotondo' },
        { property: 'og:description', content: 'Riabilitazione implantare completa. Torna a sorridere in sole 24 ore.' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap' }
      ]
    },
  },
  compatibilityDate: '2024-01-01'
})
