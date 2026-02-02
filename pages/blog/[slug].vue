<template>
  <div class="font-poppins text-gray-800 bg-white">
    <SchemaMarkup
      v-if="article"
      :article-title="article.metaTitle"
      :article-description="article.metaDescription"
      :article-date="article.date"
      :breadcrumbs="[
        { name: 'Home', url: 'https://implantologia.smiledoc.it' },
        { name: 'Blog', url: 'https://implantologia.smiledoc.it/blog' },
        { name: article.title, url: `https://implantologia.smiledoc.it/blog/${article.slug}` },
      ]"
    />

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
          <NuxtLink to="/blog" class="text-gray-600 hover:text-brand-accent transition">Blog</NuxtLink>
          <NuxtLink to="/#contatti" class="text-gray-600 hover:text-brand-accent transition">Contatti</NuxtLink>
        </nav>
      </div>
    </header>

    <!-- Breadcrumb -->
    <div class="bg-slate-50 py-3 border-b border-slate-200">
      <div class="max-w-4xl mx-auto px-4 text-sm text-gray-500">
        <NuxtLink to="/" class="hover:text-brand-accent">Home</NuxtLink>
        <span class="mx-2">/</span>
        <NuxtLink to="/blog" class="hover:text-brand-accent">Blog</NuxtLink>
        <span class="mx-2">/</span>
        <span class="text-gray-700">{{ article?.title }}</span>
      </div>
    </div>

    <div v-if="article" class="max-w-5xl mx-auto px-4 py-12">
      <div class="md:flex gap-10">
        <!-- Article Content -->
        <article class="md:w-2/3">
          <div class="mb-6">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-xs font-semibold bg-brand-dark/10 text-brand-dark px-3 py-1 rounded">{{ article.category }}</span>
              <span class="text-xs text-gray-400"><i class="far fa-clock mr-1"></i>{{ article.readTime }} di lettura</span>
              <span class="text-xs text-gray-400"><i class="far fa-calendar mr-1"></i>{{ formatDate(article.date) }}</span>
            </div>
            <h1 class="text-2xl md:text-3xl font-bold text-brand-dark leading-tight">{{ article.title }}</h1>
            <div class="flex items-center gap-3 mt-4 text-sm text-gray-500">
              <div class="w-8 h-8 bg-brand-dark rounded-full flex items-center justify-center">
                <i class="fas fa-user-md text-white text-xs"></i>
              </div>
              <span>Dott. Piernatale Civero — Odontoiatra, Esperto in Implantologia</span>
            </div>
          </div>

          <!-- Article Body -->
          <div class="prose prose-slate max-w-none" v-html="article.content"></div>

          <!-- Inline CTA -->
          <div class="mt-10 bg-brand-accent/5 border border-brand-accent/20 rounded-2xl p-8">
            <h3 class="text-xl font-bold text-brand-dark mb-2">Vuoi saperne di più?</h3>
            <p class="text-gray-600 mb-4">Contattaci per una visita diagnostica presso il Centro Smiledoc di Monterotondo. Il Dott. Civero valuterà la tua situazione personale.</p>
            <div class="flex flex-col sm:flex-row gap-3">
              <NuxtLink to="/#contatti" class="inline-block bg-brand-green hover:bg-brand-green-hover text-white font-bold py-3 px-6 rounded-full text-center transition">
                <i class="fas fa-envelope mr-2"></i>Richiedi informazioni
              </NuxtLink>
              <a href="tel:+390690623936" class="inline-block bg-brand-dark text-white font-bold py-3 px-6 rounded-full text-center hover:bg-brand-dark/90 transition">
                <i class="fas fa-phone mr-2"></i>06 906 23 936
              </a>
            </div>
          </div>

          <!-- Related Articles -->
          <div v-if="relatedArticles.length" class="mt-12">
            <h3 class="text-xl font-bold text-brand-dark mb-6">Articoli correlati</h3>
            <div class="grid sm:grid-cols-2 gap-4">
              <NuxtLink
                v-for="related in relatedArticles"
                :key="related.slug"
                :to="`/blog/${related.slug}`"
                class="bg-slate-50 rounded-xl p-5 hover:shadow-md transition group"
              >
                <span class="text-xs font-semibold text-brand-accent">{{ related.category }}</span>
                <h4 class="font-semibold text-brand-dark mt-1 group-hover:text-brand-accent transition">{{ related.title }}</h4>
              </NuxtLink>
            </div>
          </div>
        </article>

        <!-- Sidebar -->
        <aside class="md:w-1/3 mt-10 md:mt-0">
          <div class="sticky top-20">
            <LeadForm
              title="Hai bisogno di impianti?"
              button-text="Contattaci"
              :page-source="`Blog - ${article.title}`"
            />

            <div class="mt-6 bg-brand-dark rounded-xl p-6 text-white">
              <h4 class="font-bold mb-3">Centro Smiledoc</h4>
              <div class="space-y-2 text-sm text-white/80">
                <p><i class="fas fa-map-marker-alt mr-2 text-brand-accent"></i>Via Monte Circeo 12, Monterotondo</p>
                <p><a href="tel:+390690623936" class="hover:text-white"><i class="fas fa-phone mr-2 text-brand-accent"></i>06 906 23 936</a></p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>

    <!-- 404 -->
    <div v-else class="max-w-4xl mx-auto px-4 py-20 text-center">
      <h1 class="text-2xl font-bold text-brand-dark mb-4">Articolo non trovato</h1>
      <NuxtLink to="/blog" class="text-brand-accent hover:underline">Torna al blog</NuxtLink>
    </div>

    <!-- Footer -->
    <footer class="bg-slate-900 text-white/60 py-10">
      <div class="max-w-4xl mx-auto px-4 text-center text-sm">
        <p class="mb-2">&ndash; Direttore Sanitario Dott. Piernatale Civero &ndash;</p>
        <p class="mb-4">Centro Odontoiatrico Smiledoc | Via Monte Circeo 12, 00015 Monterotondo (RM)</p>
        <p class="text-white/40">Copyright {{ new Date().getFullYear() }} &copy; Centro Odontoiatrico Smiledoc | P.IVA: 10718251002</p>
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
const route = useRoute()
const { getArticle, getAllArticles } = useBlogArticles()

const article = getArticle(route.params.slug as string)

const relatedArticles = computed(() => {
  if (!article) return []
  return getAllArticles()
    .filter(a => a.slug !== article.slug)
    .slice(0, 4)
})

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })
}

if (article) {
  useHead({
    title: article.metaTitle,
    meta: [
      { name: 'description', content: article.metaDescription },
      { property: 'og:title', content: article.metaTitle },
      { property: 'og:description', content: article.metaDescription },
      { property: 'og:type', content: 'article' },
    ],
  })
}
</script>

<style>
.prose h2 { @apply text-xl font-bold text-brand-dark mt-8 mb-3; }
.prose h3 { @apply text-lg font-semibold text-brand-dark mt-6 mb-2; }
.prose p { @apply text-gray-700 leading-relaxed mb-4; }
.prose ul, .prose ol { @apply mb-4 pl-6; }
.prose ul { @apply list-disc; }
.prose ol { @apply list-decimal; }
.prose li { @apply text-gray-700 mb-1; }
.prose strong { @apply text-brand-dark; }
.prose em { @apply text-gray-600; }
</style>
