<template>
  <div class="font-poppins text-gray-800 bg-white min-h-screen flex flex-col">
    <SchemaMarkup />

    <!-- Header -->
    <header class="bg-white shadow-sm py-4">
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
      </div>
    </header>

    <!-- Thank You Content -->
    <main class="flex-1 flex items-center justify-center py-20">
      <div class="max-w-lg mx-auto px-4 text-center">
        <div class="w-24 h-24 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <i class="fas fa-check-circle text-brand-green text-5xl"></i>
        </div>
        <h1 class="text-3xl font-bold text-brand-dark mb-4">Richiesta ricevuta!</h1>
        <p class="text-lg text-gray-600 mb-6">
          Ti ringraziamo per averci contattato. Un membro del nostro team ti ricontatterà al più presto per fornirti tutte le informazioni di cui hai bisogno.
        </p>
        <div class="bg-slate-50 rounded-xl p-6 mb-8 text-left">
          <h3 class="font-semibold text-brand-dark mb-3">Nel frattempo puoi:</h3>
          <ul class="space-y-2 text-gray-600 text-sm">
            <li class="flex gap-2"><i class="fas fa-phone text-brand-accent mt-1"></i>Chiamarci direttamente al <a href="tel:+390690623936" class="font-semibold text-brand-dark">06 906 23 936</a></li>
            <li class="flex gap-2"><i class="fas fa-book text-brand-accent mt-1"></i><NuxtLink to="/blog" class="text-brand-accent hover:underline">Leggere il nostro blog</NuxtLink> per saperne di più sull'implantologia</li>
            <li class="flex gap-2"><i class="fas fa-map-marker-alt text-brand-accent mt-1"></i>Trovarci in Via Monte Circeo 12, Monterotondo (RM)</li>
          </ul>
        </div>
        <NuxtLink to="/" class="inline-block bg-brand-dark text-white font-semibold py-3 px-8 rounded-full hover:bg-brand-dark/90 transition">
          <i class="fas fa-home mr-2"></i>Torna alla homepage
        </NuxtLink>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-slate-900 text-white/60 py-6">
      <div class="max-w-4xl mx-auto px-4 text-center text-sm">
        <p>Centro Odontoiatrico Smiledoc | Via Monte Circeo 12, 00015 Monterotondo (RM)</p>
        <p class="mt-1 text-white/40">Copyright {{ new Date().getFullYear() }} &copy; Centro Odontoiatrico Smiledoc | P.IVA: 15131801001</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Richiesta Ricevuta - Smiledoc Implantologia',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' },
  ],
})
</script>
