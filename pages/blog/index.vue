<template>
  <div class="font-poppins text-gray-800 bg-white">
    <SchemaMarkup :breadcrumbs="[{ name: 'Home', url: 'https://implantologia.smiledoc.it' }, { name: 'Blog', url: 'https://implantologia.smiledoc.it/blog' }]" />

    <!-- Header -->
    <header class="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-3">
          <div class="w-10 h-10 bg-brand-dark rounded-full flex items-center justify-center">
            <i class="fas fa-tooth text-white text-lg"></i>
          </div>
          <div>
            <span class="text-xl font-bold text-brand-dark">Smiledoc</span>
            <span class="text-xs block text-gray-500 -mt-1">Implantologia</span>
          </div>
        </NuxtLink>
        <nav class="hidden md:flex items-center gap-6 text-sm font-medium">
          <NuxtLink to="/" class="text-gray-600 hover:text-brand-accent transition">Home</NuxtLink>
          <NuxtLink to="/#chi-siamo" class="text-gray-600 hover:text-brand-accent transition">Chi Siamo</NuxtLink>
          <NuxtLink to="/#contatti" class="text-gray-600 hover:text-brand-accent transition">Contatti</NuxtLink>
        </nav>
      </div>
    </header>

    <!-- Blog Hero -->
    <section class="pt-12 pb-8 bg-gradient-to-b from-slate-50 to-white">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h1 class="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Blog Implantologia</h1>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">Articoli informativi sull'implantologia dentale, scritti dal Dott. Piernatale Civero e dal team del Centro Odontoiatrico Smiledoc di Monterotondo.</p>
      </div>
    </section>

    <!-- Articles Grid -->
    <section class="py-12">
      <div class="max-w-5xl mx-auto px-4">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink
            v-for="article in articles"
            :key="article.slug"
            :to="`/blog/${article.slug}`"
            class="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all group overflow-hidden"
          >
            <div class="h-3 bg-brand-accent"></div>
            <div class="p-6">
              <div class="flex items-center gap-2 mb-3">
                <span class="text-xs font-semibold bg-brand-dark/10 text-brand-dark px-2 py-1 rounded">{{ article.category }}</span>
                <span class="text-xs text-gray-400">{{ article.readTime }}</span>
              </div>
              <h2 class="font-bold text-lg text-brand-dark mb-2 group-hover:text-brand-accent transition">{{ article.title }}</h2>
              <p class="text-gray-600 text-sm mb-4">{{ article.excerpt }}</p>
              <span class="text-brand-accent font-semibold text-sm">Leggi l'articolo <i class="fas fa-arrow-right ml-1 text-xs"></i></span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-brand-dark text-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="md:flex gap-10 items-center">
          <div class="md:w-1/2 mb-8 md:mb-0">
            <h2 class="text-2xl font-bold mb-4">Hai bisogno di impianti dentali?</h2>
            <p class="text-white/70 mb-4">Contattaci per una visita diagnostica. Il Dott. Civero valuterà la tua situazione e ti illustrerà il percorso di cure più adatto a te.</p>
            <div class="flex items-center gap-3 text-white/80">
              <i class="fas fa-map-marker-alt"></i>
              <span>Via Monte Circeo 12, Monterotondo (RM)</span>
            </div>
          </div>
          <div class="md:w-1/2">
            <LeadForm variant="dark" title="Richiedi informazioni" page-source="Blog - Lista articoli" />
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-slate-900 text-white/60 py-10">
      <div class="max-w-4xl mx-auto px-4 text-center text-sm">
        <p class="mb-2">&ndash; Direttore Sanitario Dott. Piernatale Civero &ndash;</p>
        <p class="mb-4">Centro Odontoiatrico Smiledoc | Via Monte Circeo 12, 00015 Monterotondo (RM)</p>
        <p class="mb-4">
          <a href="tel:+390690623936" class="text-white/80 hover:text-white transition"><i class="fas fa-phone mr-1"></i>06 906 23 936</a>
        </p>
        <p class="text-white/40">Copyright {{ new Date().getFullYear() }} &copy; Centro Odontoiatrico Smiledoc | P.IVA: 15131801001</p>
        <div class="mt-3 space-x-4">
          <NuxtLink to="/privacy" class="text-white/40 hover:text-white/60 transition">Privacy Policy</NuxtLink>
          <NuxtLink to="/cookie" class="text-white/40 hover:text-white/60 transition">Cookie Policy</NuxtLink>
        </div>
      </div>
    </footer>

    <CookieBanner />
    <WhatsAppButton />
    <StickyCta />
  </div>
</template>

<script setup lang="ts">
const { getAllArticles } = useBlogArticles()
const articles = getAllArticles()

useHead({
  title: 'Blog Implantologia Dentale | Smiledoc Monterotondo',
  meta: [
    { name: 'description', content: 'Articoli informativi su impianti dentali, carico immediato, sedazione cosciente e molto altro. Blog del Centro Smiledoc di Monterotondo.' },
    { property: 'og:title', content: 'Blog Implantologia - Smiledoc Monterotondo' },
    { property: 'og:description', content: 'Articoli su implantologia dentale dal Dott. Piernatale Civero. Centro Smiledoc Monterotondo.' },
  ],
})
</script>
