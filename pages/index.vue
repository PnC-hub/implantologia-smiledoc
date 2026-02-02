<template>
  <div class="font-poppins text-gray-800 bg-white">
    <SchemaMarkup :faq-items="faqItems" />
    <ExitPopup />

    <!-- HEADER -->
    <header class="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 transition-all duration-300" :class="scrolled ? 'py-2' : 'py-3'">
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
          <a href="#chi-siamo" class="text-gray-600 hover:text-brand-accent transition">Chi Siamo</a>
          <NuxtLink to="/blog" class="text-gray-600 hover:text-brand-accent transition">Blog</NuxtLink>
          <a href="#contatti" class="text-gray-600 hover:text-brand-accent transition">Contatti</a>
          <a href="https://smiledoc.it" target="_blank" rel="noopener" class="text-gray-600 hover:text-brand-accent transition">Smiledoc.it</a>
        </nav>
      </div>
    </header>

    <!-- HERO -->
    <section class="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-slate-50 to-white">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <p class="text-brand-accent font-semibold text-sm uppercase tracking-wider mb-4">Centro Odontoiatrico Smiledoc &mdash; Monterotondo (RM)</p>
        <h1 class="text-3xl md:text-5xl font-extrabold leading-tight text-brand-dark mb-6">
          Senti dolore quando mangi e provi imbarazzo quando parli perch&eacute; hai una <span class="text-brand-accent">dentiera mobile</span> o ti mancano uno o pi&ugrave; denti?
        </h1>
        <p class="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Scopri come centinaia di persone a <strong>Monterotondo, Mentana, Fonte Nuova e Guidonia</strong> hanno detto addio al dolore e sono tornate a sorridere liberamente grazie al protocollo di implantologia del <strong>Dott. Piernatale Civero</strong>
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#contatti" class="inline-block bg-brand-green hover:bg-brand-green-hover text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
            <i class="fas fa-envelope mr-2"></i>Vorrei essere ricontattato senza impegno
          </a>
          <a href="tel:+390690623936" class="inline-flex items-center gap-2 text-brand-dark font-semibold hover:text-brand-accent transition">
            <i class="fas fa-phone"></i>Chiama ora: 06 906 23 936
          </a>
        </div>
        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto">
          <div class="text-center">
            <div class="text-3xl font-extrabold text-brand-dark">25+</div>
            <div class="text-sm text-gray-500">Anni di esperienza</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-extrabold text-brand-dark">5000+</div>
            <div class="text-sm text-gray-500">Impianti inseriti</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-extrabold text-brand-dark">24h</div>
            <div class="text-sm text-gray-500">Denti fissi in giornata</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-extrabold text-brand-dark">98%</div>
            <div class="text-sm text-gray-500">Pazienti soddisfatti</div>
          </div>
        </div>
      </div>
    </section>

    <!-- VIDEO SECTION -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
          Scopri come gli impianti dentali del Dott. Civero ti aiuteranno a dire addio al dolore e tornare a sorridere liberamente
        </h2>
        <p class="text-gray-500 mb-8">Guarda il video per capire come funziona il nostro protocollo</p>
        <div class="relative bg-slate-900 rounded-2xl overflow-hidden aspect-video shadow-2xl">
          <video
            controls
            playsinline
            preload="metadata"
            poster="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80"
            class="w-full h-full object-cover"
          >
            <source src="/video/protocollo-smiledoc.mp4" type="video/mp4" />
            Il tuo browser non supporta il tag video.
          </video>
        </div>
      </div>
    </section>

    <!-- PAIN POINTS -->
    <section class="py-16 bg-slate-50">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Ti riconosci in una di queste situazioni?</h2>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white rounded-xl p-6 shadow-md border-l-4 border-brand-accent">
            <div class="text-3xl mb-3"><i class="fas fa-utensils text-brand-accent"></i></div>
            <h3 class="font-bold text-lg mb-2">Dolore quando mangi</h3>
            <p class="text-gray-600 text-sm">Ogni pasto diventa un problema. Eviti cibi che ami perch&eacute; masticare ti causa dolore e fastidio continuo.</p>
          </div>
          <div class="bg-white rounded-xl p-6 shadow-md border-l-4 border-brand-accent">
            <div class="text-3xl mb-3"><i class="fas fa-comment-slash text-brand-accent"></i></div>
            <h3 class="font-bold text-lg mb-2">Imbarazzo quando parli</h3>
            <p class="text-gray-600 text-sm">Nascondi la bocca quando discuti con qualcuno. La paura di mostrare i denti ha preso il sopravvento sulla tua vita sociale.</p>
          </div>
          <div class="bg-white rounded-xl p-6 shadow-md border-l-4 border-brand-accent">
            <div class="text-3xl mb-3"><i class="fas fa-frown text-brand-accent"></i></div>
            <h3 class="font-bold text-lg mb-2">Dentiera instabile</h3>
            <p class="text-gray-600 text-sm">La protesi mobile si muove, crea fastidio alle gengive e ti impedisce di vivere con serenit&agrave; ogni momento della giornata.</p>
          </div>
        </div>
        <div class="mt-10 bg-white rounded-xl p-8 shadow-md">
          <p class="text-lg text-gray-700 leading-relaxed">
            Un sorriso &ldquo;ammaccato&rdquo; e denti poco curati non sono solo un problema estetico. &Egrave; un <strong>limite alla tua libert&agrave;</strong> e un vero ostacolo alla tua felicit&agrave;. Vivere anche solo senza un dente pu&ograve; avere conseguenze negative sui denti sani: lo spazio vuoto fa spostare i denti naturali, compromettendo il morso e creando complicazioni che peggiorano col tempo.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed mt-4">
            <strong class="text-brand-accent">La buona notizia?</strong> Oggi puoi rimediare. La tecnologia ha fatto passi da gigante e la poltrona del dentista non &egrave; pi&ugrave; quella che ti terrorizzava da bambino.
          </p>
        </div>
      </div>
    </section>

    <!-- SOLUZIONE -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <span class="inline-block bg-brand-green/10 text-brand-green font-semibold text-sm px-4 py-1 rounded-full mb-4">Iniziativa Speciale</span>
          <h2 class="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Approfitta dell&rsquo;iniziativa <span class="text-brand-accent">&ldquo;Torna a Sorridere&rdquo;</span> per avere il tuo piano di cura personalizzato
          </h2>
          <p class="text-gray-600 text-lg">Scopri il Centro Odontoiatrico Smiledoc e il protocollo implantologico del Dott. Civero</p>
        </div>

        <div class="grid md:grid-cols-3 gap-4 mb-10">
          <div class="bg-brand-green/5 border border-brand-green/20 rounded-xl p-5 text-center">
            <i class="fas fa-hand-holding-heart text-brand-green text-2xl mb-2"></i>
            <p class="font-semibold text-brand-dark">Senza alcun impegno di acquisto</p>
          </div>
          <div class="bg-brand-green/5 border border-brand-green/20 rounded-xl p-5 text-center">
            <i class="fas fa-clipboard-check text-brand-green text-2xl mb-2"></i>
            <p class="font-semibold text-brand-dark">Valutazione personalizzata completa</p>
          </div>
          <div class="bg-brand-green/5 border border-brand-green/20 rounded-xl p-5 text-center">
            <i class="fas fa-home text-brand-green text-2xl mb-2"></i>
            <p class="font-semibold text-brand-dark">Informazioni direttamente a casa tua</p>
          </div>
        </div>

        <div class="space-y-4">
          <div v-for="(benefit, i) in benefits" :key="i" class="flex gap-4 items-start bg-slate-50 rounded-xl p-5">
            <div class="w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">
              <i class="fas fa-check text-sm"></i>
            </div>
            <p class="text-gray-700">{{ benefit }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CHI SIAMO -->
    <section id="chi-siamo" class="py-16 bg-brand-dark text-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="md:flex gap-10 items-center">
          <div class="md:w-1/3 mb-8 md:mb-0 text-center">
            <div class="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
              <img src="/img/dott-civero.png" alt="Dott. Piernatale Civero" class="w-full h-full object-cover" />
            </div>
            <h3 class="text-xl font-bold">Dott. Piernatale Civero</h3>
            <p class="text-white/60 text-sm">Odontoiatra</p>
          </div>
          <div class="md:w-2/3">
            <h2 class="text-2xl md:text-3xl font-bold mb-6">Da oltre 25 anni al servizio del tuo sorriso</h2>
            <p class="text-white/80 leading-relaxed mb-4">
              Da oltre 25 anni lavoro con l&rsquo;obiettivo di perfezionare un sistema di intervento rapido, efficace e adatto a ogni tipo di paziente. Presso il Centro Odontoiatrico Smiledoc a Monterotondo, insieme al mio team siamo diventati il punto di riferimento per l&rsquo;implantologia dentale nel Lazio.
            </p>
            <p class="text-white/80 leading-relaxed mb-4">
              Oggi sono in grado di inserire <strong class="text-white">nuovi denti fissi, robusti e resistenti</strong>, anche quando c&rsquo;&egrave; poco osso a disposizione e potresti pensare di essere un caso senza speranza.
            </p>
            <p class="text-white/80 leading-relaxed">
              Dopo la prima visita e gli esami diagnostici nel nostro studio, puoi ottenere subito la soluzione su misura per te, e se le tue condizioni cliniche lo consentono, <strong class="text-white">tornare a sorridere e mangiare anche in sole 24 ore!</strong>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- GARANZIA -->
    <section class="py-16 bg-amber-50">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <div class="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <i class="fas fa-shield-alt text-amber-600 text-3xl"></i>
        </div>
        <h2 class="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Garanzia &ldquo;Sorriso Perfetto&rdquo; di 10 anni</h2>
        <p class="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
          Ogni nuova protesi &egrave; coperta dalla nostra speciale garanzia che per <strong>10 anni</strong> mette al riparo da ogni danno i tuoi nuovi denti.
        </p>
        <div class="bg-white rounded-xl p-8 shadow-md max-w-2xl mx-auto text-left">
          <p class="text-gray-700 leading-relaxed">
            Hai 10 anni di tempo per mettere alla prova i tuoi denti e, se non salterai i controlli periodici stabiliti, nel raro caso in cui un dente si scheggi o presenti dei difetti interverremo per ripararlo o sostituirlo.
          </p>
          <div class="mt-6 flex items-center gap-3 text-brand-green font-semibold">
            <i class="fas fa-check-circle text-xl"></i>
            La tua soddisfazione &egrave; garantita.
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIAL -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-2xl md:text-3xl font-bold text-brand-dark text-center mb-10">Ecco cosa pensano di noi i nostri pazienti</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="(t, i) in testimonials" :key="i" class="bg-slate-50 rounded-xl p-6 shadow-sm">
            <div class="flex text-yellow-400 mb-3">
              <i v-for="s in 5" :key="s" class="fas fa-star text-sm"></i>
            </div>
            <p class="text-gray-600 text-sm mb-4 italic">&ldquo;{{ t.text }}&rdquo;</p>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-brand-dark/10 rounded-full flex items-center justify-center">
                <span class="font-bold text-brand-dark text-sm">{{ t.initials }}</span>
              </div>
              <div>
                <p class="font-semibold text-sm">{{ t.name }}</p>
                <p class="text-gray-400 text-xs">{{ t.type }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- VIDEO TESTIMONIAL -->
    <section class="py-16 bg-slate-50">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-2xl md:text-3xl font-bold text-brand-dark text-center mb-3">Le storie dei nostri pazienti</h2>
        <p class="text-gray-500 text-center mb-10">Ascolta direttamente da chi ha ritrovato il sorriso con il metodo Denti Fissi in un Giorno</p>
        <div class="grid md:grid-cols-2 gap-8">
          <div v-for="(v, i) in videoTestimonials" :key="i" class="bg-white rounded-xl shadow-sm overflow-hidden">
            <div class="relative pb-[56.25%]">
              <iframe
                :src="`https://www.youtube.com/embed/${v.id}`"
                class="absolute inset-0 w-full h-full"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                loading="lazy"
              ></iframe>
            </div>
            <div class="p-4">
              <h3 class="font-bold text-brand-dark text-sm">{{ v.title }}</h3>
              <p class="text-gray-400 text-xs mt-1">{{ v.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA INTERMEDIA -->
    <section class="py-16 bg-brand-accent text-white">
      <div class="max-w-3xl mx-auto px-4 text-center">
        <h2 class="text-2xl md:text-3xl font-bold mb-4">Abbandona l&rsquo;idea che le cure dal dentista siano solo una tortura!</h2>
        <p class="text-white/80 text-lg mb-8">
          L&rsquo;iniziativa &ldquo;Torna a Sorridere&rdquo; ti far&agrave; conoscere da vicino il Centro Odontoiatrico Smiledoc, e scoprirai come il nostro protocollo permette di stabilire con precisione il piano di cure ideale per te.
        </p>
        <a href="#contatti" class="inline-block bg-white text-brand-accent font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
          <i class="fas fa-arrow-down mr-2"></i>Richiedi informazioni
        </a>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-16 bg-slate-50">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-2xl md:text-3xl font-bold text-brand-dark text-center mb-10">Domande frequenti</h2>
        <div class="space-y-4">
          <div v-for="(faq, i) in faqItems" :key="i" class="bg-white rounded-xl shadow-sm overflow-hidden">
            <button
              @click="toggleFaq(i)"
              class="w-full text-left px-6 py-5 flex items-center justify-between font-semibold text-brand-dark hover:bg-slate-50 transition"
            >
              <span>{{ faq.question }}</span>
              <i :class="openFaq === i ? 'fas fa-chevron-up' : 'fas fa-chevron-down'" class="text-brand-accent text-sm ml-4 flex-shrink-0"></i>
            </button>
            <div v-show="openFaq === i" class="px-6 pb-5 text-gray-600 leading-relaxed">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- URGENZA -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-2xl md:text-3xl font-bold text-brand-dark text-center mb-6">Cosa stai aspettando ancora?</h2>
        <div class="bg-slate-50 rounded-xl p-8 shadow-md">
          <p class="text-gray-700 leading-relaxed mb-4">
            Quando vivi le giornate mettendo dei limiti ogni volta che apri bocca, non puoi dire di essere libero e spensierato. Se sei diventato un maestro nel nascondere la bocca ogni volta che discuti con qualcuno, significa che non sei mai tranquillo e sicuro di te.
          </p>
          <p class="text-gray-700 leading-relaxed mb-4">
            La paura di mostrare una parte di te di cui ti vergogni ha preso il sopravvento, e per evitare di provare dolore e fastidio sei vincolato anche nelle scelte che fai a tavola.
          </p>
          <p class="text-gray-700 leading-relaxed font-semibold text-brand-dark">
            La vecchia dentiera poco stabile, o la mancanza di uno o pi&ugrave; denti, non sono soltanto un problema estetico e funzionale. &Egrave; un limite alla tua libert&agrave;, e soprattutto &egrave; un vero ostacolo alla tua felicit&agrave;.
          </p>
        </div>
      </div>
    </section>

    <!-- BLOG PREVIEW -->
    <section class="py-16 bg-slate-50">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-10">
          <h2 class="text-2xl md:text-3xl font-bold text-brand-dark mb-3">Approfondimenti sull'implantologia</h2>
          <p class="text-gray-600">Articoli informativi dal Dott. Piernatale Civero</p>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          <NuxtLink
            v-for="article in latestArticles"
            :key="article.slug"
            :to="`/blog/${article.slug}`"
            class="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all group overflow-hidden"
          >
            <div class="h-2 bg-brand-accent"></div>
            <div class="p-5">
              <span class="text-xs font-semibold text-brand-accent">{{ article.category }}</span>
              <h3 class="font-bold text-brand-dark mt-1 mb-2 group-hover:text-brand-accent transition">{{ article.title }}</h3>
              <p class="text-gray-500 text-sm">{{ article.excerpt.substring(0, 100) }}...</p>
            </div>
          </NuxtLink>
        </div>
        <div class="text-center mt-8">
          <NuxtLink to="/blog" class="inline-block text-brand-accent font-semibold hover:underline">
            Tutti gli articoli <i class="fas fa-arrow-right ml-1"></i>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CONTACT FORM -->
    <section id="contatti" class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-10">
          <h2 class="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Non hai alcun motivo per aspettare a contattarci!
          </h2>
          <p class="text-gray-600 text-lg">
            Lascia i tuoi dati per essere ricontattato. Senza alcun impegno potrai ricevere tutte le informazioni sul nostro protocollo.
          </p>
        </div>

        <div class="md:flex gap-10">
          <!-- Benefits List -->
          <div class="md:w-1/2 mb-8 md:mb-0">
            <h3 class="font-bold text-lg text-brand-dark mb-4">Cosa ottieni:</h3>
            <div class="space-y-3">
              <div v-for="(item, i) in formBenefits" :key="i" class="flex gap-3 items-start">
                <i class="fas fa-check-circle text-brand-green mt-1"></i>
                <p class="text-gray-700 text-sm">{{ item }}</p>
              </div>
            </div>
            <div class="mt-8 p-4 bg-amber-50 rounded-xl border border-amber-100">
              <p class="text-sm text-gray-700"><strong>P.S.</strong> Richiedere informazioni non pone alcun vincolo di acquisto e non contiene spese nascoste di alcun genere.</p>
              <p class="text-sm text-gray-700 mt-2"><strong>P.P.S.</strong> Se hai perso uno o pi&ugrave; denti, o usi una dentiera, lo stato di salute della tua bocca non pu&ograve; che peggiorare. Ogni giorno che passa le cure necessarie potrebbero diventare pi&ugrave; lunghe e costose. Non perdere altro tempo!</p>
            </div>
          </div>

          <!-- Form -->
          <div class="md:w-1/2">
            <LeadForm
              title="Richiedi informazioni"
              page-source="Homepage Implantologia - Form principale"
              button-text="Invia la richiesta"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-slate-900 text-white/60 py-10">
      <div class="max-w-4xl mx-auto px-4">
        <div class="md:flex justify-between items-start gap-8 mb-8">
          <div class="mb-6 md:mb-0">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <i class="fas fa-tooth text-white text-lg"></i>
              </div>
              <span class="text-xl font-bold text-white">Smiledoc</span>
            </div>
            <p class="text-sm">Centro Odontoiatrico Smiledoc</p>
            <p class="text-sm">Via Monte Circeo 12, 00015 Monterotondo (RM)</p>
          </div>
          <div class="mb-6 md:mb-0">
            <h4 class="text-white font-semibold mb-2">Contatti</h4>
            <p class="text-sm"><a href="tel:+390690623936" class="hover:text-white transition"><i class="fas fa-phone mr-1"></i>06 906 23 936</a></p>
          </div>
          <div>
            <h4 class="text-white font-semibold mb-2">Pagine</h4>
            <p class="text-sm"><NuxtLink to="/blog" class="hover:text-white transition">Blog</NuxtLink></p>
            <p class="text-sm mt-1"><a href="https://smiledoc.it" target="_blank" rel="noopener" class="hover:text-white transition">Smiledoc.it</a></p>
          </div>
        </div>
        <div class="border-t border-white/10 pt-6 text-center text-sm">
          <p class="mb-2">&ndash; Direttore Sanitario Dott. Piernatale Civero &ndash;</p>
          <p class="text-white/40">Copyright {{ new Date().getFullYear() }} &copy; Centro Odontoiatrico Smiledoc | P.IVA: 15131801001</p>
          <div class="mt-3 space-x-4">
            <a href="/privacy" class="text-white/40 hover:text-white/60 transition">Privacy Policy</a>
            <a href="/cookie" class="text-white/40 hover:text-white/60 transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>

    <CookieBanner />
    <WhatsAppButton />
    <StickyCta />
  </div>
</template>

<script setup lang="ts">
const scrolled = ref(false)

const openFaq = ref<number | null>(null)

const { getLatestArticles } = useBlogArticles()
const latestArticles = getLatestArticles(3)

const toggleFaq = (i: number) => {
  openFaq.value = openFaq.value === i ? null : i
}

const benefits = [
  'Conoscerai tutti i vantaggi del sistema di intervento del Dott. Civero e il team di professionisti del Centro Odontoiatrico Smiledoc',
  'Avrai una corsia preferenziale per valutare la tua particolare condizione clinica',
  'Otterrai informazioni preziose per riavere nuovi denti forti in sole 24 ore (se le tue condizioni cliniche lo consentono) anche se pensi di essere un caso senza speranza',
  'Il sistema di implantologia del Dott. Civero riduce al minimo dolori e fastidi negli interventi',
  'Grazie alla sedazione cosciente e alla costante presenza di un anestesista professionista, supererai una volta per tutte la paura di sederti su quella poltrona',
]

const testimonials = [
  {
    text: 'Stavo in una condizione molto grave e il Dott. Civero ha risolto il problema e grazie a lui ho una vita quasi normale. Mi ha rimessa al mondo.',
    name: 'Natascia',
    initials: 'N',
    type: 'Recensione Google',
  },
  {
    text: 'Risolti problemi che altri medici davano per irrisolvibili, la competenza del Dr Civero e del suo staff mi ha riportato ad una vita serena. Consiglio vivamente.',
    name: 'Luca Russo',
    initials: 'LR',
    type: 'Recensione Google',
  },
  {
    text: 'Grazie alla Smiledoc ho ricominciato a sorridere. Tecniche e attrezzature all\'avanguardia, associate all\'esperienza e professionalità del Dottor Civero sono una vera garanzia.',
    name: 'Avatar 1335',
    initials: 'A',
    type: 'Recensione Google',
  },
]

const videoTestimonials = [
  {
    id: 'bRNbnjZ_NEg',
    title: 'La storia di Natale',
    description: 'Ha ricominciato a mangiare con gusto e sorridere con il metodo Denti Fissi in un Giorno',
  },
  {
    id: 'JjDjGajKZYo',
    title: 'La storia di Adriano',
    description: 'Torna a sorridere e a masticare in un giorno grazie al Centro Smiledoc',
  },
]

const formBenefits = [
  'Prenderai coscienza dei rischi che corri trascurando la tua salute dentale e rimandando le cure necessarie',
  'Capirai perché Smiledoc può offrirti in un solo incontro esami diagnostici approfonditi e completi',
  'Scoprirai perché le nostre soluzioni sono realmente su misura per ogni paziente',
  'Avrai l\'occasione di accedere a una corsia preferenziale per conoscere il tuo percorso di cure ideale',
  'Saprai qual è la strada più rapida e sicura per tornare a sorridere in libertà e mangiare ciò che desideri',
  'Tutto questo senza alcun obbligo o vincolo di acquisto!',
]

const faqItems = [
  {
    question: 'L\'intervento di implantologia è doloroso?',
    answer: 'No. L\'intervento viene eseguito in anestesia locale. Presso Smiledoc, è disponibile anche la sedazione cosciente con un anestesista dedicato, che permette di vivere l\'esperienza in totale serenità, senza ansia né dolore. La maggior parte dei pazienti riferisce di non aver avvertito alcun fastidio durante l\'intervento.',
  },
  {
    question: 'È possibile avere denti fissi in 24 ore?',
    answer: 'Sì, in molti casi è possibile grazie alla tecnica del carico immediato. Dopo l\'inserimento degli impianti, viene applicata una protesi fissa provvisoria entro 24 ore. La possibilità di procedere con il carico immediato viene valutata durante la visita diagnostica in base alle condizioni cliniche del paziente.',
  },
  {
    question: 'Posso fare gli impianti se ho poco osso?',
    answer: 'Sì. Esistono diverse tecniche che permettono di posizionare impianti anche in condizioni di osso ridotto: rialzo del seno mascellare, innesti ossei, impianti corti o inclinati e, nei casi più complessi, impianti zigomatici. Il Dott. Civero ha una vasta esperienza nella gestione di questi casi.',
  },
  {
    question: 'Quanto durano gli impianti dentali?',
    answer: 'Un impianto dentale ben posizionato e correttamente mantenuto può durare oltre 20 anni, spesso accompagnando il paziente per tutta la vita. La durata dipende dalla qualità dell\'intervento, dall\'igiene orale del paziente e dal rispetto dei controlli periodici. Presso Smiledoc, le protesi sono coperte da garanzia di 10 anni.',
  },
  {
    question: 'Quanto costa un impianto dentale?',
    answer: 'Il costo varia in base alla complessità del caso, al numero di impianti necessari e al tipo di protesi. Ogni situazione è unica e richiede una valutazione personalizzata. Dopo la prima visita diagnostica presso Smiledoc, riceverai un piano di trattamento dettagliato con tutte le informazioni economiche.',
  },
  {
    question: 'Soffro di diabete, posso fare gli impianti?',
    answer: 'Nella maggior parte dei casi sì, a condizione che il diabete sia ben compensato e sotto controllo medico. Il Dott. Civero collabora con il diabetologo del paziente per garantire la massima sicurezza in tutte le fasi del trattamento.',
  },
  {
    question: 'Come raggiungo il Centro Smiledoc?',
    answer: 'Il Centro si trova in Via Monte Circeo 12 a Monterotondo (RM), facilmente raggiungibile da Mentana (10 min), Fonte Nuova (15 min), Guidonia (15-20 min), Palombara Sabina (20 min), Fiano Romano (15 min) e Capena (10 min). Lo studio è ben collegato anche con la stazione ferroviaria di Monterotondo-Mentana.',
  },
]

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 50
  })
})
</script>
